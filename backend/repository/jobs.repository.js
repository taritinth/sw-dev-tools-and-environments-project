const { Job } = require("../models/jobs.model");

const getJobs = ({ title, type }) => {
  return Job.find({
    $or: [
      {
        title: new RegExp(title, "i"),
        type: new RegExp(type, "i"),
      },
    ],
  })
    .populate("company", "-password")
    .sort({ createdAt: -1 });
};

module.exports = {
  getJobs,
};
