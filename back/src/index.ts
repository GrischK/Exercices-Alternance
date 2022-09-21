import express from "express";
import cors from "cors";
import dataSource from "./db";
import wilderController from "./controller/wilder";
import skillsController from "./controller/skill";

const app = express();

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   console.log("test");
//   res.send("Welcome");
// });

app.get("/wilders", wilderController.get);
app.post("/wilders", wilderController.create);
app.put("/wilders/:id", wilderController.update);
app.delete("/wilders/:id", wilderController.delete);
app.post("/wilders/:wilderId/skills/:skillId", wilderController.addSkill);
app.delete("/wilders/:wilderId/skills/:skillId", wilderController.removeSkill);

app.get("/skills", skillsController.get);
app.post("/skills", skillsController.create);
app.put("/skills/:id", skillsController.update);
app.delete("/skills/:id", skillsController.delete);

const start = async (): Promise<void> => {
  await dataSource.initialize();
  // inserting()
  // dataSource.getRepository(Wilder).save({ name: "First Wilder" }, { name: "Second Wilder" });
  // deleting();
  app.listen(5000, () => {
    console.log("Tout fonctionne parfaitement !");
  });
};

void start();

// const inserting = async () => {
//   await dataSource
//     .createQueryBuilder()
//     .insert()
//     .into(Wilder)
//     .values([{ name: "Timber" }, { name: "Phantom" }])
//     .execute();
// };

// const deleting = async () => {
//   await dataSource
//     .createQueryBuilder()
//     .delete()
//     .from(Wilder)
//     .where("id = :id", { id: ["6", "7", "8", "9", 10, 11, 12, 13] })
//     .execute();
// };
