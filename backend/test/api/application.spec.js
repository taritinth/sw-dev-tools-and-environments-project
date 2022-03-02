const { expect } = require("chai");
const request = require("supertest");
const app = require("../../app");

const mongoose = require("mongoose");
const mongoUnit = require("mongo-unit");

const mockData = require("../__mock__/data");
const token = require("../__mock__/token");

describe("applications", () => {
  before(() => mongoose.connect(process.env.MONGO_TEST_URL));
  beforeEach(() => mongoUnit.load(mockData));
  afterEach(() => mongoUnit.drop());

  it("should response status 401 unauthorized", async () => {
    const response = await request(app).get("/api/applications?status=");
    expect(response.statusCode).to.equal(401);
  });

  it("should response status 200 ok and list of applications", async () => {
    const response = await request(app)
      .get("/api/applications?status=")
      .set("Authorization", token.TARIT);
    expect(response.body.length).to.equal(1);
    expect(response.statusCode).to.equal(200);
  });

  it("should response status 200 and application detail for owner (user, company)", async () => {
    const response = await request(app)
      .get("/api/applications/621fa436e634d23ac1bd7b78")
      .set("Authorization", token.TESTER_APPLICANT);
    expect(response.body._id).to.equal("621fa436e634d23ac1bd7b78");
    expect(response.statusCode).to.equal(200);
  });

  it("should response status 401 for anyone not owner (user, company)", async () => {
    const response = await request(app)
      .get("/api/applications/621f4e0ce634d23ac1bd7b3b")
      .set("Authorization", token.TESTER_APPLICANT);
    expect(response.statusCode).to.equal(401);
  });
});
