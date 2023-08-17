const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);


// this example route code is for cookies
app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks');
    res.cookie('animal', 'harlequin shrimp');
    res.send('OK SENT YOU A COOKIE');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
