const dataSource = require("../db").dataSource;
const Wilder = require("../entity/Wilder");
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
      const created = await dataSource.getRepository(Wilder).save({ name });
      res.status(201).send(created);
    } catch (err) {
      console.error(err);
      res.send("error while creating wilder");
    }
  },

  get: async (req, res) => {
    try {
      const wilders = await dataSource.getRepository(Wilder).find();
      res.send(wilders);
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
        .getRepository(Wilder)
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
        .getRepository(Wilder)
        .delete(req.params.id);
      if (affected) return res.send("Wilder deleted");
      res.sendStatus(404);
    } catch (err) {
      console.error(err);
    }
  },

  addSkill: async (req, res) => {
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneBy({ id: req.params.wilderId });
      console.log(wilderToUpdate);
      const skillToAdd = await dataSource
        .getRepository(Skills)
        .findOneBy({ id: req.params.skillId });
      wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
      await dataSource.getRepository(Wilder).save(wilderToUpdate);
      res.send("Skill added to wilder");
    } catch (err) {
      console.log(err);
      res.send("Error while adding skill to wilder");
    }
  },
};
