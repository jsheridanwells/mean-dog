abstract class BaseController {
  abstract model: any;

  getAll = async (req, res) => {
    try {
      const docs = await this.model.find({});
      res.status(200).json(docs);
    } catch(err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  get = async (req, res) => {
    try {
      const doc = await this.model.findOne({ _id: req.params.id });;
      res.status(200).json(doc);
    } catch(err: any) {
      return res.status(400).json({ error: err.message});
    }
  }

  create = async (req, res) => {
    try {
      const doc = await new this.model(req.body).save();
      res.status(201).json(doc);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  update = async (req, res) => {
    try {
      await this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
      res.sendStatus(200);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }

  delete = async (req, res) => {
    try {
      await this.model.findOneAndRemove({ _id: req.params.id });
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default BaseController;
