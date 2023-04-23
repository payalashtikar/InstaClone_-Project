const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./model/post');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const { response } = require('express');
const cors = require("cors");

const photo = path.join(__dirname, "./uploads/images");
app.use(express.static(photo));
app.use(express.json())

// mongodb+srv://payalashtikar20:Payal2000@cluster0.q6dsw.mongodb.net/?retryWrites=true&w=majority
async function connectDB() {
    try {
        console.log("DB connected")
        return await mongoose.connect('mongodb://localhost:27017/InstaClone')
        // return await mongoose.connect('mongodb+srv://payalashtikar20:Payal2000@cluster0.q6dsw.mongodb.net/?retryWrites=true&w=majority')
    } catch (e) {
        console.log(e);
        throw error('DB connection failed');
    }
}

async function main() {
    await connectDB();


    var storage = multer.diskStorage({
        destination: function (req, res, callback) {
            callback(null, './uploads/images/')
        },
        filename: function (req, file, callback) {
            callback(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })


    const corsoptions = {
        origin: "*",
        credentials: true,
        optionSuccessStatus: 200,
    };
    app.use(cors(corsoptions));

    app.get('/', (req, res) => {
        res.send({ message: "Welcome to instaclone project" })
    })

    app.get('/api/v1/posts', async function (req, res) {
        const posts = await Post.find();
        posts.reverse();
        res.json({
            posts
        })
    })

    app.post('/api/v1/posts', upload.single('PostImage'), function (req, res, next) {
        let obj = new Post({
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            PostImage: req.file.originalname,
            date: req.body.date
        })

        app.get("/image/:id", (req, res) => {
            const photo = path.join(__dirname, "./uploads/images/", req.params.id);
            res.sendFile(photo);
        });

        obj.save()
            .then(response => {
                res.json({
                    message: 'Post successfully uploaded'
                })
            })
            .catch(err => {
                message: "Error in uploading"
            })

    })


    app.listen( process.env.PORT || 9000, () => {

        console.log('Server Running...')
    })
}

main()



