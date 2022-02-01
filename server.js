// importing express server module
const express = require('express');
const multerConfig = require('./utils/multer');
const {cloudinary} = require('./utils/cloudinary');



const PORT = process.env.PORT || 5000

// initializing express server
const app = express();

//  setting the ejs view engine
app.set("view engine", "ejs");


// Recognising incoming requests as json objects and strings or arrays using express.json and express.urlencoded and setting their limits to 100mb size.
app.use(express.json({limit: "100mb"}))
app.use(express.urlencoded({limit: "100mb", extended:false}))

// ------ CREATING THE ROUTES FOR THIS PROJECT ie GET REQUEST AND POST REQUEST----//

// creating a get request
app.get('/api/upload', async (req, res)=> {

// Downloading single file
// const single_file = await cloudinary.api.resource( '19bdd651c45173f4bba21b1d9dc98bf5');
// console.log(single_file)


// Downloading multiple files
const all_files = await cloudinary.api.resources();
console.log(all_files)

const files = await all_files.resources;
console.log(files)

res.render("index", {files});
})

// creating a post request 
app.post('/api/upload', multerConfig, async (req, res)=> {
    
    console.log("file-details:", req.files[0])
    const result =  await cloudinary.uploader.upload(req.files[0].path, { resource_type: "auto" });
    
    console.log("result:", result)

    const filesDetails = {
        file: result.public_id,
        url: result.url
    }

    res.status(200).json({msg: "Uploaded Successfully", filesDetails})
  
})




app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})