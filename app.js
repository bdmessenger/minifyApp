import {config} from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import {URL, parse} from 'url';
import template from './src/template';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/components/app';

config();
const app = express();
app.use('/public', express.static(path.resolve(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const urlSchema = new mongoose.Schema({
    original_url: String,
    short_url: String
});
const urlModel = mongoose.model('urlModel', urlSchema);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req,res) => {
    const content = renderToString(<App/>);
    const response = template("Minify App", content);
    res.setHeader('Cache-Control', 'public, max-age=604800');
    res.send(response);
});

app.get('/:id', async (req,res, next) => {
    if(req.params.id.length !== 5) {
        next();
    }

    const isUrlFound = await findEntryByShortUrl(req.params.id);
    if(isUrlFound) {
        return res.redirect(isUrlFound.original_url);
    }
    next();
});

app.post('/api/url', async (req,res) => {

    let url = req.body.url;

    /* Regex Expression Provided By: https://stackoverflow.com/users/1113246/amar-palsapure */
    var regex = /^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,4})+)(\/(.)*)?(\?(.)*)?/g;

    if(!url.match(regex)) {
        console.log('Not Matched...');
        return res.json({status: false, url: ''});
    }

    if(!url.match(/^https?:\/\//g)) {
        url = `https://${url}`;
    }

    if(!stringIsAValidUrl(url, ['https', 'http'])) {
        console.log('Invalid URL...');
        return res.json({status: false, url: ''});
    }

    const isUrlFound = await findEntryByUrl(url);

    if(isUrlFound) {
        console.log('URL has been found...');
        return res.json({status: true, url: isUrlFound.short_url});
    }

    const newUrl = Math.random().toString(36).substr(2, 5);

    urlModel.create({original_url: url, short_url: newUrl}, (err, res) => {
        if(err) return console.log(err);
        res.save();
    });

    console.log('URL ID has been created...');
    res.json({status: true, url: newUrl});
});

async function findEntryByUrl(url) {
    return await urlModel.findOne({original_url: url}).exec();
}

async function findEntryByShortUrl(short_url) {
    return await urlModel.findOne({short_url}).exec();
}

/*
    URL String Validation By: https://stackoverflow.com/users/1097618/pouya
 */
const stringIsAValidUrl = (s, protocols) => {
    try {
        new URL(s);
        const parsed = parse(s);
        return protocols
            ? parsed.protocol
                ? protocols.map(x => `${x.toLowerCase()}:`).includes(parsed.protocol)
                : false
            : true;
    } catch (err) {
        return false;
    }
};

app.use((req,res, next) => {
    res.status(404).send('404 Page Not Found');
});


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening to port: ${port}`));