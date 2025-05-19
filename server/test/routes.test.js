const app = require("../app");
const request = require("supertest");

describe("genereal test", () => {
  it("test home page", async () => {
    const { body, statusCode } = await request(app).get("/");
    expect(statusCode).toBe(200);
    expect(body).toEqual({ message: "Welcome to my simple api" });
  });

  it("should get list of users", async () => {
    const { body, statusCode } = await request(app).get("/api/users");
    expect(statusCode).toBe(200);
    expect(body.length).toBeGreaterThan(0);
  });

  it("should test for list of products", async () => {
    const { body, statusCode } = await request(app).get("/api/products");
    expect(statusCode).toBe(200);
    expect(body.length).toBeGreaterThan(0);
  });

  it("should test for zen quotes", async () => {
    const { body, statusCode } = await request(app).get("/api/zenQuotes");
    expect(statusCode).toBe(200);
    expect(body.length).toBeGreaterThan(0);
  });

  it("should test for zen products", async () => {
    const { body, statusCode } = await request(app).get("/api/products");
    expect(statusCode).toBe(200);
    // expect(body.length).toBeGreaterThan(0);
  });

  it("should test for fake posts", async () => {
    const { body, statusCode } = await request(app).get("/api/fake-posts");
    expect(statusCode).toBe(200);
    expect(body.length).toBeGreaterThan(0);
  });

  it("should test for fake posts", async () => {
    const { body, statusCode } = await request(app).get("/api/images");
    expect(statusCode).toBe(200);
    expect(body.length).toBeGreaterThan(0);
  });
});
