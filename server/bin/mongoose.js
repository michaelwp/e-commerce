const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("MongoDB successfully connected")
    }
});

module.exports = {
    mongoose,
    MONGO_URI
};
