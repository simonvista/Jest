let animals = ["elephant", "zebra", "bear", "tiger"];
// beforeAll(() => {
//   console.log("before all tests");
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });
beforeEach(() => {
  console.log("before each test");
  animals = ["elephant", "zebra", "bear", "tiger"];
});
// afterEach(() => {
//   console.log("after each test");
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });
// afterAll(() => {
//   console.log("after all tests");
//   animals = ["elephant", "zebra", "bear", "tiger"];
// });
describe("animals array", () => {
  //   animals = ["elephant", "zebra", "bear", "tiger"];
  test("should add animal to the end of array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });
  test("should add animal to the beginning of array", () => {
    // animals = ["elephant", "zebra", "bear", "tiger"];
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });
  test("should have initial length of 4", () => {
    // animals = ["elephant", "zebra", "bear", "tiger"];
    expect(animals.length).toBe(4);
  });
});
describe("test something else", () => {
  // only() will run for current test case only and skip other test cases
  test.only("true should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
