// importing cloudinary and dotenv modules
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

// configurint dotenv
dotenv.config();


// configuring cloudinary with the values in our dotenv file
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_USER_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// exporting our file cloudinary.js as {cloudinary}
module.exports = {cloudinary};