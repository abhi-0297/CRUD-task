const router = require("express").Router();

const _ = require("lodash");

// entity
const entity = require("../../../enterprise_business_logic/enterprise_entities/college");

// useCases
const collegeUseCases = require("../../../application_business_logic/use_case/collegeUseCases");
const useCases = new collegeUseCases();

const {
  getValidator,
  getByIdValidator,
  addValidator,
  updateValidator,
  deleteValidator
} = require("./validator");

// repository
const collegeRepository = require("../../../application_business_logic/repository/collegeRepository");
const collegeRepositoryMysql = require("../../storage/collegeRepositoryMysql");
const repository = new collegeRepository(new collegeRepositoryMysql());

router.post("/", addValidator, async (req, res, next) => {
  const { city, collegeName, deletedAt, stateId } = req.body;
  try {
    const keyEntity = new entity(city, collegeName, deletedAt, stateId);
    const result = await useCases.add(keyEntity, repository);
    res.status(201).json({
      status: true,
      statusCode: 201,
      message: messages.success,
      result
    });
  } catch (error) {
    next(error);
  }
});

router.get("/", getValidator, async (req, res, next) => {
  //const { city, collegeName, deletedAt, stateId } = req.query;
  let { city, collegeName, deletedAt, stateId } = req.body;

  try {
    const result = await useCases.getAll(
      city,
      collegeName,
      deletedAt,
      stateId,
      repository
    );
    res.json({
      status: true,
      statusCode: 200,
      message: messages.success,
      result
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:uuidIdentifier", getByIdValidator, async (req, res, next) => {
  const { uuidIdentifier } = req.params;

  try {
    const result = await useCases.getById(uuidIdentifier, repository);
    res.json({
      status: true,
      statusCode: 200,
      message: messages.success,
      result
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:uuidIdentifier", updateValidator, async (req, res, next) => {
  const { uuidIdentifier } = req.params;
  const updates = req.body;
  try {
    const result = await useCases.update(uuidIdentifier, updates, repository);
    res.json({
      status: true,
      statusCode: 200,
      message: messages.success,
      result
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:uuidIdentifier", deleteValidator, async (req, res, next) => {
  const { uuidIdentifier } = req.params;
  try {
    await useCases.delete(uuidIdentifier, repository);
    res.json({
      status: true,
      statusCode: 200,
      message: messages.success
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
