/* =========================================================
   MEAL PLANNER – App Logic
   ========================================================= */

// ── State ──────────────────────────────────────────────────
const STATE = {
  step: 1,
  answers: { numberOfPeople: 2, mealsPerWeek: 7, dietType: 'omnivore', allergies: [], restrictions: [] },
  plan: [],        // [{ day, meals:[recipe,...] }, ...]
  allowRepeats: false,
};

// ── Diet compatibility map ──────────────────────────────────
const DIET_COMPAT = {
  omnivore:      ['omnivore','vegetarian','vegan','pescatarian','keto','paleo','mediterranean','low-carb','gluten-free'],
  vegetarian:    ['vegetarian','vegan'],
  vegan:         ['vegan'],
  pescatarian:   ['pescatarian','vegetarian','vegan'],
  keto:          ['keto'],
  paleo:         ['paleo','gluten-free'],
  mediterranean: ['mediterranean','vegetarian','pescatarian','vegan'],
  'low-carb':    ['low-carb','keto'],
};

// ── Category icons ──────────────────────────────────────────
const CAT_ICONS = {
  'Produce': '🥦', 'Meat & Fish': '🥩', 'Dairy & Eggs': '🥛',
  'Pantry': '🫙', 'Grains': '🌾', 'Spices': '🧂', 'Condiments': '🫒', 'Other': '📦',
};

const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

// ── Helpers ─────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }

function formatQty(qty) {
  if (qty === 0) return '0';
  const rounded = Math.round(qty * 4) / 4;
  const whole   = Math.floor(rounded);
  const frac    = Math.round((rounded - whole) * 4);
  const fracs   = ['', '¼', '½', '¾'];
  if (whole === 0) return fracs[frac] || '¼';
  if (frac  === 0) return `${whole}`;
  return `${whole} ${fracs[frac]}`;
}

function scaleQty(qty, recipeServings, numPeople) {
  return qty * (numPeople / recipeServings);
}

function totalMins(r) { return r.prepTimeMins + r.cookTimeMins; }

// ── Filtering ───────────────────────────────────────────────
function filterRecipes(answers) {
  const { dietType, allergies, restrictions } = answers;
  const allowed = DIET_COMPAT[dietType] || DIET_COMPAT.omnivore;

  return RECIPES.filter(r => {
    if (!r.tags.some(t => allowed.includes(t))) return false;
    if (allergies.some(a => r.allergens.includes(a))) return false;

    for (const res of restrictions) {
      if (res === 'halal'       && !r.restrictionsSupported.includes('halal'))       return false;
      if (res === 'kosher'      && !r.restrictionsSupported.includes('kosher'))      return false;
      if (res === 'pork-free'   && !r.restrictionsSupported.includes('pork-free'))   return false;
      if (res === 'no-beef'     && !r.restrictionsSupported.includes('no-beef'))     return false;
      if (res === 'gluten-free' && !r.tags.includes('gluten-free'))                  return false;
      if (res === 'lactose-free'&& r.allergens.includes('dairy'))                   return false;
      if (res === 'veg-only'    && !r.tags.some(t => ['vegetarian','vegan'].includes(t))) return false;
    }
    return true;
  });
}

// ── Plan Generation ─────────────────────────────────────────
function generatePlan(answers, allowRepeats) {
  const { mealsPerWeek } = answers;
  let pool = filterRecipes(answers);

  let fallback = false;
  if (pool.length === 0) { pool = RECIPES.slice(); fallback = true; }

  let available = [...pool];
  const selected = [];

  for (let i = 0; i < mealsPerWeek; i++) {
    if (available.length === 0) {
      if (!allowRepeats && pool.length > 0) {
        available = [...pool];
      } else { break; }
    }
    const idx = Math.floor(Math.random() * available.length);
    selected.push(available.splice(idx, 1)[0]);
  }

  // Distribute across 7 days
  const base  = Math.floor(mealsPerWeek / 7);
  const extra = mealsPerWeek % 7;
  const plan  = DAYS.map((day, di) => ({
    day,
    meals: selected.splice(0, base + (di < extra ? 1 : 0))
  }));

  return { plan, fallback };
}

