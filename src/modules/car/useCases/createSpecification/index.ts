import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUsecase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUsecase = new CreateSpecificationUsecase(
  specificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUsecase
);

export { createSpecificationController };
