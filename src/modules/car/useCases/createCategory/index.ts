import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUsecase } from "./CreateCategoryUseCase";

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUsecase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController, createCategoryUseCase };
