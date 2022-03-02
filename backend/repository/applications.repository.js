const { Application } = require("../models/applications.model");
const { ObjectId } = require("mongoose").Types;

const getApplications = ({ status, userId }) => {
  return Application.find({
    $or: [
      {
        companyId: new ObjectId(userId),
      },
      {
        userId: new ObjectId(userId),
      },
    ],
    $and: [{ status: new RegExp(status, "i") }],
  })
    .populate("job")
    .populate("company", "-password -createdAt -updatedAt")
    .populate("user", "-password -createdAt -updatedAt")
    .sort({ createdAt: -1 });
};

module.exports = {
  getApplications,
};
