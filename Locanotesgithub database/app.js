/*

** MAIN FUNCTION **

*/
const express = require('express');
const morgan  = require('morgan');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');
const privacyRoutes = require('./routes/privacyRoutes');
const noteTagRoutes = require('./routes/noteTagRoutes');
const commentRoutes = require('./routes/commentRoutes');
const friendRoutes = require('./routes/friendRoutes');
const shareRoutes = require('./routes/shareRoutes');
const upvoteRoutes = require('./routes/upvoteRoutes');
const downvoteRoutes = require('./routes/downvoteRoutes');
const reportTagRoutes = require('./routes/reportTagRoutes');
const reportRoutes = require('./routes/reportRoutes');
const blockUserRoutes = require('./routes/blockUserRoutes');
const supportMessageRoutes = require('./routes/supportMessageRoutes');
const directMessageRoutes = require('./routes/directMessageRoutes');
// Above gets all the routes

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

// below uses route functionality
app.use(noteRoutes);

app.use(loginRoutes);

app.use(userRoutes);

app.use('/privacy', privacyRoutes);

app.use('/notetag', noteTagRoutes);

app.use(commentRoutes);

app.use(friendRoutes);

app.use(shareRoutes);

app.use('/upvote', upvoteRoutes);

app.use('/downvote', downvoteRoutes);

app.use('/reporttag', reportTagRoutes);

app.use('/report', reportRoutes);

app.use(blockUserRoutes);

app.use(supportMessageRoutes);

app.use(directMessageRoutes);


//404 code last
app.use((req, res) =>{
    res.status(404).render('404', { title: '404' });
});