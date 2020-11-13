import * as mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({
  name: String,
  type: String,
  disposition: String
});

const Dog = mongoose.model('Dog', dogSchema);

export default Dog;
