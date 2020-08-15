import Router from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  req.body;
  return res.json({
    message: 'OK',
  });
});

export default routes;
