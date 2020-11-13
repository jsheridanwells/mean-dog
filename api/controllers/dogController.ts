import Dog from '../models/dog';
import BaseController from './baseController';

export default class DogController extends BaseController {
  model = Dog;
}
