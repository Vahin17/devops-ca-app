const request = require("supertest");
const app = require("../src/app");

describe("API tests", () => {
  it("GET /health returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  it("GET / returns a message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBeDefined();
  });
});
