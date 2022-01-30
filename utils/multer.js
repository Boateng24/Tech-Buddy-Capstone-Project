// importing or requring multer package
const multer = require('multer');

// stores files on disk
const fileStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "files")
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
})

// exporting multer configuration to the server.js file
module.exports = multer({storage: fileStorage,
fileFilter: (req, file, cb)=> {


  if (!file.mimetype.match(/png||jpeg||jpg||gif||jfif||avif||svg||mp4||mov||avi||flv||mkv$i/)){
    cb(new Error('File format not supported!'), false);
    return
  }
  // To accept the file pass `true`, like so:
  cb(null, true)}}).any()