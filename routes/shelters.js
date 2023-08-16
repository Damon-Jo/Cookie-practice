const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ALL SHELTERS');
})
router.post('/', (req, res) => {
    res.send('CREATE SHELTER');
})

router.get('/:id', (req, res) => {
    res.send('VIEW ONE SHELTER');
})

router.get('/:id/edit', (req, res) => {
    res.send('EDIT ONE SHELTER');
})

module.exports = router;