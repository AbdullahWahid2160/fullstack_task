const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/proxy", // Proxy requests starting with /api
    createProxyMiddleware({
      target: "http://localhost:6000", // Your backend server URL
      changeOrigin: true, // Needed for virtual hosted sites
      pathRewrite: {
        "^/proxy": "", // Remove /api from the request path
      },
    })
  );
};
