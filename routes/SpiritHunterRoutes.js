module.exports = function(app) {
  var api = require('../controllers/apiController');

  // api Routes
  app.route('/users')
    .get(api.list_all_users);

  app.route('/user/:userId')
    .get(api.get_a_user);

  app.route('/user/:userId/success')
    .get(api.list_all_success_of_user)
    .post(api.add_success_to_user);

  app.route('/user/:userId/premium')
    .get(api.premium);

  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
};
