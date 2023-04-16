const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "daz2wfqh0",
  api_key: "886819165598333",
  api_secret: "jc4xbboILBI1YdFNcfYvD7gZxTQ",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: " instaClone",
  },
});

module.exports = { cloudinary, storage };