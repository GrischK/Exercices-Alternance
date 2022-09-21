import dataSource from "../db";
import { Wilder } from "../entity/Wilder";
import { Skill } from "../entity/Skill";
import { Grade } from "../entity/Grade";
import { IController } from "../Types/IController";

const wilderController: IController = {
  create: async (req, res) => {
    const { name } = req.body;
    if (name.length > 100 || name.length === 0) {
      return res
        .status(422)
        .send("the name should have a length between 1 and 100 characters");
    }
    try {
      const created = await dataSource.getRepository(Wilder).save(req.body);
      res.status(201).send(created);
    } catch (err) {
      console.error(err);
      res.send("error while creating wilder");
    }
  },

  get: async (req, res) => {
    try {
      const wilders = await dataSource.getRepository(Wilder).find({ relations: { grades: { skill: true } } });
      res.send(wilders.map(w => ({ ...w, skills: w.grades.map(g => ({ id: g.skillId, name: g.skill.name })) })));
    } catch (err) {
      console.error(err);
      res.send("error while getting wilders");
    }
  },

  update: async (req, res) => {
    // const { data } = req.body;

    // if (name.length > 100 || name.length === 0) {
    //   return res
    //     .status(200)
    //     .send("the name should have a length between 1 and 100 characters");
    // }
    try {
      const { affected } = await dataSource
        .getRepository(Wilder)
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
        .getRepository(Wilder)
        .delete(req.params.id);
      if (affected !== 0) return res.send("Wilder deleted");
      res.sendStatus(404);
    } catch (err) {
      console.error(err);
    }
  },

  addSkill: async (req, res) => {
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneBy({ id: parseInt(req.params.wilderId) });

      if (wilderToUpdate === null) { return res.status(404).send("Wilder not found") }

      const skillToAdd = await dataSource
        .getRepository(Skill)
        .findOneBy({ id: parseInt(req.params.skillId) });
      // wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];

      if (skillToAdd === null) { return res.status(404).send("Skill not found") }

      await dataSource.getRepository(Grade).insert({ wilder: wilderToUpdate, skill: skillToAdd });
      res.send("Skill added to wilder");
    } catch (err) {
      console.log(err);
      res.send("Error while adding skill to wilder");
    }
  },

  removeSkill: async (req, res) => {
    try {
      const wilderToUpdate = await dataSource
        .getRepository(Wilder)
        .findOneBy({ id: parseInt(req.params.wilderId) });

      if (wilderToUpdate === null) { return res.status(404).send("Wilder not found") }

      const skillToDelete = await dataSource
        .getRepository(Skill)
        .findOneBy({ id: parseInt(req.params.skillId) });

      if (skillToDelete === null) { return res.status(404).send("Skill not found") }

      await dataSource.getRepository(Grade)
        .delete({ wilderId: wilderToUpdate.id, skillId: skillToDelete.id })

      // wilderToUpdate.skills = wilderToUpdate.skills.filter(
      //   (e) => e.id !== skillToDelete.id
      // );
      // await dataSource.getRepository(Wilder).save(wilderToUpdate);

      res.send("Skill deleted to wilder");
    } catch (err) {
      console.log(err);
      res.send("Error while deleting skill to wilder");
    }
  },
};

export default wilderController;
