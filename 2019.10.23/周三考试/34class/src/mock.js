import Mock from "mockjs";

Mock.mock("http://127.0.0.1:9999/api/v1/access_token", {
  ok: "@integer(0,1)",
  error: "用户名或者密码不正确",
  data: {
    token: "sdhjsahdk231oyaskdhsaklh"
  }
});

Mock.mock("http://127.0.0.1:9999/api/v1/classes", {
  ok: 1,
  error: "获取数据失败",
  data: [{ id: 1, class_name: "全栈12班" }, { id: 2, class_name: "全栈34班" }]
});

// 模拟老师接口
Mock.mock("http://127.0.0.1:9999/api/v1/classes/1/students", {
  ok: 1,
  // 随机生成1~10个假数据
  "data|1-10": [
    {
      "id|+1": 1,
      student_name: "@cname",
      age: "@integer(1,100)",
      face: "@dataImage('80x80', '非常哈皮')",
      time: "@time(yyyy-MM-dd)"
    }
  ]
});

// 模拟老师接口
Mock.mock("http://127.0.0.1:9999/api/v1/classes/2/students", {
  ok: 1,
  // 随机生成1~10个假数据
  "data|1-10": [
    {
      "id|+1": 1,
      student_name: "@cname",
      age: "@integer(1,100)",
      face: "@dataImage('80x80', '非常哈皮')",
      time: "@time(yyyy-MM-dd)"
    }
  ]
});
