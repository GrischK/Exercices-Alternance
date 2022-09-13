const dataSource = require("../db").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
  create: (req, res) => {
    dataSource
      .getRepository(Wilder)
      .save(req.body)
      .then(() => {
        res.send("Wilder created");
      })
      .catch(() => {
        res.send("Error while creating wilder");
      });
  },

  get: (req, res) => {
    dataSource
      .getRepository(Wilder)
      .find()
      .then(() => {
        res.send("Get wilders");
      })
      .catch(() => {
        res.send("Error while getting wilder");
      });
  },

  update: (req, res) => {
    dataSource
      .getRepository(Wilder)
      .update({ name: "Leïla" }, { name: "Lilou" })
      .then(() => {
        res.send("Wilder updated");
      })
      .catch(() => {
        res.send("Error while updating wilder");
      });
  },

  delete: (req, res) => {
    dataSource
      .getRepository(Wilder)
      .delete({ name: "First Wilder" })      
      .then(() => {
        res.send("Wilder deleted");
      })
      .catch(() => {
        res.send("Error while deleting wilder");
      });
  },
};
