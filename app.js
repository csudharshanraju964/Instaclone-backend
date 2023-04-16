const express = require("express");
const bodyParser = require("body-parser");
const PostData = require("./models/postSchema");
const cors = require("cors");
const app = express();

const { cloudinary } = require("./utilities/cloudinary");
const fileupload = require("express-fileupload");

app.use(cors());
app.use(express.urlencoded());

app.use(express.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json());

app.use(fileupload({ useTempFiles: true }));

app.get("/", async (req, res) => {
    try {
        const data = await PostData.find();
        res.json(data);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
});

app.post("/posts", async (req, res) => {
    try {
        const file = req.files.PostImage;
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            public_id: `${Date.now()}`,
            resource_type: "auto",
            folder: "images",
        });
        // const t=new Date.now()
        const url = result.secure_url;
        const { name, description, location } = req.body;
        const Posts = await PostData.create({
            name: name,
            location: location,
            description: description,
            PostImage: url,
        })
        res.json({ status: "ok", Posts })
    } catch (e) {
        res.status(400).json({
            status: "Failed to post",
            message: e.message,
        });
    }
});

module.exports = app