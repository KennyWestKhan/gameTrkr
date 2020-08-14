const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//Load env
dotenv.config({path: './config.env'});
const app = express();

//Dev logging
if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

const port = process.env.PORT || 8000
//Profile routes
app.use('/api/v1/profile', require('./routes/profile'))


//handle production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static(__dirname + '/public'));

    //handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.listen(port, () => {
    console.log(`Server running ${process.env.NODE_ENV} mode on port ${port}`)
})
