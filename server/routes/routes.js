const express = require("express");
const Model = require("../model/model");

const router = express.Router();
router.use(express.json());

router.post("/post", async (request, response) => {
  const data = new Model({
    task: request.body.task,
  });
  try {
    const dataToSave = await data.save();
    response.status(200).json(dataToSave);
  } catch (e) {
    response.status(400).json({ message: e.message });
  }
});

router.get("/getAll", async (request, response) => {
  try {
    const data = await Model.find();
    response.json(data);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.get("/getOne/:id", (request, response) => {
  response.send("Get by ID API");
});

router.patch("/update/:id", (request, response) => {
  response.send("Update by ID API");
});

router.delete("/delete/:id", (request, response) => {
  response.send("Delete by ID API");
});

module.exports = router;
