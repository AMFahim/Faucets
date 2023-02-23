const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const cookieSession = require("cookie-session")
const mongoose = require("mongoose");
const passportSetup = require("./controllers/customer.controller")
const passport = require("passport")
const userRoutes = require("./routes/user.route");
const authRoutes = require("./routes/customer.routes")




const port = process.env.PORT || 5500;


dotenv.config();
app.use(cors());
app.use(
    cookieSession({
        name: "session",
        keys: ["auth"],
        maxAge: 24*60*60*100
    })
)

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session())

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "startup"
})
    .then(console.log('connect MongoDb'))
    .catch(err => console.log('Mongo err', err))


    app.use("/api/v1/auth", userRoutes);
    app.use("/auth", authRoutes)

    app.get('/', (req, res) => {
        res.send('Welcome to Faucets API')
    })
    
    app.listen(port, () => {
        console.log(`${port}`, 'server connected')
    })