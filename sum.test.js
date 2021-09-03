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
