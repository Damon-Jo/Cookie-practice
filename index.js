const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);


// the below example route codes are for cookies
app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies; // code to read a cookie
    res.send(`Hey there, ${name}!`);
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks'); // code to set a cookie
    res.cookie('animal', 'harlequin shrimp'); // code to set a cookie
    res.send('OK SENT YOU A COOKIE');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
