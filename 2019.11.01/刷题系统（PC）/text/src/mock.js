// 引入mock
import Mock from "mockjs";

// 登录
Mock.mock("http://127.0.0.1:7777/api/v1/access_token", "post", {
  ok: "@integer(0,1)",
  error: "用户名或密码错误",
  data: {
    token: "dhfigwrfbjhshbjihsfvbi@1231234443213",
    username: "hisss"
  }
});

// 答题分类
Mock.mock("http://127.0.0.1:7777/api/v1/categories", "get", {
  ok: "1",
  "data|4-10": [
    {
      "id|+1": "1",
      cat_name: "@ctitle"
    }
  ]
});

// 开始答题
Mock.mock(
  /http:\/\/127.0.0.1:7777\/api\/v1\/categories\/\d+\/questions/,
  "get",
  {
    ok: "1",
    "data|4-10": [
      {
        title: "@ctitle",
        "options|4": ["@ctitle"]
      }
    ]
  }
);
