const express = require('express');
const nunjucks = require('nunjucks');



class App {
    constructor(){
        this.app = express();

        this.setTemplateEngine();
        this.setStatic();
        this.setController();
    }

    setTemplateEngine(){
        nunjucks.configure('views', {
            autoescape: true,
            express: this.app
        })
    }

    setMiddleware(){

    }

    setStatic(){
        // this.app.use('/static', express.static(__dirname + '/public'));
        this.app.use(express.static('public'));
    }

    setController(){
        this.app.use('/api', require('./controller'));
    }
}


module.exports = new App().app;