import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import createCategoryController from "../modules/participant/useCases/createCategory";
import { listCategoriesController } from "../modules/participant/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
