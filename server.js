const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');
const fetch = require('node-fetch');

// Initialize Express app
const app = express();
const PORT = 3000;

// Create 'uploads' directory if it doesn't exist
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up storage engine for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);  // Folder where files will be saved
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  }
});

// Initialize multer with the storage engine
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb('Error: File type not supported');
    }
  }
});

// Serve static files (for the uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Load the model (MobileNet)
let model;
async function loadModel() {
  model = await tf.loadGraphModel('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-models@2.1.0/mobilenet_v1_1.0_224/model.json');
  console.log('Model loaded successfully');
}

// POST route for file upload
app.post('/upload', upload.single('objectImage'), async (req, res) => {
  // Check if no file was uploaded
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }

  // Preprocess the uploaded image
  const imagePath = `./uploads/${req.file.filename}`;
  const image = await tf.node.decodeImage(fs.readFileSync(imagePath));
  const tensor = tf.image.resizeBilinear(image, [224, 224]);
  const normalized = tensor.div(255.0).expandDims(0); // Normalize and add batch dimension

  // Make a prediction with the model
  const predictions = await model.predict(normalized);
  const classId = predictions.argMax(-1).dataSync()[0];

  // Fetch labels for MobileNet
  const response = await fetch('https://storage.googleapis.com/download.tensorflow.org/data/imagenet_class_index.json');
  const labels = await response.json();
  const predictedLabel = Object.values(labels)[classId][1];

  // Example logic for biodegradation time and material
  let biodegradationTime = 'Unknown';
  if (predictedLabel.includes('plastic')) {
    biodegradationTime = '500+ years';
  } else if (predictedLabel.includes('metal')) {
    biodegradationTime = '100-500 years';
  } else if (predictedLabel.includes('organic')) {
    biodegradationTime = '1-5 years';
  }

  res.json({
    message: 'File uploaded successfully',
    fileUrl: `/uploads/${req.file.filename}`,
    material: predictedLabel,
    biodegradationTime: biodegradationTime
  });
});

// Start server
app.listen(PORT, async () => {
  await loadModel();
  console.log(`Server running on port ${PORT}`);
});
