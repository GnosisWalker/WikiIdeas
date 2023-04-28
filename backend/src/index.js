import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express()
const port = 3000

const urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(urlencodedParser);

app.get('/', async (req, res) => {
    res.send('Hello world');
})

try {
    await mongoose.connect(`mongodb://db:27017/${process.env.MONGO_INITDB_DATABASE}`, {
        user: process.env.MONGO_USERNAME,
        pass: process.env.MONGO_PASSWORD
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    })
} catch (e) {
    console.error(e);
}