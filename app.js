// Material and biodegradation time mapping
const materialInfo = {
    "plastic": { material: "Plastic", biodegradeTime: "450-1000 years" },
    "paper": { material: "Paper", biodegradeTime: "2-5 months" },
    "wood": { material: "Wood", biodegradeTime: "1-3 years" },
    "metal": { material: "Metal", biodegradeTime: "50-500 years" },
    "glass": { material: "Glass", biodegradeTime: "1 million years" },
    "cloth": { material: "Cloth", biodegradeTime: "1-5 months" },
    "organic": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "cardboard": { material: "Cardboard", biodegradeTime: "2 months" },
    "rubber": { material: "Rubber", biodegradeTime: "50+ years" },
    "goblet": { material: "Glass", biodegradeTime: "1 million years" }, // added for goblet
    "red wine": { material: "Organic Material", biodegradeTime: "Few weeks to months" }, // added for wine
    "wine bottle": { material: "Glass", biodegradeTime: "1 million years" }, // added for wine bottle
    "lumbermill":  { material: "Wood", biodegradeTime: "1-3 years" },
    "panpipe": { material: "Metal", biodegradeTime: "50-500 years" },
    "beer glass": { material: "Glass", biodegradeTime: "1 million years" },
    "aluminum": { material: "Aluminum", biodegradeTime: "80-200 years" },
    "styrofoam": { material: "Styrofoam", biodegradeTime: "500 years" },
    "leather": { material: "Leather", biodegradeTime: "50 years" },
    "cotton": { material: "Cotton", biodegradeTime: "1-5 months" },
    "nylon": { material: "Nylon", biodegradeTime: "30-40 years" },
    "petroleum": { material: "Petroleum Products", biodegradeTime: "Unknown" },
    "rubber tire": { material: "Rubber", biodegradeTime: "50+ years" },
    "wooden toy": { material: "Wood", biodegradeTime: "1-3 years" },
    "bamboo": { material: "Bamboo", biodegradeTime: "1-3 years" },
    "stone": { material: "Stone", biodegradeTime: "Indefinite" },
    "ceramic": { material: "Ceramic", biodegradeTime: "Indefinite" },
    "cement": { material: "Cement", biodegradeTime: "Indefinite" },
    "textile": { material: "Textile", biodegradeTime: "1-5 months" },
    "plastic bag": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "toothpick": { material: "Wood", biodegradeTime: "1-3 years" },
    "banana peel": { material: "Organic Material", biodegradeTime: "2-5 weeks" },
    "apple core": { material: "Organic Material", biodegradeTime: "2-4 weeks" },
    "cardboard box": { material: "Cardboard", biodegradeTime: "2 months" },
    "cigarette": { material: "Paper & Tobacco", biodegradeTime: "1-10 years" },
    "diaper": { material: "Plastic & Cotton", biodegradeTime: "450-500 years" },
    "fishing line": { material: "Nylon", biodegradeTime: "600+ years" },
    "tin can": { material: "Metal", biodegradeTime: "50-100 years" },
    "silver": { material: "Silver", biodegradeTime: "Indefinite" },
    "gold": { material: "Gold", biodegradeTime: "Indefinite" },
    "brass": { material: "Brass", biodegradeTime: "100-500 years" },
    "copper": { material: "Copper", biodegradeTime: "50-100 years" },
    "latex": { material: "Latex", biodegradeTime: "1-5 years" },
    "paint": { material: "Paint", biodegradeTime: "5-10 years" },
    "ink": { material: "Ink", biodegradeTime: "Varies (days to years)" },
    "wooden spoon": { material: "Wood", biodegradeTime: "1-3 years" },
    "soda can": { material: "Aluminum", biodegradeTime: "80-200 years" },
    "plastic straw": { material: "Plastic", biodegradeTime: "200+ years" },
    "styrofoam cup": { material: "Styrofoam", biodegradeTime: "500 years" },
    "fabrics": { material: "Textile", biodegradeTime: "1-5 months" },
    "steel": { material: "Steel", biodegradeTime: "200-500 years" },
    "tissue": { material: "Paper", biodegradeTime: "2-5 months" },
    "tire": { material: "Rubber", biodegradeTime: "50+ years" },
    "fleece": { material: "Fleece", biodegradeTime: "30+ years" },
    "fishing net": { material: "Nylon", biodegradeTime: "600+ years" },

    "ballpoint pen": { material: "Plastic & Metal", biodegradeTime: "100+ years" },
    "pencil": { material: "Wood", biodegradeTime: "1-3 years" },
    "pen": { material: "Plastic & Metal", biodegradeTime: "100+ years" },
    "notebook": { material: "Paper", biodegradeTime: "2-5 months" },
    "eraser": { material: "Rubber", biodegradeTime: "50+ years" },
    "ruler": { material: "Wood or Plastic", biodegradeTime: "1-3 years for wood, 450+ years for plastic" },
    "chalk": { material: "Calcium Carbonate", biodegradeTime: "Varies (weeks to months)" },
    "highlighter": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "binder": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "textbook": { material: "Paper", biodegradeTime: "2-5 months" },
    "sharpener": { material: "Plastic or Metal", biodegradeTime: "450+ years for plastic, 50-100 years for metal" },
    "scissors": { material: "Metal & Plastic", biodegradeTime: "50-500 years for metal, 500-1000 years for plastic" },
    "glue stick": { material: "Plastic & Wax", biodegradeTime: "500-1000 years for plastic" },
    "stapler": { material: "Metal & Plastic", biodegradeTime: "50-500 years for metal, 500-1000 years for plastic" },
    "paper clip": { material: "Metal", biodegradeTime: "50-100 years" },
    "index cards": { material: "Paper", biodegradeTime: "2-5 months" },
    "folder": { material: "Plastic or Paper", biodegradeTime: "500-1000 years for plastic, 2-5 months for paper" },
    "glue": { material: "Synthetic & Natural Polymers", biodegradeTime: "Varies (months to years)" },

    "cup": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "container": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic wrap": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic spoon": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic fork": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic knife": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic lunchbox": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic case": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic keychain": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic toy": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic comb": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plate": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic bowl": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic lid": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "plastic packaging": { material: "Plastic", biodegradeTime: "500-1000 years" },
    "highlighter": { material: "Plastic", biodegradeTime: "500-1000 years" },

    "crate": { material: "Wood", biodegradeTime: "1-3 years" },
    "screw": { material: "Metal", biodegradeTime: "50-100 years" },
    "nail": { material: "Metal", biodegradeTime: "50-100 years" },

    "glass bottle": { material: "Glass", biodegradeTime: "1 million years" },
    "glass cup": { material: "Glass", biodegradeTime: "1 million years" },
    "glass jar": { material: "Glass", biodegradeTime: "1 million years" },
    "glass container": { material: "Glass", biodegradeTime: "1 million years" },
    "glass plate": { material: "Glass", biodegradeTime: "1 million years" },
    "window": { material: "Glass", biodegradeTime: "1 million years" },
    "glass vase": { material: "Glass", biodegradeTime: "1 million years" },
    "glass ornament": { material: "Glass", biodegradeTime: "1 million years" },
    "glassware": { material: "Glass", biodegradeTime: "1 million years" },

    "cocktail shaker": { material: "Metal", biodegradeTime: "50-500 years" },

    "banana": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "apple": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "orange": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "carrot": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "potato": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "tomato": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "bread": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "eggplant": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "lettuce": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "cucumber": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "strawberry": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "grapes": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "pineapple": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "watermelon": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "peach": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "pear": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "avocado": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "pumpkin": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "spinach": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "melon": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "lemon": { material: "Organic Material", biodegradeTime: "Few weeks to months" },
    "bean": { material: "Organic Material", biodegradeTime: "Few weeks to months" },

    "water bottle": { material: "Either Plastic Or Metal", biodegradeTime: "500-1000 years if Plastic or 50-500 years if Metal"},

    "smartphone": { material: "Plastic, Metal, Glass", biodegradeTime: "450-1000 years" },
    "laptop": { material: "Plastic, Metal, Glass", biodegradeTime: "450-1000 years" },
    "tablet": { material: "Plastic, Metal, Glass", biodegradeTime: "450-1000 years" },
    "earphones": { material: "Plastic, Metal", biodegradeTime: "450-1000 years" },
    "headphones": { material: "Plastic, Metal", biodegradeTime: "450-1000 years" },
    "computer": { material: "Plastic, Metal, Glass", biodegradeTime: "450-1000 years" },
    "phone": { material: "Plastic, Metal, Glass", biodegradeTime: "450-1000 years" },

    "radiator": { material: "Plastic, Metal", biodegradeTime: "450-1000 years" },
    "heater": { material: "Plastic, Metal", biodegradeTime: "450-1000 years" },

    "shoes": { material: "Leather, Rubber, Fabric", biodegradeTime: "1-5 years" },
    "loafer": { material: "Leather, Rubber, Fabric", biodegradeTime: "1-5 years" },
    "sandal": { material: "Leather, Rubber, Fabric", biodegradeTime: "1-5 years" },
    "shopping basket": { material: "Wood", biodegradeTime: "1-3 years" },
    "table": { material: "Wood", biodegradeTime: "1-3 years" },
    "wardrobe": { material: "Wood", biodegradeTime: "1-3 years" },
    "closet": { material: "Wood", biodegradeTime: "1-3 years" },
    "teddy": { material: "Textile (cloth)", biodegradeTime: "1-5 months" },
    "matchstick": { material: "Paper & Tobacco", biodegradeTime: "1-10 years" },
    "boot": { material: "Leather, Rubber, Fabric", biodegradeTime: "1-5 years" },
    "envelope": { material: "Paper (wood)", biodegradeTime: "2-6 weeks" },
    "book": { material: "Paper (wood)", biodegradeTime: "2-6 weeks" },
    "binder": { material: "Paper (wood)", biodegradeTime: "2-6 weeks" },
    "trifle": { material: "Organic Material (Flour, Sugar, Eggs, Butter)", biodegradeTime: "1-2 weeks" },
    "cake": { material: "Organic Material (Flour, Sugar, Eggs, Butter)", biodegradeTime: "1-2 weeks" },
    "burger": { material: "Organic Material", biodegradeTime: "Few weeks to months" },

    "door": { material: "Metal", biodegradeTime: "50-100 years" },

    "backpack": { material: "Plastic & Material", biodegradeTime: "500-1000 years" },
    "pencil case": { material: "Plastic & Material", biodegradeTime: "500-1000 years" },
    "dress": { material: "Textile (cloth)", biodegradeTime: "1-5 months" },
    "skirt": { material: "Textile (cloth)", biodegradeTime: "1-5 months" },
    "pants": { material: "Textile (cloth)", biodegradeTime: "1-5 months" },
    "suit": { material: "Textile (cloth)", biodegradeTime: "1-5 months" },
    "shirt": { material: "Textile (cloth)", biodegradeTime: "1-5 months" },
    "pillow": { material: "Textile (cloth)", biodegradeTime: "1-5 months" },

};
// Load MobileNet model
async function loadModel() {
    document.getElementById('loadingMessage').style.display = 'block';
    const model = await mobilenet.load();
    console.log("Model loaded successfully!");
    document.getElementById('loadingMessage').style.display = 'none';
    return model;
}

