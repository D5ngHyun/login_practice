const express = require('express');
const nunjcuks = require('nunjucks');


class App {
    constructor(){
        this.app = express();
    }


    setMiddleware(){

    }

    setStatic(){
        this.app.use('/', express.static);
    }
}


module.exports = new App().app;