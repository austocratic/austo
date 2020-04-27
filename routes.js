const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res)=>{
    res.render('pages/index')
});

router.get('/lists', (req, res)=>{
    res.render('pages/lists')
});

//Checklist test
router.get('/checklist', (req, res)=>{
    res.render('pages/checklist')
});

module.exports = router;