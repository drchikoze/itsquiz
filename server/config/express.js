import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import express from 'express'

export default function (app) {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/movies_test')
    app.disable('x-powered-by');

    app.set('view cache', false);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    // app.use(cookieParser());


    // let mongoStore = connectMongo({
    //   session: session
    // })
    //
    // app.use(session({
    //   saveUninitialized: true,
    //   resave: true,
    //   secret: 'secret_text',
    //   store: new mongoStore({
    //     mongooseConnection: db.connection
    //   })
    // }));

    // app.use(passport.initialize());
    // app.use(passport.session());

    app.use(express.static('./dist'));
    app.use(express.static('./static'));

};
