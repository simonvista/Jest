const sum = require("./sum");

// test or it
it("test sum()", () => {
  const res = sum(1, 2);
  expect(res).toBe(3);
});
