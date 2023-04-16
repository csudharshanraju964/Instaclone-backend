const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
//connect to DataBase
const server = process.env.DATABASE_URL || "mongodb+srv://csudharshanraju964:spykar*964*@cluster0.axrjo2o.mongodb.net/instaclone";

mongoose.connect(server, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to DB");
    }
);
// console.log(process.env.PORT);
app.listen(process.env.PORT || 7000, () => console.log("Server running ....."));