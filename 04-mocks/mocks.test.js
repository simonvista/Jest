const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};
// const mock=x=>x+42
test("mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
  expect(mockCallback.mock.results[1].value).toBe(43);
});
test("mock return value", () => {
  const mock = jest.fn();
  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("Hello");
  const res1 = mock(); //true
  const res2 = mock(); //false
  const res3 = mock(); //Hello
  expect(res1).toBe(true);
  expect(res2).toBe(false);
  expect(res3).toBe("Hello");
});

const axios = require("axios");

const fetchData = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  console.log(res);
  return res.data;
};
test("mock axios.get()", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "get 1m subs",
    },
  });
  const res = await fetchData(1);
  expect(res.todo).toBe("get 1m subs");
});
