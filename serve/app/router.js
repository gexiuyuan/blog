'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/default', controller.default.home.index);
  router.get('/default/getArticleList',controller.default.home.getArticleList)
  router.get('/default/getArticleById/:id',controller.default.home.getArticleById)
  router.get('/default/getTypeInfo',controller.default.home.getTypeInfo)
  router.get('/default/getListById/:id',controller.default.home.getListById)
  /*******************************************************************************/
  var adminauth = app.middleware.adminauth()
  router.get('/admin/index',adminauth,controller.admin.main.index)
  router.post('/admin/checkOpenId',adminauth,controller.admin.main.checkLogin)
  router.get('/admin/getTypeInfo',adminauth ,controller.admin.main.getTypeInfo)
  router.post('/admin/addArticle',controller.admin.main.addArticle)
  router.post('/admin/updateArticle',controller.admin.main.updateArticle)
  router.get('/admin/getArticleList',controller.admin.main.getArticleList)

};
