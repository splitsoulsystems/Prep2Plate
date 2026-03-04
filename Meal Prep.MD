You are a senior full-stack software developer. Build a “Meal Planner” web app with a short onboarding quiz, a weekly meal plan generator, and an aggregated shopping list.

TECH / STACK (use defaults if not available, but be consistent):
- Frontend: React + TypeScript (Vite)
- Styling: simple CSS or Tailwind (choose one)
- State: local state + localStorage persistence
- Backend: optional. Prefer NO backend initially (all client-side). If you need an API layer, use a lightweight Node/Express server, but keep it minimal.
- Data: use a small local recipe dataset (JSON) included in the repo (start with ~25 recipes). No external APIs.

CORE USER FLOW
1) App opens on “Quiz” screen (multi-step or single form).
2) User answers:
   - numberOfPeople (1–10)
   - mealsPerWeek (e.g., 3–21)
   - dietType (omnivore, vegetarian, vegan, pescatarian, keto, paleo, mediterranean, low-carb, etc.)
   - allergies (multi-select: peanuts, tree nuts, dairy, egg, shellfish, fish, soy, wheat/gluten, sesame, etc.)
   - restrictions (multi-select + free text): halal, kosher, pork-free, no beef, veg-only, gluten-free, lactose-free, low-sodium, etc.
3) User clicks “Generate Weekly Plan”.
4) App outputs:
   - a 7-day plan (or N meals across the week based on mealsPerWeek)
   - recipe cards with title, time, servings, ingredients, steps, tags (diet/restrictions), and “why this fits”
   - ability to “Regenerate” the whole plan or swap a single recipe
5) App generates:
   - an aggregated shopping list for the full plan
   - grouped by category (Produce, Meat/Protein, Dairy, Pantry, Spices, Frozen, Bakery, Other)
   - quantities scaled to numberOfPeople and recipe servings
   - deduplicate ingredients (e.g., “onion” across recipes sums quantities)

RECIPE / DATA REQUIREMENTS
- Create a local JSON dataset: recipes[] where each recipe includes:
  id, name, description,
  servings (base),
  prepTimeMins, cookTimeMins,
  tags (diet types),
  restrictionsSupported (e.g., halal/kosher-friendly flags where reasonable),
  allergens (list),
  ingredients: [{ name, quantity, unit, category, optional: boolean }],
  steps: string[]
- Ensure the dataset includes variety across diet types and common restrictions (at least some vegetarian, vegan, halal-friendly, gluten-free options, etc.)
- Add notes/assumptions for halal/kosher (e.g., “uses chicken breast; ensure certified halal/kosher as needed”)

PLANNING / SELECTION LOGIC
- Filter recipes that conflict with allergies/restrictions.
- Prefer matching dietType; if not enough recipes exist, fall back gracefully and explain (e.g., “Not enough strict keto recipes; included low-carb alternatives”).
- Avoid repeating the same recipe more than once unless user allows repeats (add a toggle “Allow repeats” default OFF).
- Distribute recipes across the week (balance prep time; don’t put 7 long recipes in a row).
- Scale ingredient quantities: scaledQty = baseQty * (numberOfPeople / recipe.servings). Round sensibly (e.g., 1.33 cups -> 1 1/3 cups) but don’t over-engineer.

UI REQUIREMENTS
- Pages/sections: Quiz, Weekly Plan, Shopping List
- Top nav tabs or stepper
- Recipe detail modal or expand/collapse
- Buttons: Generate, Regenerate Plan, Swap Recipe, Print/Export Shopping List (export to plain text is enough)
- Persist quiz answers + current plan + shopping list in localStorage
- Include basic validation and clear error messages

PROJECT OUTPUT
- Provide the full file/folder structure.
- Provide all code with clear instructions to run:
  - npm install
  - npm run dev
- Include a README.md that explains:
  - how recipe filtering works
  - how ingredient scaling works
  - how to extend the recipe dataset
- Include a few basic unit tests (Vitest) for:
  - filtering logic
  - shopping list aggregation
  - scaling function

QUALITY BAR
- Clean, readable TypeScript
- Reusable components (QuizForm, PlanView, RecipeCard, ShoppingList)
- No placeholder “TODO” in core logic; app must work end-to-end.

Before coding:
1) Summarize the architecture and key data structures.
2) List the exact screens/components.
3) Then output the full code.