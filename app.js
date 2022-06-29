const express = require('express');
const nunjucks = require('nunjucks');
const mongoose = require('mongoose');
const logger = require('morgan');
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const multer = require('multer');

class App {
    constructor(){
        this.app = express();

        
        this.MongoConnect()
        this.setMiddleware();
        this.setMulter();
        this.setTemplateEngine();
        this.setStatic();
        this.setController();
    }

    setMulter(){
        multer().array();
    }

    setTemplateEngine(){
        nunjucks.configure('views', {
            autoescape: true,
            express: this.app
        })
    }

    setMiddleware(){
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    setStatic(){
        this.app.use(express.static('public'));
    }

    setController(){
        this.app.use('/api', require('./controller'));
    }

    setModel(){
        
    }

    async MongoConnect(){
        try {
            await mongoose.connect(`mongodb+srv://dongs:${process.env.DB_PASS}@cluster0.p0fvf.mongodb.net/?retryWrites=true&w=majority`);
            console.log('connected');
        } catch(e) {
            console.log(e);
        }
    }
}


module.exports = new App().app;