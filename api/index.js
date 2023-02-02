const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.route");



const port = process.env.PORT || 5500;


dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "startup"
})
    .then(console.log('connect MongoDb'))
    .catch(err => console.log('Mongo err', err))


    app.use("/api/v1/auth", userRoutes)

    app.get('/', (req, res) => {
        res.send('Welcome to Faucets API')
    })
    
    app.listen(port, () => {
        console.log(`${port}`, 'server connected')
    })