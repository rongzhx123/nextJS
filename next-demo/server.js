const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production"; //判断是否开发环境
const app = next({ dev }); //创建一个next的app
const handle = app.getRequestHandler(); //请求处理

app
  .prepare()
  .then(() => {
    const server = express();

    //用来进行路径匹配
    server.get("/article/:articleId", (req, res) => {
      console.log(req.params)
      return app.render(req, res, '/article', { articleId: req.params.articleId })
    });

    server.get("/post/:pid/:name", (req, res) => {
      console.log(req.params)
      return app.render(req, res, `/post/:${req.params.pid}`, { name: req.params.name })
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });