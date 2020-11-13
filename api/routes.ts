import * as express from 'express';
import { Router } from 'express';

import DogController from './controllers/dogController';

function getRoutes(): Router {
  const router = express.Router();
  const dogController = new DogController();

  router.route('/dogs').get(dogController.getAll);
  router.route('/dogs/:id').get(dogController.get);
  router.route('/dogs').post(dogController.create);
  router.route('/dogs').put(dogController.update);
  router.route('/dogs').delete(dogController.delete);

  return router;
}

export default getRoutes;
