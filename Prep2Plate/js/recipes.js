/* =========================================================
   RECIPE DATABASE  –  25 diverse recipes
   tags: diet types the recipe fits
   restrictionsSupported: halal | kosher | pork-free | no-beef | veg-only | gluten-free | low-sodium
   allergens: contains these (peanuts|tree-nuts|dairy|egg|shellfish|fish|soy|gluten|sesame)
   ingredients: { name, quantity, unit, category }
   category: Produce | Meat & Fish | Dairy & Eggs | Pantry | Grains | Spices | Condiments
   ========================================================= */
const RECIPES = [

  /* ── 1 ── */
  {
    id: 1, name: "Grilled Lemon Herb Chicken", servings: 4,
    description: "Juicy chicken thighs marinated in lemon, garlic and fresh herbs, grilled to perfection.",
    prepTimeMins: 15, cookTimeMins: 25,
    tags: ["omnivore", "paleo", "gluten-free", "low-carb"],
    restrictionsSupported: ["halal", "pork-free", "no-beef", "gluten-free", "low-sodium"],
    allergens: [],
    ingredients: [
      { name: "chicken thighs (bone-in)", quantity: 800, unit: "g", category: "Meat & Fish" },
      { name: "lemon", quantity: 2, unit: "whole", category: "Produce" },
      { name: "garlic cloves", quantity: 4, unit: "whole", category: "Produce" },
      { name: "olive oil", quantity: 3, unit: "tbsp", category: "Condiments" },
      { name: "fresh rosemary", quantity: 2, unit: "sprigs", category: "Produce" },
      { name: "fresh thyme", quantity: 4, unit: "sprigs", category: "Produce" },
      { name: "mixed vegetables (zucchini, bell pepper, red onion)", quantity: 500, unit: "g", category: "Produce" },
      { name: "salt & black pepper", quantity: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Juice one lemon, slice the second. Mince garlic. Mix lemon juice, garlic, olive oil, rosemary and thyme in a bowl.",
      "Score chicken thighs and coat in the marinade. Refrigerate 30 min (or overnight).",
      "Preheat grill or grill pan to medium-high. Grill chicken 12–14 min per side until cooked through (74 °C internal).",
      "Toss vegetables in olive oil, salt and pepper. Grill alongside chicken 8–10 min, turning once.",
      "Rest chicken 5 min before serving with grilled vegetables and lemon slices."
    ]
  },

  /* ── 2 ── */
  {
    id: 2, name: "Classic Spaghetti Bolognese", servings: 4,
    description: "A rich, slow-cooked beef ragù tossed with al-dente spaghetti – the ultimate comfort meal.",
    prepTimeMins: 15, cookTimeMins: 45,
    tags: ["omnivore"],
    restrictionsSupported: ["halal", "pork-free"],
    allergens: ["gluten"],
    ingredients: [
      { name: "spaghetti", quantity: 400, unit: "g", category: "Grains" },
      { name: "lean ground beef", quantity: 500, unit: "g", category: "Meat & Fish" },
      { name: "crushed tomatoes (canned)", quantity: 400, unit: "g", category: "Pantry" },
      { name: "tomato paste", quantity: 2, unit: "tbsp", category: "Pantry" },
      { name: "onion", quantity: 1, unit: "whole", category: "Produce" },
      { name: "carrot", quantity: 1, unit: "whole", category: "Produce" },
      { name: "celery stalk", quantity: 1, unit: "whole", category: "Produce" },
      { name: "garlic cloves", quantity: 3, unit: "whole", category: "Produce" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "beef stock", quantity: 250, unit: "ml", category: "Pantry" },
      { name: "dried oregano", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "bay leaf", quantity: 2, unit: "whole", category: "Spices" },
      { name: "parmesan (optional)", quantity: 40, unit: "g", category: "Dairy & Eggs" }
    ],
    steps: [
      "Finely dice onion, carrot, celery and garlic.",
      "Heat oil in a large pot over medium heat. Sauté vegetables 8 min until soft.",
      "Add beef, break up and brown 5 min. Stir in tomato paste and cook 2 min.",
      "Add crushed tomatoes, stock, oregano and bay leaves. Simmer uncovered 30 min, stirring occasionally.",
      "Cook spaghetti per packet instructions. Drain, reserving 1/2 cup pasta water.",
      "Remove bay leaves. Toss pasta with ragù, adding pasta water to loosen. Serve topped with parmesan."
    ]
  },

  /* ── 3 ── */
  {
    id: 3, name: "Tofu & Vegetable Stir Fry", servings: 2,
    description: "Crispy tofu and colourful vegetables tossed in a savory ginger-soy glaze over steamed rice.",
    prepTimeMins: 15, cookTimeMins: 20,
    tags: ["vegan", "vegetarian"],
    restrictionsSupported: ["halal", "kosher", "pork-free", "no-beef", "veg-only"],
    allergens: ["soy", "sesame", "gluten"],
    ingredients: [
      { name: "firm tofu", quantity: 400, unit: "g", category: "Meat & Fish" },
      { name: "broccoli florets", quantity: 200, unit: "g", category: "Produce" },
      { name: "snap peas", quantity: 120, unit: "g", category: "Produce" },
      { name: "red bell pepper", quantity: 1, unit: "whole", category: "Produce" },
      { name: "carrot", quantity: 1, unit: "whole", category: "Produce" },
      { name: "soy sauce", quantity: 3, unit: "tbsp", category: "Condiments" },
      { name: "sesame oil", quantity: 1, unit: "tbsp", category: "Condiments" },
      { name: "fresh ginger", quantity: 1, unit: "tbsp", category: "Produce" },
      { name: "garlic cloves", quantity: 2, unit: "whole", category: "Produce" },
      { name: "cornstarch", quantity: 1, unit: "tbsp", category: "Pantry" },
      { name: "sesame seeds", quantity: 1, unit: "tbsp", category: "Spices" },
      { name: "jasmine rice", quantity: 200, unit: "g", category: "Grains" },
      { name: "vegetable oil", quantity: 2, unit: "tbsp", category: "Condiments" }
    ],
    steps: [
      "Press tofu 15 min between paper towels. Cut into 2 cm cubes. Toss with 1 tbsp soy sauce and cornstarch.",
      "Cook rice per packet instructions.",
      "Heat 1 tbsp oil in wok or large pan over high heat. Fry tofu 8–10 min, turning, until golden on all sides. Remove.",
      "Add remaining oil. Stir fry garlic and ginger 30 sec, then add vegetables and cook 5–6 min.",
      "Return tofu. Add soy sauce and sesame oil. Toss 1–2 min.",
      "Serve over rice, garnished with sesame seeds."
    ]
  },

  /* ── 4 ── */
  {
    id: 4, name: "Red Lentil Soup", servings: 4,
    description: "A warming, spiced red lentil soup with tomatoes, cumin and lemon – naturally vegan and packed with protein.",
    prepTimeMins: 10, cookTimeMins: 30,
    tags: ["vegan", "vegetarian", "gluten-free", "mediterranean", "low-carb"],
    restrictionsSupported: ["halal", "kosher", "pork-free", "no-beef", "veg-only", "gluten-free"],
    allergens: [],
    ingredients: [
      { name: "red lentils", quantity: 300, unit: "g", category: "Pantry" },
      { name: "onion", quantity: 1, unit: "whole", category: "Produce" },
      { name: "garlic cloves", quantity: 3, unit: "whole", category: "Produce" },
      { name: "carrot", quantity: 2, unit: "whole", category: "Produce" },
      { name: "canned diced tomatoes", quantity: 400, unit: "g", category: "Pantry" },
      { name: "vegetable stock", quantity: 1, unit: "litre", category: "Pantry" },
      { name: "ground cumin", quantity: 2, unit: "tsp", category: "Spices" },
      { name: "ground coriander", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "smoked paprika", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "lemon", quantity: 1, unit: "whole", category: "Produce" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "fresh parsley", quantity: 1, unit: "handful", category: "Produce" }
    ],
    steps: [
      "Dice onion, carrot and garlic. Heat oil in a large pot over medium heat. Sauté onion and carrot 7 min.",
      "Add garlic, cumin, coriander and paprika. Cook 1 min until fragrant.",
      "Rinse lentils and add to pot along with tomatoes and stock. Bring to a boil.",
      "Reduce heat and simmer 20 min until lentils are completely soft.",
      "Use a hand blender to partially blend the soup for a creamy texture (leave some whole lentils).",
      "Stir in lemon juice. Adjust seasoning and serve with fresh parsley."
    ]
  },

  /* ── 5 ── */
  {
    id: 5, name: "Baked Salmon with Asparagus", servings: 2,
    description: "Tender oven-baked salmon fillets alongside garlic roasted asparagus – ready in 30 minutes.",
    prepTimeMins: 10, cookTimeMins: 20,
    tags: ["pescatarian", "keto", "gluten-free", "low-carb", "paleo"],
    restrictionsSupported: ["pork-free", "no-beef", "gluten-free"],
    allergens: ["fish"],
    ingredients: [
      { name: "salmon fillets", quantity: 400, unit: "g", category: "Meat & Fish" },
      { name: "asparagus", quantity: 300, unit: "g", category: "Produce" },
      { name: "garlic cloves", quantity: 3, unit: "whole", category: "Produce" },
      { name: "lemon", quantity: 1, unit: "whole", category: "Produce" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "dijon mustard", quantity: 1, unit: "tbsp", category: "Condiments" },
      { name: "honey", quantity: 1, unit: "tsp", category: "Pantry" },
      { name: "dried dill", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "salt & black pepper", quantity: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Preheat oven to 200 °C. Line a baking tray with parchment.",
      "Mix mustard, honey, dill, lemon zest, salt and pepper. Spread over salmon.",
      "Trim asparagus and toss with olive oil, minced garlic, salt and pepper. Arrange on tray.",
      "Place salmon alongside asparagus. Bake 15–18 min until salmon flakes easily.",
      "Serve with lemon wedges."
    ]
  }

,

  /* ── 6 ── */
  {
    id: 6, name: "Chicken Tikka Masala", servings: 4,
    description: "Tender chicken in a rich, creamy tomato-spiced sauce. Serve with basmati rice or naan.",
    prepTimeMins: 20, cookTimeMins: 35,
    tags: ["omnivore", "mediterranean", "gluten-free"],
    restrictionsSupported: ["halal", "pork-free", "gluten-free"],
    allergens: ["dairy"],
    ingredients: [
      { name: "chicken breast", quantity: 700, unit: "g", category: "Meat & Fish" },
      { name: "plain yoghurt", quantity: 150, unit: "g", category: "Dairy & Eggs" },
      { name: "canned crushed tomatoes", quantity: 400, unit: "g", category: "Pantry" },
      { name: "heavy cream", quantity: 120, unit: "ml", category: "Dairy & Eggs" },
      { name: "onion", quantity: 1, unit: "whole", category: "Produce" },
      { name: "garlic cloves", quantity: 4, unit: "whole", category: "Produce" },
      { name: "fresh ginger", quantity: 2, unit: "tsp", category: "Produce" },
      { name: "garam masala", quantity: 2, unit: "tsp", category: "Spices" },
      { name: "ground cumin", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "ground turmeric", quantity: 0.5, unit: "tsp", category: "Spices" },
      { name: "chilli powder", quantity: 0.5, unit: "tsp", category: "Spices" },
      { name: "vegetable oil", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "basmati rice", quantity: 300, unit: "g", category: "Grains" },
      { name: "fresh coriander", quantity: 1, unit: "handful", category: "Produce" }
    ],
    steps: [
      "Cut chicken into 4 cm chunks. Mix with yoghurt, half the garam masala, half the cumin and salt. Marinate 30 min.",
      "Cook rice per packet instructions.",
      "Heat oil in a large pan. Brown chicken 5 min. Remove and set aside.",
      "In same pan sauté onion 5 min. Add garlic, ginger and spices; cook 1 min.",
      "Add crushed tomatoes and cook 10 min until thickened. Stir in cream.",
      "Return chicken, simmer 10 min. Garnish with fresh coriander and serve over rice."
    ]
  },

  /* ── 7 ── */
  {
    id: 7, name: "Black Bean & Sweet Potato Tacos", servings: 4,
    description: "Colourful, smoky tacos filled with roasted sweet potato and spiced black beans.",
    prepTimeMins: 15, cookTimeMins: 30,
    tags: ["vegan", "vegetarian", "gluten-free"],
    restrictionsSupported: ["halal", "kosher", "pork-free", "no-beef", "veg-only", "gluten-free"],
    allergens: [],
    ingredients: [
      { name: "sweet potato", quantity: 600, unit: "g", category: "Produce" },
      { name: "canned black beans", quantity: 400, unit: "g", category: "Pantry" },
      { name: "corn tortillas (small)", quantity: 12, unit: "whole", category: "Grains" },
      { name: "avocado", quantity: 2, unit: "whole", category: "Produce" },
      { name: "lime", quantity: 2, unit: "whole", category: "Produce" },
      { name: "red cabbage", quantity: 150, unit: "g", category: "Produce" },
      { name: "smoked paprika", quantity: 1.5, unit: "tsp", category: "Spices" },
      { name: "ground cumin", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "chilli powder", quantity: 0.5, unit: "tsp", category: "Spices" },
      { name: "garlic powder", quantity: 0.5, unit: "tsp", category: "Spices" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "fresh coriander", quantity: 1, unit: "handful", category: "Produce" }
    ],
    steps: [
      "Preheat oven to 220 °C. Dice sweet potato, toss with oil, paprika, cumin and salt. Roast 25 min.",
      "Drain and rinse beans. Warm in a pan with garlic powder, chilli and a pinch of salt for 5 min.",
      "Mash avocado with lime juice, salt and pepper.",
      "Shred red cabbage, toss with lime juice and a pinch of salt.",
      "Warm tortillas in a dry pan. Assemble tacos with beans, sweet potato, cabbage, avocado and coriander."
    ]
  },

  /* ── 8 ── */
  {
    id: 8, name: "Beef & Broccoli Stir Fry", servings: 4,
    description: "Tender strips of beef and crisp broccoli in a glossy ginger-soy sauce over fluffy rice.",
    prepTimeMins: 15, cookTimeMins: 15,
    tags: ["omnivore", "low-carb"],
    restrictionsSupported: ["halal", "pork-free"],
    allergens: ["soy", "sesame", "gluten"],
    ingredients: [
      { name: "beef sirloin", quantity: 500, unit: "g", category: "Meat & Fish" },
      { name: "broccoli", quantity: 500, unit: "g", category: "Produce" },
      { name: "soy sauce", quantity: 4, unit: "tbsp", category: "Condiments" },
      { name: "oyster sauce", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "sesame oil", quantity: 1, unit: "tbsp", category: "Condiments" },
      { name: "fresh ginger", quantity: 1, unit: "tbsp", category: "Produce" },
      { name: "garlic cloves", quantity: 3, unit: "whole", category: "Produce" },
      { name: "cornstarch", quantity: 2, unit: "tsp", category: "Pantry" },
      { name: "vegetable oil", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "beef stock", quantity: 80, unit: "ml", category: "Pantry" },
      { name: "jasmine rice", quantity: 300, unit: "g", category: "Grains" }
    ],
    steps: [
      "Slice beef thinly against the grain. Toss with 1 tbsp soy sauce and cornstarch. Marinate 10 min.",
      "Cook rice per packet instructions.",
      "Blanch broccoli florets 2 min in boiling water, then drain.",
      "Heat oil in wok on high. Sear beef 2–3 min. Remove. Add garlic and ginger 30 sec.",
      "Add broccoli. Mix remaining soy, oyster sauce, stock and sesame oil; pour in. Toss 2 min.",
      "Return beef. Stir until sauce thickens. Serve over rice."
    ]
  },

  /* ── 9 ── */
  {
    id: 9, name: "Greek Salad with Chickpeas", servings: 4,
    description: "Crisp Mediterranean salad with tomatoes, cucumber, olives, feta and hearty chickpeas.",
    prepTimeMins: 15, cookTimeMins: 0,
    tags: ["vegetarian", "mediterranean", "gluten-free", "low-carb"],
    restrictionsSupported: ["kosher", "pork-free", "no-beef", "veg-only", "gluten-free"],
    allergens: ["dairy"],
    ingredients: [
      { name: "cherry tomatoes", quantity: 300, unit: "g", category: "Produce" },
      { name: "cucumber", quantity: 1, unit: "whole", category: "Produce" },
      { name: "red onion", quantity: 0.5, unit: "whole", category: "Produce" },
      { name: "kalamata olives", quantity: 100, unit: "g", category: "Pantry" },
      { name: "feta cheese", quantity: 200, unit: "g", category: "Dairy & Eggs" },
      { name: "canned chickpeas", quantity: 400, unit: "g", category: "Pantry" },
      { name: "olive oil", quantity: 3, unit: "tbsp", category: "Condiments" },
      { name: "red wine vinegar", quantity: 1.5, unit: "tbsp", category: "Condiments" },
      { name: "dried oregano", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "fresh parsley", quantity: 1, unit: "handful", category: "Produce" }
    ],
    steps: [
      "Halve tomatoes, chop cucumber into chunks, thinly slice red onion.",
      "Drain and rinse chickpeas.",
      "Whisk olive oil, vinegar, oregano, salt and pepper in a large bowl.",
      "Add all vegetables, olives and chickpeas. Toss to coat.",
      "Crumble feta over the top. Garnish with parsley and serve immediately."
    ]
  },

  /* ── 10 ── */
  {
    id: 10, name: "Garlic Shrimp Fried Rice", servings: 4,
    description: "Wok-tossed fried rice loaded with plump shrimp, eggs and crispy vegetables.",
    prepTimeMins: 15, cookTimeMins: 20,
    tags: ["pescatarian"],
    restrictionsSupported: ["pork-free", "no-beef"],
    allergens: ["shellfish", "soy", "egg", "sesame", "gluten"],
    ingredients: [
      { name: "raw shrimp (peeled)", quantity: 400, unit: "g", category: "Meat & Fish" },
      { name: "cooked jasmine rice (cold)", quantity: 400, unit: "g", category: "Grains" },
      { name: "eggs", quantity: 3, unit: "whole", category: "Dairy & Eggs" },
      { name: "frozen peas", quantity: 150, unit: "g", category: "Produce" },
      { name: "spring onions", quantity: 4, unit: "whole", category: "Produce" },
      { name: "garlic cloves", quantity: 4, unit: "whole", category: "Produce" },
      { name: "soy sauce", quantity: 3, unit: "tbsp", category: "Condiments" },
      { name: "sesame oil", quantity: 1, unit: "tbsp", category: "Condiments" },
      { name: "vegetable oil", quantity: 2, unit: "tbsp", category: "Condiments" }
    ],
    steps: [
      "Season shrimp with salt and pepper.",
      "Heat 1 tbsp oil in wok on high. Cook shrimp 2–3 min until pink. Remove.",
      "Add remaining oil. Scramble eggs until just set, push to the side.",
      "Add garlic and spring onion whites 30 sec. Add cold rice, press flat and fry 3 min undisturbed.",
      "Toss rice. Add peas, soy sauce, sesame oil and shrimp. Stir 2 min.",
      "Serve topped with spring onion greens."
    ]
  }

,

  /* ── 11 ── */
  {
    id: 11, name: "Avocado Egg Toast", servings: 2,
    description: "Creamy smashed avocado on toasted sourdough topped with perfectly poached eggs and chilli flakes.",
    prepTimeMins: 10, cookTimeMins: 10,
    tags: ["vegetarian"],
    restrictionsSupported: ["kosher", "pork-free", "no-beef", "veg-only"],
    allergens: ["egg", "gluten"],
    ingredients: [
      { name: "sourdough bread", quantity: 4, unit: "slices", category: "Grains" },
      { name: "eggs", quantity: 4, unit: "whole", category: "Dairy & Eggs" },
      { name: "ripe avocados", quantity: 2, unit: "whole", category: "Produce" },
      { name: "lemon", quantity: 0.5, unit: "whole", category: "Produce" },
      { name: "cherry tomatoes", quantity: 100, unit: "g", category: "Produce" },
      { name: "chilli flakes", quantity: 0.5, unit: "tsp", category: "Spices" },
      { name: "white vinegar", quantity: 1, unit: "tbsp", category: "Condiments" },
      { name: "salt & black pepper", quantity: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Toast bread until golden.",
      "Halve and stone avocados. Scoop flesh into a bowl with lemon juice, salt and pepper. Mash roughly.",
      "Bring a saucepan of water to a gentle simmer, add vinegar. Swirl water and gently drop in eggs one at a time. Poach 3–4 min.",
      "Spread avocado over toast. Top with a poached egg, cherry tomatoes and chilli flakes."
    ]
  },

  /* ── 12 ── */
  {
    id: 12, name: "Keto Egg & Cheese Scramble", servings: 2,
    description: "Fluffy eggs scrambled with spinach, cheddar and cream – a filling, zero-carb breakfast or lunch.",
    prepTimeMins: 5, cookTimeMins: 10,
    tags: ["keto", "omnivore", "low-carb", "gluten-free"],
    restrictionsSupported: ["pork-free", "no-beef", "gluten-free"],
    allergens: ["egg", "dairy"],
    ingredients: [
      { name: "eggs", quantity: 6, unit: "whole", category: "Dairy & Eggs" },
      { name: "shredded cheddar", quantity: 60, unit: "g", category: "Dairy & Eggs" },
      { name: "heavy cream", quantity: 2, unit: "tbsp", category: "Dairy & Eggs" },
      { name: "baby spinach", quantity: 80, unit: "g", category: "Produce" },
      { name: "butter", quantity: 1, unit: "tbsp", category: "Dairy & Eggs" },
      { name: "garlic powder", quantity: 0.25, unit: "tsp", category: "Spices" },
      { name: "salt & black pepper", quantity: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Whisk eggs with cream, garlic powder, salt and pepper.",
      "Melt butter in a non-stick pan over medium-low heat.",
      "Pour in eggs. Stir gently with a spatula as curds form, about 3–4 min.",
      "When eggs are almost set, fold in spinach and cheese. Remove from heat; residual warmth will finish cooking.",
      "Serve immediately."
    ]
  },

  /* ── 13 ── */
  {
    id: 13, name: "Quinoa Buddha Bowl", servings: 2,
    description: "Nourishing bowl of quinoa, roasted vegetables, edamame and tahini dressing.",
    prepTimeMins: 15, cookTimeMins: 25,
    tags: ["vegan", "vegetarian", "gluten-free"],
    restrictionsSupported: ["halal", "kosher", "pork-free", "no-beef", "veg-only", "gluten-free"],
    allergens: ["sesame"],
    ingredients: [
      { name: "quinoa", quantity: 180, unit: "g", category: "Grains" },
      { name: "sweet potato", quantity: 300, unit: "g", category: "Produce" },
      { name: "beetroot (cooked)", quantity: 200, unit: "g", category: "Produce" },
      { name: "edamame (shelled)", quantity: 150, unit: "g", category: "Produce" },
      { name: "baby kale / spinach", quantity: 100, unit: "g", category: "Produce" },
      { name: "tahini", quantity: 3, unit: "tbsp", category: "Condiments" },
      { name: "lemon", quantity: 1, unit: "whole", category: "Produce" },
      { name: "garlic clove", quantity: 1, unit: "whole", category: "Produce" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "pumpkin seeds", quantity: 2, unit: "tbsp", category: "Pantry" }
    ],
    steps: [
      "Preheat oven 210 °C. Dice sweet potato, toss with oil and roast 25 min.",
      "Cook quinoa in 1.5× water until fluffy, about 15 min.",
      "Whisk tahini, lemon juice, minced garlic and 3 tbsp water until smooth dressing forms.",
      "Thaw edamame in boiling water 3 min; drain.",
      "Assemble bowls: quinoa base, sweet potato, beetroot, edamame and kale. Drizzle with dressing and scatter pumpkin seeds."
    ]
  },

  /* ── 14 ── */
  {
    id: 14, name: "Turkey Meatball Soup", servings: 4,
    description: "Tender turkey meatballs in a herby tomato broth with kale and white beans.",
    prepTimeMins: 20, cookTimeMins: 30,
    tags: ["omnivore", "gluten-free", "low-carb"],
    restrictionsSupported: ["halal", "pork-free", "gluten-free"],
    allergens: ["egg"],
    ingredients: [
      { name: "ground turkey", quantity: 500, unit: "g", category: "Meat & Fish" },
      { name: "egg", quantity: 1, unit: "whole", category: "Dairy & Eggs" },
      { name: "parmesan (grated)", quantity: 30, unit: "g", category: "Dairy & Eggs" },
      { name: "garlic cloves", quantity: 4, unit: "whole", category: "Produce" },
      { name: "dried oregano", quantity: 1.5, unit: "tsp", category: "Spices" },
      { name: "canned diced tomatoes", quantity: 400, unit: "g", category: "Pantry" },
      { name: "chicken stock", quantity: 1, unit: "litre", category: "Pantry" },
      { name: "canned white beans", quantity: 400, unit: "g", category: "Pantry" },
      { name: "kale", quantity: 100, unit: "g", category: "Produce" },
      { name: "onion", quantity: 1, unit: "whole", category: "Produce" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "Condiments" }
    ],
    steps: [
      "Mix turkey, egg, parmesan, half the garlic, oregano, salt and pepper. Roll into 3 cm balls.",
      "Heat oil in a large pot. Brown meatballs on all sides, about 5 min. Remove.",
      "Sauté onion and remaining garlic 5 min. Add tomatoes and stock. Bring to a boil.",
      "Return meatballs. Simmer 15 min. Add beans and kale; cook 5 min.",
      "Adjust seasoning and serve hot."
    ]
  },

  /* ── 15 ── */
  {
    id: 15, name: "Cauliflower Fried Rice", servings: 4,
    description: "Light and low-carb cauliflower rice stir-fried with vegetables and a soy-sesame glaze.",
    prepTimeMins: 15, cookTimeMins: 15,
    tags: ["vegetarian", "keto", "low-carb"],
    restrictionsSupported: ["halal", "kosher", "pork-free", "no-beef"],
    allergens: ["egg", "soy", "sesame", "gluten"],
    ingredients: [
      { name: "cauliflower (large head)", quantity: 1, unit: "whole", category: "Produce" },
      { name: "eggs", quantity: 3, unit: "whole", category: "Dairy & Eggs" },
      { name: "frozen peas", quantity: 100, unit: "g", category: "Produce" },
      { name: "carrot", quantity: 1, unit: "whole", category: "Produce" },
      { name: "spring onions", quantity: 4, unit: "whole", category: "Produce" },
      { name: "garlic cloves", quantity: 3, unit: "whole", category: "Produce" },
      { name: "soy sauce", quantity: 3, unit: "tbsp", category: "Condiments" },
      { name: "sesame oil", quantity: 1, unit: "tbsp", category: "Condiments" },
      { name: "vegetable oil", quantity: 2, unit: "tbsp", category: "Condiments" }
    ],
    steps: [
      "Pulse cauliflower florets in a food processor until rice-sized. Spread on a towel and press dry.",
      "Dice carrot; slice spring onions (whites and greens separate).",
      "Heat 1 tbsp oil in wok on high. Scramble eggs until just set; remove.",
      "Add remaining oil, garlic and spring onion whites 30 sec. Add carrot and peas 3 min.",
      "Add cauliflower rice, spreading flat. Fry undisturbed 2 min, then toss.",
      "Add soy sauce, sesame oil and eggs. Toss 1 min. Serve with spring onion greens."
    ]
  }

,

  /* ── 16 ── */
  {
    id: 16, name: "Tofu Veggie Scramble", servings: 2,
    description: "Crumbled tofu scrambled with turmeric and vegetables – a protein-packed vegan breakfast or brunch.",
    prepTimeMins: 10, cookTimeMins: 15,
    tags: ["vegan", "vegetarian", "gluten-free"],
    restrictionsSupported: ["halal", "kosher", "pork-free", "no-beef", "veg-only", "gluten-free"],
    allergens: ["soy"],
    ingredients: [
      { name: "firm tofu", quantity: 400, unit: "g", category: "Meat & Fish" },
      { name: "red bell pepper", quantity: 1, unit: "whole", category: "Produce" },
      { name: "baby spinach", quantity: 80, unit: "g", category: "Produce" },
      { name: "cherry tomatoes", quantity: 100, unit: "g", category: "Produce" },
      { name: "ground turmeric", quantity: 0.5, unit: "tsp", category: "Spices" },
      { name: "garlic powder", quantity: 0.5, unit: "tsp", category: "Spices" },
      { name: "nutritional yeast", quantity: 2, unit: "tbsp", category: "Pantry" },
      { name: "olive oil", quantity: 1, unit: "tbsp", category: "Condiments" },
      { name: "salt & black pepper", quantity: 1, unit: "to taste", category: "Spices" }
    ],
    steps: [
      "Press tofu 10 min. Crumble with hands into rough pieces.",
      "Dice bell pepper. Halve tomatoes.",
      "Heat oil in a large pan over medium-high. Sauté pepper 3 min.",
      "Add crumbled tofu, turmeric, garlic powder and nutritional yeast. Stir and cook 5 min.",
      "Add spinach and tomatoes; stir until spinach wilts, 2 min. Season and serve."
    ]
  },

  /* ── 17 ── */
  {
    id: 17, name: "Mediterranean Chicken Wrap", servings: 4,
    description: "Grilled chicken, hummus, cucumber, tomato and tzatziki wrapped in a warm flatbread.",
    prepTimeMins: 20, cookTimeMins: 15,
    tags: ["omnivore", "mediterranean"],
    restrictionsSupported: ["halal", "pork-free"],
    allergens: ["gluten", "dairy", "sesame"],
    ingredients: [
      { name: "chicken breast", quantity: 600, unit: "g", category: "Meat & Fish" },
      { name: "large flatbreads", quantity: 4, unit: "whole", category: "Grains" },
      { name: "hummus", quantity: 150, unit: "g", category: "Condiments" },
      { name: "tzatziki", quantity: 120, unit: "g", category: "Dairy & Eggs" },
      { name: "cucumber", quantity: 1, unit: "whole", category: "Produce" },
      { name: "cherry tomatoes", quantity: 200, unit: "g", category: "Produce" },
      { name: "red onion", quantity: 0.5, unit: "whole", category: "Produce" },
      { name: "baby spinach", quantity: 60, unit: "g", category: "Produce" },
      { name: "lemon", quantity: 1, unit: "whole", category: "Produce" },
      { name: "dried oregano", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "Condiments" }
    ],
    steps: [
      "Slice chicken into strips. Toss with olive oil, oregano, lemon juice, salt and pepper.",
      "Grill or pan-fry chicken strips 3–4 min per side until cooked through.",
      "Slice cucumber, halve tomatoes, thinly slice red onion.",
      "Warm flatbreads in a dry pan 30 sec each side.",
      "Spread hummus over flatbread, add spinach, chicken, vegetables and tzatziki. Roll up and serve."
    ]
  },

  /* ── 18 ── */
  {
    id: 18, name: "Tuna Niçoise Salad", servings: 4,
    description: "Classic French salad with tuna, green beans, boiled eggs, olives and a Dijon vinaigrette.",
    prepTimeMins: 20, cookTimeMins: 15,
    tags: ["pescatarian", "gluten-free", "mediterranean", "low-carb"],
    restrictionsSupported: ["pork-free", "no-beef", "gluten-free"],
    allergens: ["fish", "egg"],
    ingredients: [
      { name: "canned tuna in olive oil", quantity: 400, unit: "g", category: "Meat & Fish" },
      { name: "eggs", quantity: 4, unit: "whole", category: "Dairy & Eggs" },
      { name: "green beans", quantity: 300, unit: "g", category: "Produce" },
      { name: "baby potatoes", quantity: 400, unit: "g", category: "Produce" },
      { name: "cherry tomatoes", quantity: 200, unit: "g", category: "Produce" },
      { name: "kalamata olives", quantity: 80, unit: "g", category: "Pantry" },
      { name: "mixed salad leaves", quantity: 100, unit: "g", category: "Produce" },
      { name: "red onion", quantity: 0.5, unit: "whole", category: "Produce" },
      { name: "dijon mustard", quantity: 1, unit: "tbsp", category: "Condiments" },
      { name: "red wine vinegar", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "olive oil", quantity: 4, unit: "tbsp", category: "Condiments" }
    ],
    steps: [
      "Boil potatoes 12 min until tender. In the same pot add green beans last 3 min. Drain and cool.",
      "Boil eggs 8 min for hard-boiled. Cool in ice water, peel and quarter.",
      "Whisk mustard, vinegar and olive oil. Season with salt and pepper.",
      "Arrange leaves on a platter. Top with potatoes, beans, tomatoes, olives, tuna and eggs.",
      "Drizzle with dressing and serve."
    ]
  },

  /* ── 19 ── */
  {
    id: 19, name: "Creamy Mushroom Risotto", servings: 4,
    description: "Slow-stirred arborio rice with a medley of mushrooms, white wine and parmesan cream.",
    prepTimeMins: 10, cookTimeMins: 35,
    tags: ["vegetarian", "mediterranean"],
    restrictionsSupported: ["kosher", "pork-free", "no-beef", "veg-only"],
    allergens: ["dairy"],
    ingredients: [
      { name: "arborio rice", quantity: 300, unit: "g", category: "Grains" },
      { name: "mixed mushrooms", quantity: 400, unit: "g", category: "Produce" },
      { name: "vegetable stock (warm)", quantity: 1.2, unit: "litre", category: "Pantry" },
      { name: "dry white wine", quantity: 150, unit: "ml", category: "Condiments" },
      { name: "shallots", quantity: 3, unit: "whole", category: "Produce" },
      { name: "garlic cloves", quantity: 3, unit: "whole", category: "Produce" },
      { name: "parmesan (grated)", quantity: 80, unit: "g", category: "Dairy & Eggs" },
      { name: "butter", quantity: 40, unit: "g", category: "Dairy & Eggs" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "fresh thyme", quantity: 4, unit: "sprigs", category: "Produce" }
    ],
    steps: [
      "Slice shallots and garlic. Slice mushrooms.",
      "Heat oil and half the butter in a heavy pot. Sauté shallots 4 min. Add garlic 1 min.",
      "Add rice, stir 2 min to toast. Pour in wine; stir until absorbed.",
      "Add warm stock one ladle at a time, stirring constantly. Wait for each addition to absorb before adding the next. 20–25 min total.",
      "Sauté mushrooms with thyme in a separate pan in remaining butter until golden, 8 min.",
      "When rice is creamy and al-dente, stir in parmesan and mushrooms. Season and serve."
    ]
  },

  /* ── 20 ── */
  {
    id: 20, name: "Lamb Kofta with Tzatziki", servings: 4,
    description: "Spiced minced lamb skewers grilled and served with creamy tzatziki and a fresh salad.",
    prepTimeMins: 20, cookTimeMins: 15,
    tags: ["omnivore", "mediterranean", "paleo", "gluten-free"],
    restrictionsSupported: ["halal", "pork-free", "no-beef", "gluten-free"],
    allergens: ["dairy"],
    ingredients: [
      { name: "ground lamb", quantity: 600, unit: "g", category: "Meat & Fish" },
      { name: "onion", quantity: 1, unit: "whole", category: "Produce" },
      { name: "garlic cloves", quantity: 3, unit: "whole", category: "Produce" },
      { name: "ground cumin", quantity: 1.5, unit: "tsp", category: "Spices" },
      { name: "ground coriander", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "smoked paprika", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "fresh parsley", quantity: 1, unit: "handful", category: "Produce" },
      { name: "greek yoghurt", quantity: 200, unit: "g", category: "Dairy & Eggs" },
      { name: "cucumber", quantity: 0.5, unit: "whole", category: "Produce" },
      { name: "fresh mint", quantity: 1, unit: "handful", category: "Produce" },
      { name: "lemon", quantity: 1, unit: "whole", category: "Produce" },
      { name: "cherry tomatoes", quantity: 200, unit: "g", category: "Produce" }
    ],
    steps: [
      "Grate onion and squeeze out moisture. Finely chop garlic and parsley.",
      "Mix lamb, onion, garlic, parsley and spices. Season generously. Form around skewers (or into patties).",
      "Grate cucumber, squeeze dry. Mix with yoghurt, mint, lemon juice and garlic for tzatziki. Season.",
      "Grill or pan-fry koftas over high heat 3–4 min each side until cooked through.",
      "Serve with tzatziki, cherry tomatoes and lemon wedges."
    ]
  }

,

  /* ── 21 ── */
  {
    id: 21, name: "Chickpea Coconut Curry", servings: 4,
    description: "A fragrant, golden curry simmered in coconut milk with chickpeas, spinach and tomatoes.",
    prepTimeMins: 10, cookTimeMins: 25,
    tags: ["vegan", "vegetarian", "gluten-free"],
    restrictionsSupported: ["halal", "kosher", "pork-free", "no-beef", "veg-only", "gluten-free"],
    allergens: [],
    ingredients: [
      { name: "canned chickpeas", quantity: 800, unit: "g", category: "Pantry" },
      { name: "coconut milk (full fat)", quantity: 400, unit: "ml", category: "Pantry" },
      { name: "canned diced tomatoes", quantity: 400, unit: "g", category: "Pantry" },
      { name: "baby spinach", quantity: 120, unit: "g", category: "Produce" },
      { name: "onion", quantity: 1, unit: "whole", category: "Produce" },
      { name: "garlic cloves", quantity: 4, unit: "whole", category: "Produce" },
      { name: "fresh ginger", quantity: 1, unit: "tbsp", category: "Produce" },
      { name: "curry powder", quantity: 2, unit: "tbsp", category: "Spices" },
      { name: "ground turmeric", quantity: 0.5, unit: "tsp", category: "Spices" },
      { name: "vegetable oil", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "basmati rice", quantity: 300, unit: "g", category: "Grains" },
      { name: "fresh coriander", quantity: 1, unit: "handful", category: "Produce" }
    ],
    steps: [
      "Cook rice per packet instructions.",
      "Dice onion. Heat oil in a large pot, sauté onion 6 min until golden.",
      "Add garlic, ginger, curry powder and turmeric. Cook 1 min until fragrant.",
      "Add tomatoes and coconut milk. Bring to a simmer for 5 min.",
      "Add chickpeas and simmer 12 min until sauce thickens.",
      "Stir in spinach until wilted. Serve over rice with fresh coriander."
    ]
  },

  /* ── 22 ── */
  {
    id: 22, name: "Teriyaki Salmon Rice Bowl", servings: 2,
    description: "Glazed salmon over steamed rice with edamame, cucumber and a homemade teriyaki sauce.",
    prepTimeMins: 15, cookTimeMins: 20,
    tags: ["pescatarian"],
    restrictionsSupported: ["pork-free", "no-beef"],
    allergens: ["fish", "soy", "sesame", "gluten"],
    ingredients: [
      { name: "salmon fillets", quantity: 400, unit: "g", category: "Meat & Fish" },
      { name: "soy sauce", quantity: 3, unit: "tbsp", category: "Condiments" },
      { name: "honey", quantity: 2, unit: "tbsp", category: "Pantry" },
      { name: "mirin", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "sesame oil", quantity: 1, unit: "tsp", category: "Condiments" },
      { name: "garlic clove", quantity: 1, unit: "whole", category: "Produce" },
      { name: "jasmine rice", quantity: 200, unit: "g", category: "Grains" },
      { name: "edamame (shelled)", quantity: 100, unit: "g", category: "Produce" },
      { name: "cucumber", quantity: 0.5, unit: "whole", category: "Produce" },
      { name: "sesame seeds", quantity: 1, unit: "tbsp", category: "Spices" },
      { name: "spring onions", quantity: 2, unit: "whole", category: "Produce" }
    ],
    steps: [
      "Cook rice per packet instructions.",
      "Mix soy sauce, honey, mirin, sesame oil and minced garlic in a small bowl.",
      "Pour half the sauce over salmon. Marinate 10 min.",
      "Heat a pan over medium-high. Cook salmon skin-side up 3–4 min, flip, pour remaining sauce over, cook 3–4 min until caramelised.",
      "Blanch edamame in boiling water 3 min, drain. Slice cucumber.",
      "Serve salmon over rice with edamame, cucumber, sesame seeds and spring onions."
    ]
  },

  /* ── 23 ── */
  {
    id: 23, name: "Zucchini Noodles with Pesto", servings: 2,
    description: "Low-carb zucchini noodles tossed in a vibrant basil pesto with cherry tomatoes and pine nuts.",
    prepTimeMins: 15, cookTimeMins: 5,
    tags: ["vegetarian", "keto", "low-carb", "gluten-free"],
    restrictionsSupported: ["kosher", "pork-free", "no-beef", "veg-only", "gluten-free"],
    allergens: ["tree-nuts", "dairy"],
    ingredients: [
      { name: "zucchini (large)", quantity: 4, unit: "whole", category: "Produce" },
      { name: "fresh basil", quantity: 40, unit: "g", category: "Produce" },
      { name: "pine nuts", quantity: 40, unit: "g", category: "Pantry" },
      { name: "parmesan (grated)", quantity: 50, unit: "g", category: "Dairy & Eggs" },
      { name: "garlic cloves", quantity: 2, unit: "whole", category: "Produce" },
      { name: "olive oil", quantity: 80, unit: "ml", category: "Condiments" },
      { name: "lemon", quantity: 0.5, unit: "whole", category: "Produce" },
      { name: "cherry tomatoes", quantity: 200, unit: "g", category: "Produce" }
    ],
    steps: [
      "Blend basil, pine nuts, parmesan, garlic and lemon juice. Slowly drizzle in olive oil while blending until smooth. Season.",
      "Spiralise zucchini into noodles (or use a vegetable peeler for ribbons).",
      "Heat a large pan over high. Toss zucchini noodles 1–2 min until just warmed (not soggy).",
      "Remove from heat. Toss with pesto and cherry tomatoes. Serve immediately with extra parmesan."
    ]
  },

  /* ── 24 ── */
  {
    id: 24, name: "Carne Asada Rice Bowl", servings: 4,
    description: "Citrus-marinated flank steak, charred to perfection, served over rice with guacamole and pico de gallo.",
    prepTimeMins: 20, cookTimeMins: 15,
    tags: ["omnivore", "gluten-free", "paleo"],
    restrictionsSupported: ["halal", "pork-free", "gluten-free"],
    allergens: [],
    ingredients: [
      { name: "beef flank steak", quantity: 700, unit: "g", category: "Meat & Fish" },
      { name: "orange juice", quantity: 60, unit: "ml", category: "Produce" },
      { name: "lime", quantity: 2, unit: "whole", category: "Produce" },
      { name: "garlic cloves", quantity: 4, unit: "whole", category: "Produce" },
      { name: "ground cumin", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "chilli powder", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "olive oil", quantity: 3, unit: "tbsp", category: "Condiments" },
      { name: "avocados", quantity: 2, unit: "whole", category: "Produce" },
      { name: "cherry tomatoes", quantity: 200, unit: "g", category: "Produce" },
      { name: "red onion", quantity: 0.25, unit: "whole", category: "Produce" },
      { name: "fresh coriander", quantity: 1, unit: "handful", category: "Produce" },
      { name: "jasmine rice", quantity: 300, unit: "g", category: "Grains" }
    ],
    steps: [
      "Combine orange juice, lime juice, garlic, cumin, chilli and oil. Marinate steak at least 30 min.",
      "Cook rice per packet instructions.",
      "Mash avocado with lime juice, salt and coriander for guacamole. Dice tomatoes and red onion for pico.",
      "Grill or pan-sear steak over high heat 4–5 min per side for medium-rare. Rest 5 min.",
      "Slice steak thinly against the grain. Serve over rice with guacamole and pico."
    ]
  },

  /* ── 25 ── */
  {
    id: 25, name: "Cod Fish Tacos with Slaw", servings: 4,
    description: "Crispy baked cod in corn tortillas with a tangy lime slaw, avocado crema and pickled jalapeños.",
    prepTimeMins: 20, cookTimeMins: 20,
    tags: ["pescatarian", "gluten-free"],
    restrictionsSupported: ["pork-free", "no-beef", "gluten-free"],
    allergens: ["fish", "dairy"],
    ingredients: [
      { name: "cod fillets", quantity: 600, unit: "g", category: "Meat & Fish" },
      { name: "corn tortillas (small)", quantity: 12, unit: "whole", category: "Grains" },
      { name: "green cabbage", quantity: 200, unit: "g", category: "Produce" },
      { name: "red cabbage", quantity: 100, unit: "g", category: "Produce" },
      { name: "lime", quantity: 3, unit: "whole", category: "Produce" },
      { name: "avocados", quantity: 2, unit: "whole", category: "Produce" },
      { name: "sour cream", quantity: 80, unit: "g", category: "Dairy & Eggs" },
      { name: "pickled jalapeños", quantity: 40, unit: "g", category: "Condiments" },
      { name: "smoked paprika", quantity: 1, unit: "tsp", category: "Spices" },
      { name: "garlic powder", quantity: 0.5, unit: "tsp", category: "Spices" },
      { name: "olive oil", quantity: 2, unit: "tbsp", category: "Condiments" },
      { name: "fresh coriander", quantity: 1, unit: "handful", category: "Produce" }
    ],
    steps: [
      "Preheat oven to 210 °C. Rub cod with oil, paprika, garlic powder, salt and pepper. Bake 15–18 min.",
      "Shred both cabbages. Toss with lime juice and a pinch of salt. Set aside.",
      "Blend avocado, sour cream, lime juice and pinch of salt until smooth for crema.",
      "Warm tortillas in a dry pan. Flake cod into chunks.",
      "Assemble tacos: slaw → cod → avocado crema → jalapeños → coriander."
    ],
    notes: "For a dairy-free version, replace sour cream with extra avocado and a splash of coconut cream."
  }

]; // ── END OF RECIPES ──





