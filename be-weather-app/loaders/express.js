const express = require('express');
const cors = require('cors');
const apiRouter = require('../app/routes/v1/api');
const config = require('../app/config');

const startServer = () => {
    const application = express();

    application.listen(config.port, err => {
        if (err){
            console.log(err);
            process.exit(1);
        }
        console.log("SERVER STARTED")
    });
    return application;
}

module.exports = () => {
    const app = startServer();
    app.use(cors());
    app.use(express.json());
    app.use(config.api.prefix, apiRouter);
    return app;
}