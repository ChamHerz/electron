const server = require("./server");
const { API_VERSION, PORT } = require("./config");

server.listen(PORT, () => {
  console.log("#########################");
  console.log("####### API REST ########");
  console.log("#########################");
  console.log(`http://localhost:/${PORT}/${API_VERSION}/`);
});
