'use strict'

//const mongoUrl = 'mongodb://mongodb/agenda'
const mongoUrl = 'mongodb://127.0.0.1:27018/agenda'

const express = require('express');
const Agenda = require('agenda');
const agendaUI = require('agenda-ui');
const mongo = require('mongodb').MongoClient

// let app = express();
// let agenda = new Agenda( {mongo: db} )
// //let agenda = new Agenda( {db: { address: mongoUrl, collection: 'agendaJobs' } } )

// app.use('/agenda-ui', agendaUI(agenda, {poll: 1000}) );

// app.listen( 8083 , function(){
//     console.log( 'agenda-ui started' )
// })




mongo.connect( mongoUrl , function( error , db ){

    if( error ){
        console.error( error )

    } else {

        let app = express();
        let agenda = new Agenda( {mongo: db} )
//        let agenda = new Agenda( {db: { address: mongoUrl, collection: 'agendaJobs' } } )

        app.use('/agenda-ui', agendaUI(agenda, {poll: 30000}) );

        app.listen( 8083 , function(){
            console.log( 'agenda-ui started' )
        })
    }

} )



