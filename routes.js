const express = require('express');
const router = express.Router();


router.get('/lists', (req, res)=>{
    res.render('pages/lists')
});

/* GET home page. */
router.get('/', (req, res)=>{
    res.render('pages/index')
});

/* OLD template
express()
  .use(express.static(path.join(__dirname, 'public')))
  //Template for example code
  //.set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))


  //.set('view engine', 'html')
  .get('/', (req, res) => res.send('TEST'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))*/


module.exports = router;