// Get elements from the DOM 
const uploadForm = document.getElementById('uploadForm');
const objectImage = document.getElementById('objectImage');
const materialElement = document.getElementById('material');
const biodegradationTimeElement = document.getElementById('biodegradationTime');
const uploadedImage = document.getElementById('uploadedImage');

// Load the model
async function loadModel() {
    try {
        const model = await tf.loadGraphModel('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-models@2.1.0/mobilenet_v1_1.0_224/model.json');
        console.log('Model loaded successfully');
        return model;
    } catch (error) {
        console.error('Error loading model:', error);
    }
}

// Preprocess the image before passing it to the model
function preprocessImage(image) {
    let tensor = tf.browser.fromPixels(image);
    tensor = tf.image.resizeBilinear(tensor, [224, 224]);
    tensor = tensor.div(255.0);  // Normalize the image
    tensor = tensor.expandDims(0); // Add batch dimension
    console.log('Processed image tensor:', tensor); // Log the tensor
    return tensor;
}

// Fetch ImageNet labels for MobileNet
async function fetchLabels() {
    const response = await fetch('https://storage.googleapis.com/download.tensorflow.org/data/imagenet_class_index.json');
    const labels = await response.json();
    console.log('Fetched labels:', labels); // Log the labels to check
    return Object.values(labels).map(label => label[1]);
}

// Classify the image using the pre-trained model
async function classifyImage(model, image) {
    const tensor = preprocessImage(image);
    const predictions = await model.predict(tensor);
    
    console.log('Predictions:', predictions);

    const topPrediction = predictions.argMax(-1);
    const classId = topPrediction.dataSync()[0];
    console.log('Predicted class ID:', classId);

    const labels = await fetchLabels();
    const predictedLabel = labels[classId];

    // Ensure elements are updated correctly
    if (materialElement && biodegradationTimeElement) {
        console.log('Updating material and biodegradation time...');
        materialElement.textContent = `Predicted Material: ${predictedLabel}`;
        biodegradationTimeElement.textContent = `Biodegradation Time: Placeholder Text`; // Add your logic here
    } else {
        console.error('Unable to find the elements to display results.');
    }

    console.log('Predicted class:', predictedLabel);
}

// Handle form submission and image upload
uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const file = objectImage.files[0];
    if (file) {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = async () => {
            uploadedImage.src = img.src;

            // Log when the image is loaded
            console.log('Image loaded:', img.src);

            // Send the image to the server
            const formData = new FormData();
            formData.append('objectImage', file);

            try {
                const response = await fetch('/upload', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                console.log('Server response:', data);

                // Update material and biodegradation time from the server response
                if (data.message === 'File uploaded successfully') {
                    materialElement.textContent = `Predicted Material: ${data.material}`;
                    biodegradationTimeElement.textContent = `Biodegradation Time: ${data.biodegradationTime}`;
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }

            // Load the model
            const model = await loadModel();

            // Classify the image
            await classifyImage(model, img);
        };
    }
});
