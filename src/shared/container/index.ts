import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/car/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/car/repositories/implementations/CategoriesRepository";

// IcategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
