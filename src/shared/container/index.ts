import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CategoriesRepository } from "@modules/car/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/car/infra/typeorm/repositories/SpecificationsRepository";
import { ICategoriesRepository } from "@modules/car/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "@modules/car/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
