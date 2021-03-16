const express = require('express');
const morgan  = require('morgan');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');
const loginRoutes = require('./routes/loginRoutes');

//express app
const app = express();
//connect to mongodb
const db = 'mongodb+srv://testuser:123@cluster0.spfqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
    
//register view engine
app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.redirect('/notes');
});

app.use(noteRoutes);

app.use(loginRoutes);

//404 code last
app.use((req, res) =>{
    res.status(404).render('404', { title: '404' });
});