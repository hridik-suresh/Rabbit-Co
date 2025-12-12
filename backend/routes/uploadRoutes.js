const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const streamifier = require("streamifier");

require("dotenv").config();

//Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Multer setup using memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    //Function to handle the stream upload to Cloudinary
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });
        // Use streamifier to convert buffer to stream
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };

    //Call the stream upload function
    const result = await streamUpload(req.file.buffer);
    //Respond with the uploaded image URL
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Upload failed" });
  }
});

module.exports = router;
