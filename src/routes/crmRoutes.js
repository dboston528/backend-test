const routes = (app) => {
  app
    .route('/contact')
    .get((req, res) => res.send('GET Request Successful!'))
    .post((req, res) => res.send('Post Request Successful!'));

  app
    .route('/contact/contact:ID')
    .put((req, res) => res.send('PUT Request Successful!'))
    .delete((req, res) => res.send('DELETE Request Successful!'));
};

export default routes;
