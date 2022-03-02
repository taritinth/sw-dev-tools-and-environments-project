const { expect } = require("chai");
const mongoose = require("mongoose");
const mongoUnit = require("mongo-unit");

const { getApplications } = require("../../repository/applications.repository");
const mockData = require("../__mock__/data");

describe("apps", () => {
  before(() => mongoose.connect(process.env.MONGO_TEST_URL));
  beforeEach(() => mongoUnit.load(mockData));
  afterEach(() => mongoUnit.drop());

  it(`should find applications`, () => {
    return getApplications({
      status: "hired",
      userId: "620948092ad991e73d2f6012",
    }).then((apps) => {
      expect(apps.length).to.equal(1);
    });
  });
});
