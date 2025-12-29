const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const userAuthRoute = require('./routes/userauth.route');

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/user', userAuthRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// connect mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("Mongo error:", err));
