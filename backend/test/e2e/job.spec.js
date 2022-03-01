const request = require("supertest");
const app = require("../../app");
const _sum = require("../../controllers/sum.js");

const tempJob = {
  _id: "620917d3a3f9106fed159b0c",
  company: {
    _id: "62091695a3f9106fed159ad6",
    fullname: "Slack",
    email: "slack@gmail.com",
    phone: "0801234567",
    type: "company",
    website: "",
    position: "",
    education: "",
    jobType: "",
    createdAt: "2022-02-13T14:32:53.648Z",
    updatedAt: "2022-02-13T14:35:56.034Z",
    __v: 0,
    profileImg:
      "https://jobjab-bucket-1.s3.ap-southeast-1.amazonaws.com/profile/62091695a3f9106fed159ad6_1644762901582.webp",
  },
  title: "Project Manager",
  overview: "We are looking for part-time PM.",
  description:
    "<h2><u>หน้าที่ความรับผิดชอบ</u></h2><p>- ออกแบบและพัฒนา API สำหรับ integrated ระหว่าง System</p><p>- ออกแบบและพัฒนา Mobile Application</p><p>- แก้ไข software defects และปรับปรุงพัฒนา Applications</p><p>- ออกแบบ พัฒนาระบบ และดูแลโครงการสารสนเทศที่สำคัญของบริษัท ตลอดจนการให้ข้อเสนอแนะแนวคิดใหม่ๆ เพื่อการพัฒนาปรับปรุงผลิตภัณฑ์และบริการ</p><p>- คิดค้นเทคโนโลยีและเครื่องมือใหม่ๆ เพื่อนำมาใช้ในการพัฒนาผลิตภัณฑ์ บริการ และระบบสารสนเทศของบริษัท</p><p>- ศึกษาและรวบรวมข้อมูล เพื่อใช้ออกแบบและพัฒนาระบบของฝ่ายงานต่างๆ เพื่อการดำเนินธุรกิจของบริษัท</p>",
  type: "parttime",
  dueDate: null,
  status: true,
  salary: true,
  createdAt: "2022-02-13T14:38:11.302Z",
  updatedAt: "2022-02-13T14:38:11.302Z",
  __v: 0,
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDkxNjk1YTNmOTEwNmZlZDE1OWFkNiIsImVtYWlsIjoic2xhY2tAZ21haWwuY29tIiwidHlwZSI6ImNvbXBhbnkiLCJpYXQiOjE2NDU5OTExNDN9.u5s7wrK377rFmOw30r7YNqUpgvDbI70emFSM9Ll03WI";

describe("jobs", () => {
  test("response 200", async () => {
    const result = await request(app).get("/api/jobs/?query=&type=");
    expect(result.statusCode).toBe(200);
  });

  // test("response 200", async () => {
  //   const result = await request(app)
  //     .post("/api/jobs")
  //     .set("Authorization", "Bearer " + token)
  //     .send(tempJob);
  //   console.log(result);
  //   expect(result.statusCode).toBe(200);
  // });

  test("adds 1 + 2 to equal 3", () => {
    expect(_sum.add(1, 2)).toBe(3);
  });
});
