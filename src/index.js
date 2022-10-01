import express from 'express';
import Note from './models/Note.js';
import './database/db.js';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/notes', async (req, res) => {

    const notes = await Note.find();

    res.json(notes);

});

app.listen(3000)

console.log("Server running on port 3000");