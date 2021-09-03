// Jest uses "matchers" to let you test values in different ways.
const sum = require("./sum");

// test or it
//group test blocks
describe("tests group", () => {
  it("test sum()", () => {
    const res = sum(1, 2);
    expect(res).toBe(3);
  });
  test("test obj", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});
// in JS, if("") | if(null) | if(undefined) | if(0) -> falsey, if("sdfg5") -> truthy
describe("truthy or falsy #1", () => {
  it("null", () => {
    const n = null; //null is not undefined!!!
    // multi-expects
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });
});
describe("truthy or falsy #2", () => {
  it("null", () => {
    const n = 0; //0 is defined!!!
    // multi-expects
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
  });
});
describe("truthy or falsy #3", () => {
  it("null", () => {
    const n = ""; //"" is defined!!!
    // multi-expects
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).not.toBeUndefined();
  });
});
describe("numbers", () => {
  test("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(5);
  });
  test("add floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.29999999999999);
  });
});
describe("strings", () => {
  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});
describe("arrays", () => {
  test("should ", () => {
    const shoppingList = [
      "diapers",
      "kleenex",
      "trash bags",
      "papertowels",
      "milk",
    ];
    expect(shoppingList).toContain("milk");
  });
});
function compileCode() {
  throw new Error("Wrong JDK");
}
describe("exceptions", () => {
  test("code fails as expected ", () => {
    expect(() => compileCode()).toThrow();
    expect(() => compileCode()).toThrow(Error);
    expect(() => compileCode()).toThrow("Wrong JDK");
  });
});
