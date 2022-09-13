const express = require("express");
const dataSource = require("./db.js").dataSource;
const Wilder = require("./entity/Wilder");
const wilderController = require("./controller/wilder")

const app = express();


app.use(express.json())


// app.get("/", (req, res) => {
//   console.log("test");
//   res.send("Welcome");
// });

app.get("/api/wilder", wilderController.get)

app.post("/api/wilder", wilderController.create)

app.put("/api/wilder", wilderController.update)

app.delete("/api/wilder", wilderController.delete)



const start = async () => {
  await dataSource.initialize();
  // inserting()
  // dataSource.getRepository(Wilder).save({ name: "First Wilder" }, { name: "Second Wilder" });
  // deleting();
  app.listen(3000, () => {
    console.log("Tout fonctionne parfaitement !");
  });
};

start();

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
