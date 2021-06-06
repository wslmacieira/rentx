import { CarsRepositoryInMemory } from "@modules/car/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "@modules/car/useCases/createCar/CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });
  it("shoud be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });
  });
});