// ── Shopping List Aggregation ───────────────────────────────
function buildShoppingList(plan, numPeople) {
  const map = {};
  plan.forEach(({ meals }) => {
    meals.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        const scaled = scaleQty(ing.quantity, recipe.servings, numPeople);
        const key    = `${ing.name.toLowerCase()}||${ing.unit}`;
        if (map[key]) {
          map[key].qty += scaled;
        } else {
          map[key] = { name: ing.name, qty: scaled, unit: ing.unit, category: ing.category };
        }
      });
    });
  });

  const cats = {};
  Object.values(map).forEach(item => {
    if (!cats[item.category]) cats[item.category] = [];
    cats[item.category].push(item);
  });
  return cats;
}

// ─────── RENDERING ──────────────────────────────────────────

// ── Quiz Step Navigation ────────────────────────────────────
function showStep(n) {
  STATE.step = n;
  document.querySelectorAll('.quiz-step').forEach((el, i) => {
    el.classList.toggle('hidden', i + 1 !== n);
  });

  // Step indicator dots
  document.querySelectorAll('.step-dot').forEach(dot => {
    const s = parseInt(dot.dataset.step);
    dot.classList.toggle('active', s === n);
    dot.classList.toggle('completed', s < n);
  });
  // Step indicator lines
  for (let i = 1; i <= 3; i++) {
    const line = $(`line-${i}-${i+1}`);
    if (line) line.classList.toggle('completed', i < n);
  }

  $('prev-btn').style.visibility = n === 1 ? 'hidden' : 'visible';
  $('next-btn').classList.toggle('hidden', n === 4);
  $('generate-btn').classList.toggle('hidden', n !== 4);
}

