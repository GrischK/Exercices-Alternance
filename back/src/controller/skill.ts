import dataSource from "../db";
import { Skill } from "../entity/Skill";
import { IController } from "../Types/IController";

const skillsController: IController = {
  create: async (req, res) => {
    const { name } = req.body;
    if (name.length > 100 || name.length === 0) {
      return res
        .status(422)
        .send("the name should have a length between 1 and 100 characters");
    }
    try {
      const created = await dataSource.getRepository(Skill).save({ name });
      res.status(201).send(created);
    } catch (err) {
      console.error(err);
      res.send("error while creating wilder");
    }
  },

  get: async (req, res) => {
    try {
      const skills = await dataSource.getRepository(Skill).find();
      res.send(skills);
    } catch (err) {
      console.error(err);
      res.send("error while getting wilders");
    }
  },

  getOne: async (req, res) => {
    try {
      const skills = await dataSource.getRepository(Skill).findOneBy({ name: req.body.name });
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
        .getRepository(Skill)
        .update(req.params.id, req.body);
      if (affected !== 0) return res.send("wilder updated");
      res.sendStatus(404);
    } catch (err) {
      console.error(err);
      res.send("Error while updating wilder");
    }
  },

  delete: async (req, res) => {
    try {
      const { affected } = await dataSource
        .getRepository(Skill)
        .delete(req.params.id);
      if (affected !== 0) return res.send("Skill deleted");
      res.sendStatus(404);
    } catch (err) {
      console.error(err);
    }
  },
};

export default skillsController;
