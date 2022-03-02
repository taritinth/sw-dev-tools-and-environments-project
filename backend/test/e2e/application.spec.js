const { expect } = require("chai");
const request = require("supertest");
const app = require("../../app");

const mongoose = require("mongoose");
const mongoUnit = require("mongo-unit");

const mockData = require("../__mock__/data");

describe("applications", () => {
  before(() => mongoose.connect(process.env.MONGO_TEST_URL));
  beforeEach(() => mongoUnit.load(mockData));
  afterEach(() => mongoUnit.drop());

  it("should response status 401 unauthorized", async () => {
    const response = await request(app).get("/api/applications?status=");
    expect(response.statusCode).to.equal(401);
  });

  it("should response status 200 ok and 1 application", async () => {
    const response = await request(app)
      .get("/api/applications?status=")
      .set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDk0ODA5MmFkOTkxZTczZDJmNjAxMSIsImVtYWlsIjoidGFyaXRAZ21haWwuY29tIiwidHlwZSI6InVzZXIiLCJpYXQiOjE2NDYyMTg3NjB9.b0uMAxTHCllnt7fTYWPTHsfpLj01falnK_rcOCgAYLQ"
      );
    expect(response.body.length).to.equal(1);
    expect(response.statusCode).to.equal(200);
  });
});
