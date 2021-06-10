import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../../../../modules/car/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../../../../modules/car/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../../../../modules/car/useCases/listCategories/ListCategoriesController";
import { ensureAdmin } from "../middleware/ensureAdmin";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle
);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  ensureAuthenticated,
  ensureAdmin,
  importCategoryController.handle
);

export { categoriesRoutes };
