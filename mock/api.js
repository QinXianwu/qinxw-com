var Mock = require("mockjs");

Mock.mock("/login", "post", (req) => {
  const { password, username } = JSON.parse(req.body);
  if (username === "user" && password === "pass") {
    return {
      success: true,
    };
  } else {
    return {
      success: false,
    };
  }
});
