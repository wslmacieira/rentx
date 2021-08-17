import { CarsRepositoryInMemory } from "@modules/car/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./listCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("Lis Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });
  it("should be able list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car brand",
      category_id: "category_id",
    });
    const cars = await listCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 110.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car brand2",
      category_id: "category_id",
    });
    const cars = await listCarsUseCase.execute({
      brand: "Car brand",
    });
    expect(cars).toEqual([car]);
  });
});