// ── Render Plan ─────────────────────────────────────────────
function renderPlan() {
  const { plan, fallback } = generatePlan(STATE.answers, STATE.allowRepeats);
  STATE.plan = plan;

  const { numberOfPeople, mealsPerWeek, dietType } = STATE.answers;
  $('plan-summary').textContent =
    `${mealsPerWeek} meals · ${numberOfPeople} ${numberOfPeople === 1 ? 'person' : 'people'} · ${dietType}`;

  const notice = $('fallback-notice');
  if (fallback) {
    notice.textContent = '⚠️ Not enough recipes matched your filters – showing all recipes instead.';
    notice.classList.remove('hidden');
  } else {
    notice.classList.add('hidden');
  }

  const grid = $('plan-grid');
  grid.innerHTML = plan.map(({ day, meals }) => `
    <div class="day-card">
      <div class="day-header">${day}</div>
      <div class="day-meals">
        ${meals.length === 0
          ? '<div class="day-empty">Rest day 🌿</div>'
          : meals.map(r => recipeCardMini(r, day)).join('')}
      </div>
    </div>`).join('');

  // Attach card click & swap listeners
  grid.querySelectorAll('.recipe-card-mini').forEach(card => {
    card.querySelector('.btn-swap').addEventListener('click', e => {
      e.stopPropagation();
      swapMeal(card.dataset.day, parseInt(card.dataset.id));
    });
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

function recipeImageUrl(r) {
  const STOP_WORDS = new Set(['and','with','the','in','a','of','&','on']);
  const keyword = r.name.toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .split(/\s+/)
    .filter(w => w && !STOP_WORDS.has(w))
    .slice(0, 2)
    .join(',');
  // loremflickr: free, active service; lock=id keeps each recipe's image consistent
  return `https://loremflickr.com/88/130/food,${encodeURIComponent(keyword)}?lock=${r.id}`;
}

function recipeCardMini(r, day) {
  const mins = totalMins(r);
  const dietTag = r.tags[0];
  const imgUrl = recipeImageUrl(r);
  return `<div class="recipe-card-mini" data-id="${r.id}" data-day="${day}">
    <div class="recipe-card-body">
      <div class="recipe-title">${r.name}</div>
      <div class="recipe-meta"><span>⏱ ${mins} min</span><span>👤 ${r.servings} srv</span></div>
      <div class="recipe-tags">
        <span class="tag diet">${dietTag}</span>
        ${r.tags.includes('gluten-free') ? '<span class="tag restriction">GF</span>' : ''}
      </div>
      <div class="recipe-card-actions">
        <button class="btn-swap" title="Swap this recipe">🔄 Swap</button>
      </div>
    </div>
    <img class="recipe-card-image" src="${imgUrl}" alt="${r.name}" loading="lazy" onerror="this.style.display='none'" />
  </div>`;
}

// ── Swap a single meal ──────────────────────────────────────
function swapMeal(day, recipeId) {
  const filtered = filterRecipes(STATE.answers);
  const usedIds  = STATE.plan.flatMap(d => d.meals.map(m => m.id));
  let pool = filtered.filter(r => r.id !== recipeId && !usedIds.includes(r.id));
  if (pool.length === 0) pool = filtered.filter(r => r.id !== recipeId);
  if (pool.length === 0) pool = RECIPES.filter(r => r.id !== recipeId);

  const newRecipe = pool[Math.floor(Math.random() * pool.length)];
  const dayObj = STATE.plan.find(d => d.day === day);
  if (dayObj) {
    const idx = dayObj.meals.findIndex(m => m.id === recipeId);
    if (idx !== -1) dayObj.meals.splice(idx, 1, newRecipe);
  }
  renderPlanFromState();
}

function renderPlanFromState() {
  const grid = $('plan-grid');
  grid.innerHTML = STATE.plan.map(({ day, meals }) => `
    <div class="day-card">
      <div class="day-header">${day}</div>
      <div class="day-meals">
        ${meals.length === 0
          ? '<div class="day-empty">Rest day 🌿</div>'
          : meals.map(r => recipeCardMini(r, day)).join('')}
      </div>
    </div>`).join('');

  grid.querySelectorAll('.recipe-card-mini').forEach(card => {
    card.querySelector('.btn-swap').addEventListener('click', e => {
      e.stopPropagation();
      swapMeal(card.dataset.day, parseInt(card.dataset.id));
    });
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });
}

// ── Render Shopping List ────────────────────────────────────
function renderShoppingList() {
  const { numberOfPeople, mealsPerWeek } = STATE.answers;
  const totalRecipes = STATE.plan.reduce((s, d) => s + d.meals.length, 0);
  $('shopping-summary').textContent =
    `${totalRecipes} recipes · ${mealsPerWeek} meals · ${numberOfPeople} ${numberOfPeople === 1 ? 'person' : 'people'}`;

  const cats = buildShoppingList(STATE.plan, numberOfPeople);
  const catOrder = ['Produce','Meat & Fish','Dairy & Eggs','Grains','Pantry','Condiments','Spices','Other'];
  const sortedCats = catOrder.filter(c => cats[c]).concat(Object.keys(cats).filter(c => !catOrder.includes(c)));

  const container = $('shopping-list');
  container.innerHTML = sortedCats.map(cat => `
    <div class="category-card">
      <div class="category-header">${CAT_ICONS[cat] || '📦'} ${cat}</div>
      <div class="category-items">
        ${cats[cat].map(item => {
          const unit = item.unit === 'to taste' ? 'to taste' : `${formatQty(item.qty)} ${item.unit}`;
          return `<div class="shopping-item">
            <span class="shopping-item-name">${item.name}</span>
            <span class="shopping-item-qty">${unit}</span>
          </div>`;
        }).join('')}
      </div>
    </div>`).join('');
}

// ── Recipe Detail Modal ─────────────────────────────────────
function openModal(recipeId) {
  const r   = RECIPES.find(x => x.id === recipeId);
  if (!r) return;
  const np  = STATE.answers.numberOfPeople;

  const ingredients = r.ingredients.map(ing => {
    const qty = scaleQty(ing.quantity, r.servings, np);
    const qStr = ing.unit === 'to taste' ? 'to taste' : `${formatQty(qty)} ${ing.unit}`;
    return `<li class="ingredient-item">
      <span class="ingredient-name">${ing.name}</span>
      <span class="ingredient-qty">${qStr}</span>
    </li>`;
  }).join('');

  const steps = r.steps.map((s, i) =>
    `<li class="step-item"><strong>Step ${i+1}:</strong> ${s}</li>`).join('');

  const tags = [...r.tags, ...r.restrictionsSupported].map(t =>
    `<span class="tag ${r.tags.includes(t) ? 'diet' : 'restriction'}">${t}</span>`).join('');

  $('modal-body').innerHTML = `
    <div class="modal-recipe-name">${r.name}</div>
    <div class="modal-desc">${r.description}</div>
    <div class="modal-meta">
      <span class="modal-meta-item">⏱ Prep: ${r.prepTimeMins} min</span>
      <span class="modal-meta-item">🔥 Cook: ${r.cookTimeMins} min</span>
      <span class="modal-meta-item">👤 Serves: ${r.servings} (scaled to ${np})</span>
    </div>
    <div class="modal-tags">${tags}</div>
    <div class="modal-section-title">🛒 Ingredients</div>
    <ul class="ingredient-list">${ingredients}</ul>
    <div class="modal-section-title">👨‍🍳 Method</div>
    <ol class="step-list">${steps}</ol>
    ${r.notes ? `<div class="modal-note">💡 ${r.notes}</div>` : ''}
  `;

  $('recipe-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('recipe-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

// ── Tab Switching ───────────────────────────────────────────
function showTab(tab) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const section = $(`${tab}-section`);
  section.classList.remove('hidden');   // remove !important override from initial HTML
  section.classList.add('active');
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
}

// ── Export Shopping List ────────────────────────────────────
function exportShoppingList() {
  const { numberOfPeople, mealsPerWeek } = STATE.answers;
  const cats = buildShoppingList(STATE.plan, numberOfPeople);
  let text = `🥗 MEAL PLANNER – SHOPPING LIST\n`;
  text += `${mealsPerWeek} meals for ${numberOfPeople} ${numberOfPeople === 1 ? 'person' : 'people'}\n`;
  text += `Generated: ${new Date().toLocaleDateString()}\n\n`;

  Object.entries(cats).forEach(([cat, items]) => {
    text += `── ${cat} ──\n`;
    items.forEach(item => {
      const qty = item.unit === 'to taste' ? 'to taste' : `${formatQty(item.qty)} ${item.unit}`;
      text += `  ☐  ${item.name} – ${qty}\n`;
    });
    text += '\n';
  });

  text += '\n── RECIPES THIS WEEK ──\n';
  STATE.plan.forEach(({ day, meals }) => {
    if (meals.length) text += `${day}: ${meals.map(m => m.name).join(', ')}\n`;
  });

  const blob = new Blob([text], { type: 'text/plain' });
  const a    = document.createElement('a');
  a.href     = URL.createObjectURL(blob);
  a.download = 'shopping-list.txt';
  a.click();
  URL.revokeObjectURL(a.href);
}

// ── Read Quiz Answers ───────────────────────────────────────
function readAnswers() {
  STATE.answers.numberOfPeople = parseInt($('num-people').value);
  STATE.answers.mealsPerWeek   = parseInt($('meals-per-week').value);
  STATE.answers.dietType       = document.querySelector('input[name="diet"]:checked').value;
  STATE.answers.allergies      = [...document.querySelectorAll('.allergy-cb:checked')].map(cb => cb.value);
  STATE.answers.restrictions   = [...document.querySelectorAll('.restrict-cb:checked')].map(cb => cb.value);
}

// ── Event Listeners ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Sliders
  $('num-people').addEventListener('input', e => { $('people-val').textContent = e.target.value; });
  $('meals-per-week').addEventListener('input', e => { $('meals-val').textContent = e.target.value; });

  // Quiz navigation
  $('next-btn').addEventListener('click', () => showStep(STATE.step + 1));
  $('prev-btn').addEventListener('click', () => showStep(STATE.step - 1));

  // Generate button
  $('generate-btn').addEventListener('click', () => {
    readAnswers();
    showTab('plan');
    renderPlan();
  });

  // Regenerate
  $('regenerate-btn').addEventListener('click', renderPlan);

  // Allow repeats toggle
  $('allow-repeats').addEventListener('change', e => {
    STATE.allowRepeats = e.target.checked;
  });

  // Go to shopping list
  $('go-shopping-btn').addEventListener('click', () => {
    showTab('shopping');
    renderShoppingList();
  });

  // Back to plan
  $('go-plan-btn').addEventListener('click', () => showTab('plan'));

  // Export
  $('export-btn').addEventListener('click', exportShoppingList);

  // Modal close
  $('modal-close').addEventListener('click', closeModal);
  $('modal-overlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab === 'shopping' && STATE.plan.length) {
        showTab('shopping');
        renderShoppingList();
      } else if (tab === 'plan' && STATE.plan.length) {
        showTab('plan');
      } else if (tab === 'quiz') {
        showTab('quiz');
      }
    });
  });
});

