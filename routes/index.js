var express = require('express');
var router = express.Router();

/* GET home page (index.ejs). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cleaning Services | Empresa integral de limpieza en Málaga' });
});

/* GET section page (nosotros.ejs). */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros' });
});

/* GET section page (servicios.ejs). */
router.get('/servicios', function(req, res, next) {
  res.render('servicios', { title: 'Servicios' });
});

/* GET section page (sustentabilidad.ejs). */
router.get('/sustentabilidad', function(req, res, next) {
  res.render('sustentabilidad', { title: 'Sustentabilidad' });
});

/* GET section page (contacto.ejs). */
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});

module.exports = router;
