const router = require("express").Router();
const _ = require("lodash");

// entity
const entity = require("../../../enterprise_business_logic/enterprise_entities/teacher");

// useCases
const teacherUseCases = require("../../../application_business_logic/use_case/teacherUseCases");
const useCases = new teacherUseCases();

// repository
const teacherRepository = require("../../../application_business_logic/repository/teacherRepository");
const teacherRepositoryMysql = require("../../storage/teacherRepositoryMysql");
const repository = new teacherRepository(new teacherRepositoryMysql());

router.post("/", (req, res) => {
  console.log("This is from the controller");
  const {
    name,
    age,
    gender,
    salary,
    subject,
    experience,
    managementRole
  } = req.body;
  const classEntity = new entity(
    name,
    age,
    gender,
    salary,
    subject,
    experience,
    managementRole
  );
  useCases
    .create(classEntity, repository)
    .then(val => {
      console.log(val);
      res.json({ status: "done", data: val });
    })
    .catch(err => {
      console.log(err);
      res.json({ status: "failed", error: err.message });
    });
});

router.get("/", (req, res) => {
  console.log("This is from the controller");
  const {
    name,
    age,
    gender,
    salary,
    subject,
    experience,
    managementRole
  } = req.params;
  useCases
    .getAll(repository)
    .then(val => {
      console.log(val);
      res.json({ status: "done", data: val });
    })
    .catch(err => {
      console.log(err);
      res.json({ status: "failed", error: err.message });
    });
});

router.get("/:id", (req, res) => {
  console.log("This is from the controller");
  const { id } = req.params;
  useCases
    .getById(id, repository)
    .then(val => {
      console.log(val);
      res.json({ status: "done", data: val });
    })
    .catch(err => {
      console.log(err);
      res.json({ status: "failed", error: err.message });
    });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  let {
    name,
    age,
    gender,
    salary,
    subject,
    experience,
    managementRole
  } = req.body;
  let updates = {
    name,
    age,
    gender,
    salary,
    subject,
    experience,
    managementRole
  };
  try {
    console.log(updates);
    const result = await useCases.updateProfile(id, updates, repository);
    console.log(result);
    if (_.isArray(result) && result[0] == 1)
      res.json({
        status: true,
        message: "success"
      });
    else
      res.json({
        status: false,
        message: "error_message",
        error: "no_update"
      });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: messages.failure,
      error: error.message
    });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // get all the values from the classes table
  useCases
    .delete(id, repository, { where: { id } })
    .then(val => {
      res.json({ status: "success" });
    })
    .catch(err => {
      res.json({ error: err.message });
    });
});

module.exports = router;
