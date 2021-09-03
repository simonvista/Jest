const fetchData = require("./async");
test("should return correct todo #1", () => {
  fetchData(1).then((todo) => {
    expect(todo.id).toBe(1);
  });
});
test("should return correct todo #2", async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});