// Handle image upload
document.getElementById('imageInput').addEventListener('change', async (event) => {
    const image = event.target.files[0];
    if (image) {
        const imgElement = document.getElementById('uploadedImage');
        const resultElement = document.getElementById('result');
        
        // Clear previous result
        resultElement.innerHTML = '';
        
        imgElement.style.display = 'block';
        imgElement.src = URL.createObjectURL(image);

        // Wait for the image to load before running the prediction
        imgElement.onload = async () => {
            const model = await loadModel();
            const predictions = await model.classify(imgElement);
            displayTopResult(predictions);  // Display only the top result
        };
    }
});

// Display the top classification result and material info
function displayTopResult(predictions) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Top Prediction:</p>`;
    
    // Log predictions to the console to debug and refine matching
    console.log(predictions);

    // Extract the top prediction (highest probability)
    const topPrediction = predictions[0];
    const className = topPrediction.className.toLowerCase();  // Ensure case-insensitivity
    const probability = topPrediction.probability;

    // Only show predictions with more than 25% certainty
    if (probability > 0.25) {
        let foundMaterial = false;

        // Check for partial match or keywords in the top prediction
        for (const [key, value] of Object.entries(materialInfo)) {
            if (className.includes(key)) {  // Partial match
                resultElement.innerHTML += ` 
                    <p>Confidence: ${topPrediction.probability.toFixed(3) * 100}%</p>
                    <p>Material: ${value.material}</p>
                    <p>Biodegradation Time: ${value.biodegradeTime}</p>
                `;
                foundMaterial = true;
                break;  // Stop further checks after finding a match
            }
        }

        if (!foundMaterial) {
            resultElement.innerHTML += `<p>Sorry, we couldn't match the material. Please try another image.</p>`;
        }
    } else {
        resultElement.innerHTML += `<p>Confidence too low to classify the material. Please upload another image.</p>`;
    }
}
