const express = require("express");
const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder")

const app = express();

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [require("./entity/Wilder")],
});

app.get("/hello", (req, res) => {
  console.log("test");
  res.send("hello");
});

const start = async () => {
  await dataSource.initialize();
  dataSource.getRepository(Wilder).save({ name: "First Wilder" }, { name: "Second Wilder" });
  app.listen(3000, () => {
    console.log("Tout fonctionne parfaitement !");
  });
};

start();

// const insert = async () => {
//   await dataSource
//       .createQueryBuilder()
//       .insert()
//       .into(Wilder)
//       .values([
//           { name: "Timber"},
//           { name: "Phantom"},
//       ])
//       .execute()
// }

// insert()