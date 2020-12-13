const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1, service2, service3, service4,
} = require('../config/services.js');

const router = Router();

//1. if user goes to localhost:3000/api/homes/:id/reviews, go ahead and proxy that to localhost:3001/api/homes/:id/reviews
//2. you can also include a pathrewrite because maybe /api/homes/:id/reviews is actually /reviews/:id on server being proxied to
// localhost:3000/api + ['/homes/:id/reviews', '/reviews/images/*] -> localhost:3001
//localhost:3000/api +/homes/:id/reviews -> localhost:3001/api +/homes/:id/reviews

//localhost:3000/api +/reviews/images/wasd.png -> localhost:3001/api +/reviews/images/wasd.png
router.use(service1.api, createProxyMiddleware({ target: service1.url, changeOrigin: true }));

// router.use(service2.api, createProxyMiddleware({ target: service2.url, changeOrigin: true }));
// router.use(service3.api, createProxyMiddleware({ target: service3.url, changeOrigin: true }));
// router.use(service4.api, createProxyMiddleware({ target: service4.url, changeOrigin: true }));

module.exports = router;
