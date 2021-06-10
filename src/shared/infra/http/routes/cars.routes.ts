import { Router } from "express";

import { CreateCarController } from "@modules/car/useCases/createCar/CreateCarController";

import { ensureAdmin } from "../middleware/ensureAdmin";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const carRoutes = Router();

const createCarController = new CreateCarController();

carRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);

export { carRoutes };
