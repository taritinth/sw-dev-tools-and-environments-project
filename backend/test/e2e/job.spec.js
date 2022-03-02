const { expect } = require("chai");
const request = require("supertest");
const app = require("../../app");
const _sum = require("../../controllers/sum.js");

const mongoose = require("mongoose");
const mongoUnit = require("mongo-unit");

const mockData = require("../__mock__/data");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDkxNjk1YTNmOTEwNmZlZDE1OWFkNiIsImVtYWlsIjoic2xhY2tAZ21haWwuY29tIiwidHlwZSI6ImNvbXBhbnkiLCJpYXQiOjE2NDU5OTExNDN9.u5s7wrK377rFmOw30r7YNqUpgvDbI70emFSM9Ll03WI";

describe("jobs", () => {
  before(() => mongoose.connect(process.env.MONGO_TEST_URL));
  beforeEach(() => mongoUnit.load(mockData));
  afterEach(() => mongoUnit.drop());

  it("should response status 200 and 3 jobs ", async () => {
    const response = await request(app).get("/api/jobs/?query=&type=");
    expect(response.body.length).to.equal(3);
    expect(response.statusCode).to.equal(200);
  });

  it("adds 1 + 2 to equal 3", () => {
    expect(_sum.add(1, 2)).to.equal(3);
  });
});
