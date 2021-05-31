import { Router } from "express";

import { SpecificationsRepository } from "../modules/car/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/car/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateSpecificationService(
    specificationsRepository
  );

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
