import { Router } from "express";

import { CreateSpecificationController } from "../../../../modules/car/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
