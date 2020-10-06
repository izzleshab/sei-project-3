const router = require('express').Router()
const beans = require('../controllers/beans')
const basket = require('../controllers/basket')
const roasters = require('../controllers/roasters')
const auth = require('../controllers/auth')
const users = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')


// PRODUCTS/BEANS
router.route('/beans')
  .post(secureRoute, beans.create) // UnusedFunction on the frontend
  .get(beans.index)

router.route('/beans/:id')
  .get(beans.show)

<<<<<<< HEAD
router.route('/beans/filter')
  .get(beans.index)
=======
// * PRODUCTS/BEANS/COMMENTS
router.route('/beans/:id/comments')
  .post(secureRoute, beans.commentCreate)

// * PRODUCTS/BEANS/COMMENTS/DELETE
router.route('/beans/:id/comments/:commentId')
  .delete(secureRoute, beans.commentDelete)
>>>>>>> development

//BUSINESSES/ROASTERS
router.route('/roasters')
  .post(roasters.create)
  .get(roasters.index)

router.route('/roasters/:id')
  .get(roasters.show)

<<<<<<< HEAD
// BASKET
router.route('/basket')
  .get(secureRoute, basket.index)

router.route('/basket')
  .post(secureRoute, basket.create)

router.route('/basket/:basketItemId')
  .put(secureRoute, basket.update)

router.route('/basket')
  .delete(secureRoute, basket.delete)

=======
>>>>>>> development
// USERS 
router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

router.route('/users')
  .get(users.index)

<<<<<<< HEAD
router.route('/users/:id')
  .get(users.show)
=======

  
>>>>>>> development

module.exports = router