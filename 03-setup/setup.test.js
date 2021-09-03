let animals = ["elephant", "zebra", "bear", "tiger"];
describe("animals array", () => {
  animals = ["elephant", "zebra", "bear", "tiger"];
  test("should add animal to the end of array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });
  test("should add animal to the beginning of array", () => {
    animals = ["elephant", "zebra", "bear", "tiger"];
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });
  test("should have initial length of 4", () => {
    animals = ["elephant", "zebra", "bear", "tiger"];
    expect(animals.length).toBe(4);
  });
});
