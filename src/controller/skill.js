const dataSource = require("../db").dataSource;
const Skills = require("../entity/Skill");

module.exports = {
  create: async (req, res) => {
    const { name } = req.body;
    if (name.length > 100 || name.length === 0) {
      return res
        .status(422)
        .send("the name should have a length between 1 and 100 characters");
    }
    try {
      const created = await dataSource.getRepository(Skills).save({ name });
      res.status(201).send(created);
    } catch (err) {
      console.error(err);
      res.send("error while creating wilder");
    }
  },

  get: async (req, res) => {
    try {
      const skills = await dataSource.getRepository(Skills).find();
      res.send(skills);
    } catch (err) {
      console.error(err);
      res.send("error while getting wilders");
    }
  },

  update: async (req, res) => {
    const { name } = req.body;
    if (name.length > 100 || name.length === 0) {
      return res
        .status(200)
        .send("the name should have a length between 1 and 100 characters");
    }
    try {
      const { affected } = await dataSource
        .getRepository(Skills)
        .update(req.params.id, req.body);
      if (affected) return res.send("wilder updated");
      res.sendStatus(404);
    } catch (err) {
      console.error(err);
      res.send("Error while updating wilder");
    }
  },

  delete: async (req, res) => {
    try {
      const { affected } = await dataSource
        .getRepository(Skills)
        .delete(req.params.id);
      if (affected) return res.send("Wilder deleted");
      res.sendStatus(404);
    } catch (err) {
      console.error(err);
    }
  },
};
