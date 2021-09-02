const sum = require("./sum");

// test or it
//group test blocks
describe("group tests", () => {
  it("test sum()", () => {
    const res = sum(1, 2);
    expect(res).toBe(3);
  });
  test("test obj", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});
