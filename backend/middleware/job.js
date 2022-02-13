const { Job } = require("../models/jobs.model");

const isCompany = async (req, res, next) => {
  let type = req.user.type;
  if (type === "company") {
    console.log(`isCompany: checked`);
    return next();
  }
  console.log("isCompany : false");
  res.status(401).send("UNAUTHORIZED: isCompany ==> false");
};

const isJobEmployer = async (req, res, next) => {
  let { id } = req.params;

  Job.findById(id)
    .then((job) => {
      if (req.user.id == job.company.toString()) {
        console.log(`isJobEmployer: checked`);
        return next();
      }
      console.log("isJobEmployer : false");
      res.status(401).send("UNAUTHORIZED : isJobEmplyer => false");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
module.exports = {
  isJobEmployer,
  isCompany,
};
