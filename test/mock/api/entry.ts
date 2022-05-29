require("@babel/register")({
  extensions: [".ts"],
  presets: ["@babel/preset-typescript"],
});

const server = require("./server.ts").default;
const PORT = 5001;

server.listen(PORT, function () {
  console.log("%s listening %s", server.name, server.url);
});
