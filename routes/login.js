var express = require('express');
var router = express.Router();

let bd = {
  'usuario': 'abc',
  'contrasenia': '123'
}

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/out', function(req, res, next) {


  res.redirect('/login')
});

router.post('/validate', function(req, res, next) {
  let usuario = req.body.user;
  let contrasenia = req.body.password;

  //Validación
  if(usuario == bd['usuario'] && contrasenia == bd['contrasenia']) {

    res.redirect('/');
  } else {

    res.redirect('/login')
  }

});

router.get('/validate', function(req, res, next) {
  let usuario = req.query.user;
  let contrasenia = req.query.password;

  //Validación
  if(usuario == bd['usuario'] && contrasenia == bd['contrasenia']) {
    res.redirect('/');
  } else {
    res.redirect('/login')
  }

});


module.exports = router;
