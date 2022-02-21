const { Application } = require("../models/applications.model");

const isApplicationEmployer = async (req, res, next) => {
  let { id } = req.params;

  Application.findById(id)
    .then((application) => {
      if (req.user.id == application.companyId.toString()) {
        console.log(`isApplicationEmployer : checked`);
        return next();
      }
      console.log("isApplicationEmployer : false");
      res.status(401).send("UNAUTHORIZED");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

module.exports = {
  isApplicationEmployer,
};
