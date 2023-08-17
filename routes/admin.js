const express = require('express');
const router = express.Router();

// localhost:3000/admin/deleteeverything?isAdmin=true -> OK DELETED IT ALL
router.use((req, res, next) => {
    if(req.query.isAdmin) {
        next();
    }
    res.send('SORRY NOT AN ADMIN');
})

router.get('/topsecret', (req, res) => {
    res.send('THIS IS TOP SECRET');
})

router.get('/deleteeverything', (req, res) => {
    res.send('OK DELETED IT ALL');
})

module.exports = router;