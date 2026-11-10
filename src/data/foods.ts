export interface GoalScore {
  name: string;
  score: number;
  color: string;
}

export interface FoodSource {
  url: string;
  title: string;
  org: string;
}

export interface FoodItem {
  slug: string;
  name: string;
  title: string;
  h1: string;
  answer: string;
  serving: string;
  score: number;
  ringColor: string;
  goals: GoalScore[];
  macros: string;
  pros: string[];
  cons: string[];
  sources: FoodSource[];
}

export const foods: FoodItem[] = [
  {
    "slug": "eggs",
    "name": "Eggs",
    "title": "Are eggs good for your skin? Score 90/100 | Clear Food",
    "h1": "Are eggs good for your skin?",
    "answer": "Two boiled eggs score 90, one of the best results we measured. Eggs are unprocessed, high in protein and barely affect your blood sugar. There is no good evidence that eggs cause acne. Only leave them out if you have an egg allergy or intolerance.",
    "serving": "100 g \u00b7 155 kcal",
    "score": 90,
    "ringColor": "#3DAF7A",
    "goals": [
      {
        "name": "Clear skin",
        "score": 85,
        "color": "#3DAF7A"
      },
      {
        "name": "Body fat",
        "score": 90,
        "color": "#3DAF7A"
      },
      {
        "name": "Muscle",
        "score": 95,
        "color": "#3DAF7A"
      },
      {
        "name": "Less bloat",
        "score": 88,
        "color": "#3DAF7A"
      }
    ],
    "macros": "13 g protein \u00b7 1 g carbs \u00b7 11 g fat <span>per serving</span>",
    "pros": [
      "Excellent source of high-quality protein, essential for muscle repair and satiety.",
      "Rich in various vitamins and minerals, including vitamin D, B12, and choline.",
      "Contains healthy fats that contribute to overall health and nutrient absorption."
    ],
    "cons": [
      "Some individuals may need to monitor egg intake due to dietary preferences or specific health conditions."
    ],
    "sources": [
      {
        "url": "https://www.aad.org/public/diseases/acne/causes/diet",
        "title": "Acne and your diet",
        "org": "American Academy of Dermatology"
      }
    ]
  },
  {
    "slug": "whey-protein",
    "name": "Whey protein shake",
    "title": "Does whey protein cause acne? Score 85/100 | Clear Food",
    "h1": "Does whey protein cause acne?",
    "answer": "A whey shake scores 85 in Clear Food: 24 g of protein, almost no sugar and 95 for muscle. For skin it is less clear. Whey is made from milk, and milk is linked to acne in studies of young people. For whey itself there are only small studies and case reports, no large trials. If you break out after starting whey, pausing it for a few weeks is an easy test.",
    "serving": "330 ml \u00b7 120 kcal",
    "score": 85,
    "ringColor": "#3DAF7A",
    "goals": [
      {
        "name": "Clear skin",
        "score": 75,
        "color": "#3DAF7A"
      },
      {
        "name": "Body fat",
        "score": 90,
        "color": "#3DAF7A"
      },
      {
        "name": "Muscle",
        "score": 95,
        "color": "#3DAF7A"
      },
      {
        "name": "Less bloat",
        "score": 80,
        "color": "#3DAF7A"
      }
    ],
    "macros": "24 g protein \u00b7 3 g carbs \u00b7 2 g fat <span>per serving</span>",
    "pros": [
      "Excellent source of high-quality protein, essential for muscle repair and growth.",
      "Very low in sugar and fat, supporting lean body mass goals.",
      "Convenient way to increase protein intake without adding many calories."
    ],
    "cons": [
      "Some individuals may experience digestive issues from whey protein.",
      "Ensure it fits within your overall daily calorie and macro targets.",
      "Not a replacement for whole food meals, should be used as a supplement."
    ],
    "sources": [
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/30096883/",
        "title": "Dairy intake and acne vulgaris: a systematic review and meta-analysis",
        "org": "Juhl CR et al., Nutrients (2018)"
      },
      {
        "url": "https://www.aad.org/public/diseases/acne/causes/diet",
        "title": "Acne and your diet",
        "org": "American Academy of Dermatology"
      }
    ]
  },
  {
    "slug": "milk",
    "name": "Milk",
    "title": "Does milk cause acne? Score 79/100 | Clear Food",
    "h1": "Does milk cause acne?",
    "answer": "Clear Food rates a glass of milk 79 out of 100: barely processed and high in protein. For skin, the research is less relaxed. A 2018 meta-analysis of about 78,000 children and young adults found acne was more common in those who drank more milk, skim milk included. That shows a link, not proof. If clear skin is your main goal, try two to three weeks without milk and compare.",
    "serving": "250 ml \u00b7 158 kcal",
    "score": 79,
    "ringColor": "#3DAF7A",
    "goals": [
      {
        "name": "Clear skin",
        "score": 75,
        "color": "#3DAF7A"
      },
      {
        "name": "Body fat",
        "score": 80,
        "color": "#3DAF7A"
      },
      {
        "name": "Muscle",
        "score": 90,
        "color": "#3DAF7A"
      },
      {
        "name": "Less bloat",
        "score": 70,
        "color": "#3DAF7A"
      }
    ],
    "macros": "8 g protein \u00b7 12 g carbs \u00b7 8 g fat <span>per serving</span>",
    "pros": [
      "Milk is a good source of protein for muscle building and satiety.",
      "It provides essential vitamins and minerals like calcium and vitamin D for bone health.",
      "A naturally occurring food, it is minimally processed."
    ],
    "cons": [
      "The fat content is 3.5%, which contributes to the calorie count.",
      "Some individuals may experience bloating due to lactose intolerance.",
      "Sugars are naturally occurring lactose, which can be high for some dietary approaches."
    ],
    "sources": [
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/30096883/",
        "title": "Dairy intake and acne vulgaris: a systematic review and meta-analysis",
        "org": "Juhl CR et al., Nutrients (2018)"
      },
      {
        "url": "https://www.aad.org/public/diseases/acne/causes/diet",
        "title": "Acne and your diet",
        "org": "American Academy of Dermatology"
      }
    ]
  },
  {
    "slug": "doner-kebab",
    "name": "Doner kebab",
    "title": "Is doner kebab bad for your skin? Score 54/100 | Clear Food",
    "h1": "Is doner kebab bad for your skin?",
    "answer": "A doner in bread scores 54, right in the middle. The meat brings a lot of protein, which is why muscle gets 65. The white bread, the sauce and the salt pull it down. Order it as a plate with salad and no bread and it scores 64.",
    "serving": "400 g \u00b7 680 kcal",
    "score": 54,
    "ringColor": "#FFA63E",
    "goals": [
      {
        "name": "Clear skin",
        "score": 50,
        "color": "#FFA63E"
      },
      {
        "name": "Body fat",
        "score": 55,
        "color": "#FFA63E"
      },
      {
        "name": "Muscle",
        "score": 65,
        "color": "#FFA63E"
      },
      {
        "name": "Less bloat",
        "score": 45,
        "color": "#FFA63E"
      }
    ],
    "macros": "45 g protein \u00b7 60 g carbs \u00b7 30 g fat <span>per serving</span>",
    "pros": [
      "Contains a good amount of protein from the meat.",
      "Includes some vegetables from the salad, adding fiber and micronutrients.",
      "Can be a satisfying and filling meal due to its size and macronutrient content."
    ],
    "cons": [
      "Often high in calories and fat, which can contribute to excess calorie intake.",
      "The bread is typically refined white flour, offering limited nutritional value.",
      "Sauces can add significant amounts of sugar and unhealthy fats."
    ],
    "sources": [
      {
        "url": "https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium/how-much-sodium-should-i-eat-per-day",
        "title": "How much sodium should I eat per day?",
        "org": "American Heart Association"
      },
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/17616769/",
        "title": "A low-glycemic-load diet improves symptoms in acne vulgaris patients",
        "org": "Smith RN et al., Am J Clin Nutr (2007)"
      }
    ]
  },
  {
    "slug": "sugary-cereal",
    "name": "Frosted cornflakes",
    "title": "Are cornflakes bad for your skin? Score 38/100 | Clear Food",
    "h1": "Are cornflakes bad for your skin?",
    "answer": "A bowl of frosted cornflakes with milk scores 38. Cornflakes are among the foods that raise blood sugar fastest, and the frosting adds sugar on top. Oatmeal with berries scores 83: oats release their energy much more slowly.",
    "serving": "190 g \u00b7 230 kcal",
    "score": 38,
    "ringColor": "#FFA63E",
    "goals": [
      {
        "name": "Clear skin",
        "score": 35,
        "color": "#FFA63E"
      },
      {
        "name": "Body fat",
        "score": 30,
        "color": "#E0605A"
      },
      {
        "name": "Muscle",
        "score": 45,
        "color": "#FFA63E"
      },
      {
        "name": "Less bloat",
        "score": 40,
        "color": "#FFA63E"
      }
    ],
    "macros": "8 g protein \u00b7 47 g carbs \u00b7 3 g fat <span>per serving</span>",
    "pros": [
      "Provides some quick energy to start the day.",
      "Contains some protein from the milk.",
      "Fortified with essential vitamins and minerals."
    ],
    "cons": [
      "High in added sugar from the frosted cornflakes, which can lead to energy crashes.",
      "Low in fiber, which is important for digestive health and satiety.",
      "Highly processed cereal offers limited nutritional density compared to whole grains."
    ],
    "sources": [
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/17616769/",
        "title": "A low-glycemic-load diet improves symptoms in acne vulgaris patients",
        "org": "Smith RN et al., Am J Clin Nutr (2007)"
      },
      {
        "url": "https://www.aad.org/public/diseases/acne/causes/diet",
        "title": "Acne and your diet",
        "org": "American Academy of Dermatology"
      }
    ]
  },
  {
    "slug": "white-toast",
    "name": "White toast",
    "title": "Is white bread bad for your skin? Score 30/100 | Clear Food",
    "h1": "Is white bread bad for your skin?",
    "answer": "Two slices of white toast score 30. White flour is digested fast and raises your blood sugar almost like sugar itself. In a 12-week trial, young men who switched to slow carbs had fewer spots. Wholegrain rye bread scores 83.",
    "serving": "50 g \u00b7 130 kcal",
    "score": 30,
    "ringColor": "#E0605A",
    "goals": [
      {
        "name": "Clear skin",
        "score": 25,
        "color": "#E0605A"
      },
      {
        "name": "Body fat",
        "score": 30,
        "color": "#E0605A"
      },
      {
        "name": "Muscle",
        "score": 35,
        "color": "#FFA63E"
      },
      {
        "name": "Less bloat",
        "score": 30,
        "color": "#E0605A"
      }
    ],
    "macros": "4 g protein \u00b7 25 g carbs \u00b7 1 g fat <span>per serving</span>",
    "pros": [
      "Provides a quick source of energy.",
      "Low in fat."
    ],
    "cons": [
      "White bread is highly processed and low in fiber.",
      "May cause blood sugar spikes due-to refined carbohydrates."
    ],
    "sources": [
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/17616769/",
        "title": "A low-glycemic-load diet improves symptoms in acne vulgaris patients",
        "org": "Smith RN et al., Am J Clin Nutr (2007)"
      },
      {
        "url": "https://www.aad.org/public/diseases/acne/causes/diet",
        "title": "Acne and your diet",
        "org": "American Academy of Dermatology"
      }
    ]
  },
  {
    "slug": "milk-chocolate",
    "name": "Milk chocolate",
    "title": "Does chocolate cause acne? Score 29/100 | Clear Food",
    "h1": "Does chocolate cause acne?",
    "answer": "Milk chocolate scores 29. The problem is less the cocoa than what comes with it: 27 g of sugar in a 50 g bar, plus milk powder. Diets with a lot of fast sugar are linked to more acne. In a 12-week trial, young men on a low-glycemic diet had fewer spots than those who ate as usual. Dark chocolate with 85% cocoa has far less sugar and scores 68.",
    "serving": "50 g \u00b7 265 kcal",
    "score": 29,
    "ringColor": "#E0605A",
    "goals": [
      {
        "name": "Clear skin",
        "score": 25,
        "color": "#E0605A"
      },
      {
        "name": "Body fat",
        "score": 20,
        "color": "#E0605A"
      },
      {
        "name": "Muscle",
        "score": 30,
        "color": "#E0605A"
      },
      {
        "name": "Less bloat",
        "score": 40,
        "color": "#FFA63E"
      }
    ],
    "macros": "3 g protein \u00b7 29 g carbs \u00b7 16 g fat <span>per serving</span>",
    "pros": [
      "Can provide a quick energy boost.",
      "Contains some beneficial antioxidants from cocoa.",
      "Offers a comforting and enjoyable treat in moderation."
    ],
    "cons": [
      "High in calories, which can contribute to weight gain if overconsumed.",
      "Very high in added sugar (27g), which can negatively impact clear skin and body fat goals.",
      "Contains a significant amount of fat (16g), including saturated fat."
    ],
    "sources": [
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/17616769/",
        "title": "A low-glycemic-load diet improves symptoms in acne vulgaris patients",
        "org": "Smith RN et al., Am J Clin Nutr (2007)"
      },
      {
        "url": "https://www.aad.org/public/diseases/acne/causes/diet",
        "title": "Acne and your diet",
        "org": "American Academy of Dermatology"
      }
    ]
  },
  {
    "slug": "energy-drink",
    "name": "Energy drink",
    "title": "Are energy drinks bad for your skin? Score 29/100 | Clear Food",
    "h1": "Are energy drinks bad for your skin?",
    "answer": "A sugared 500 ml energy drink scores 29. It is mostly sugar water: 60 g of sugar per can, which sends your blood sugar up fast. Diets heavy in fast sugar are linked to more acne, and cutting back helped in a controlled trial. Sparkling water with lemon scores 94.",
    "serving": "500 ml \u00b7 240 kcal",
    "score": 29,
    "ringColor": "#E0605A",
    "goals": [
      {
        "name": "Clear skin",
        "score": 20,
        "color": "#E0605A"
      },
      {
        "name": "Body fat",
        "score": 30,
        "color": "#E0605A"
      },
      {
        "name": "Muscle",
        "score": 35,
        "color": "#FFA63E"
      },
      {
        "name": "Less bloat",
        "score": 30,
        "color": "#E0605A"
      }
    ],
    "macros": "0 g protein \u00b7 60 g carbs \u00b7 0 g fat <span>per serving</span>",
    "pros": [
      "Can provide a quick burst of energy due to caffeine and sugar."
    ],
    "cons": [
      "High sugar content can lead to energy crashes and is not beneficial for overall health.",
      "Excessive consumption of energy drinks can negatively impact sleep and heart health.",
      "Provides minimal nutritional value beyond simple carbohydrates."
    ],
    "sources": [
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/17616769/",
        "title": "A low-glycemic-load diet improves symptoms in acne vulgaris patients",
        "org": "Smith RN et al., Am J Clin Nutr (2007)"
      },
      {
        "url": "https://www.aad.org/public/diseases/acne/causes/diet",
        "title": "Acne and your diet",
        "org": "American Academy of Dermatology"
      }
    ]
  },
  {
    "slug": "french-fries",
    "name": "French fries",
    "title": "Do french fries cause acne? Score 28/100 | Clear Food",
    "h1": "Do french fries cause acne?",
    "answer": "Deep-fried fries score 28. They combine fast carbs with frying fat, and frying at high heat creates advanced glycation end products (AGEs), which are linked to inflammation in the body. The same potatoes roasted in the oven with a little olive oil score 74.",
    "serving": "150 g \u00b7 465 kcal",
    "score": 28,
    "ringColor": "#E0605A",
    "goals": [
      {
        "name": "Clear skin",
        "score": 25,
        "color": "#E0605A"
      },
      {
        "name": "Body fat",
        "score": 20,
        "color": "#E0605A"
      },
      {
        "name": "Muscle",
        "score": 30,
        "color": "#E0605A"
      },
      {
        "name": "Less bloat",
        "score": 35,
        "color": "#FFA63E"
      }
    ],
    "macros": "5 g protein \u00b7 58 g carbs \u00b7 24 g fat <span>per serving</span>",
    "pros": [
      "Provides a quick source of energy from carbohydrates."
    ],
    "cons": [
      "Deep-frying makes them very high in calories, with 465 kcal for 150g.",
      "Very high in fat (24g per 150g) from the frying oil, which can contribute to unwanted weight gain.",
      "The high processing and frying can lead to inflammatory compounds not ideal for skin health."
    ],
    "sources": [
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/20497781/",
        "title": "Advanced glycation end products (AGEs) in the diet",
        "org": "Uribarri J et al., J Am Diet Assoc (2010)"
      },
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/17616769/",
        "title": "A low-glycemic-load diet improves symptoms in acne vulgaris patients",
        "org": "Smith RN et al., Am J Clin Nutr (2007)"
      }
    ]
  },
  {
    "slug": "nutella",
    "name": "Nutella",
    "title": "Is Nutella bad for acne? Score 28/100 | Clear Food",
    "h1": "Is Nutella bad for acne?",
    "answer": "Two tablespoons of Nutella score 28. More than half of Nutella is sugar, and it also contains skimmed milk powder. Sugar and milk are the two food groups most often linked to acne in studies. Peanut butter made of 100% peanuts scores 78.",
    "serving": "30 g \u00b7 160 kcal",
    "score": 28,
    "ringColor": "#E0605A",
    "goals": [
      {
        "name": "Clear skin",
        "score": 25,
        "color": "#E0605A"
      },
      {
        "name": "Body fat",
        "score": 20,
        "color": "#E0605A"
      },
      {
        "name": "Muscle",
        "score": 30,
        "color": "#E0605A"
      },
      {
        "name": "Less bloat",
        "score": 35,
        "color": "#FFA63E"
      }
    ],
    "macros": "2 g protein \u00b7 17 g carbs \u00b7 9 g fat <span>per serving</span>",
    "pros": [
      "A small amount of protein and fiber are present from hazelnuts and cocoa.",
      "Provides a quick source of energy.",
      "It&#39;s a widely enjoyed treat that can fit into an occasional balanced diet."
    ],
    "cons": [
      "Very high in sugar, with 17g per serving, contributing to empty calories.",
      "High in fat, mostly from palm oil and vegetable oils.",
      "Contains a high amount of calories for a small serving size (160 calories in 2 tablespoons)."
    ],
    "sources": [
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/17616769/",
        "title": "A low-glycemic-load diet improves symptoms in acne vulgaris patients",
        "org": "Smith RN et al., Am J Clin Nutr (2007)"
      },
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/30096883/",
        "title": "Dairy intake and acne vulgaris: a systematic review and meta-analysis",
        "org": "Juhl CR et al., Nutrients (2018)"
      }
    ]
  },
  {
    "slug": "cola",
    "name": "Cola",
    "title": "Is cola bad for acne? Score 13/100 | Clear Food",
    "h1": "Is cola bad for acne?",
    "answer": "Regular cola scores 13, one of the lowest results we measured. A 500 ml bottle has 54 g of sugar and nothing else your body needs. Fast sugar in large amounts is linked to more acne. Cola zero scores 30: no sugar, but still a highly processed drink.",
    "serving": "500 ml \u00b7 200 kcal",
    "score": 13,
    "ringColor": "#E0605A",
    "goals": [
      {
        "name": "Clear skin",
        "score": 10,
        "color": "#E0605A"
      },
      {
        "name": "Body fat",
        "score": 10,
        "color": "#E0605A"
      },
      {
        "name": "Muscle",
        "score": 10,
        "color": "#E0605A"
      },
      {
        "name": "Less bloat",
        "score": 20,
        "color": "#E0605A"
      }
    ],
    "macros": "0 g protein \u00b7 54 g carbs \u00b7 0 g fat <span>per serving</span>",
    "pros": [
      "It provides quick energy due to its high sugar content."
    ],
    "cons": [
      "Regular cola is high in calories and sugar (54g per 500ml), offering little nutritional value.",
      "Frequent consumption can contribute to weight gain and negatively impact metabolic health.",
      "The high sugar content can contribute to skin issues and may cause bloating for some individuals."
    ],
    "sources": [
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/17616769/",
        "title": "A low-glycemic-load diet improves symptoms in acne vulgaris patients",
        "org": "Smith RN et al., Am J Clin Nutr (2007)"
      },
      {
        "url": "https://www.aad.org/public/diseases/acne/causes/diet",
        "title": "Acne and your diet",
        "org": "American Academy of Dermatology"
      }
    ]
  },
  {
    "slug": "gummy-bears",
    "name": "Gummy bears",
    "title": "Do gummy bears cause acne? Score 13/100 | Clear Food",
    "h1": "Do gummy bears cause acne?",
    "answer": "A 100 g bag of gummy bears scores 13. It is almost pure sugar, 59 g per bag, with no fibre, fat or protein to slow it down. High-sugar diets are linked to more acne. A bowl of fresh berries scores 90 and still tastes sweet.",
    "serving": "100 g \u00b7 330 kcal",
    "score": 13,
    "ringColor": "#E0605A",
    "goals": [
      {
        "name": "Clear skin",
        "score": 10,
        "color": "#E0605A"
      },
      {
        "name": "Body fat",
        "score": 10,
        "color": "#E0605A"
      },
      {
        "name": "Muscle",
        "score": 10,
        "color": "#E0605A"
      },
      {
        "name": "Less bloat",
        "score": 20,
        "color": "#E0605A"
      }
    ],
    "macros": "7 g protein \u00b7 77 g carbs \u00b7 0 g fat <span>per serving</span>",
    "pros": [
      "A small amount can provide a quick energy boost.",
      "Gelatin might offer some minor benefits for joint health."
    ],
    "cons": [
      "High in sugar, with 59g per 100g serving, contributing to empty calories.",
      "May lead to blood sugar spikes and crashes.",
      "Lack fiber and significant micronutrients."
    ],
    "sources": [
      {
        "url": "https://pubmed.ncbi.nlm.nih.gov/17616769/",
        "title": "A low-glycemic-load diet improves symptoms in acne vulgaris patients",
        "org": "Smith RN et al., Am J Clin Nutr (2007)"
      },
      {
        "url": "https://www.aad.org/public/diseases/acne/causes/diet",
        "title": "Acne and your diet",
        "org": "American Academy of Dermatology"
      }
    ]
  }
];
