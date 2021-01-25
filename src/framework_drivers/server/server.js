const express = require("express");
const app = express();
const { errors } = require("celebrate");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sync all the model in  the database

const classRoutes = require("../../interface_adapter/controller/classes/classesController");
const studentRoutes = require("../../interface_adapter/controller/student/studentController");
const teacherRoutes = require("../../interface_adapter/controller/teacher/teacherController");
const subjectRoutes = require("../../interface_adapter/controller/subject/subjectController");
const managementRoutes = require("../../interface_adapter/controller/management/managementController");
const collegeRoutes = require("../../interface_adapter/controller/college/collegeController");

// routes to be published here
app.use("/class", classRoutes);
app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);
app.use("/subject", subjectRoutes);
app.use("/management", managementRoutes);
app.use("/college", collegeRoutes);

app.use(errors());

module.exports = app;
