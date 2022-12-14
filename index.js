import express from 'express';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import router from './src/router.js';

const PORT = process.env.PORT || 5000;
const DB = process.env.DATABASE_URL;
const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

app.get('/', (req, res) => {
    res.status(200).json("it's work");
});

async function startApp() {
    try {
        await mongoose.connect(DB, {});
        app.listen(PORT, () => console.log('started'));
    } catch (e) {
        console.log(e);
    }
}

startApp();
