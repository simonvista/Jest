const axios = require("axios");

const fetchData = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  //   console.log(res);
  //   return res;
  return res.data;
};
fetchData(1);
module.exports = fetchData;
