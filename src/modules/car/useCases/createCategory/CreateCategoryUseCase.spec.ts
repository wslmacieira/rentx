import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUsecase } from "./CreateCategoryUseCase";

describe("Create Category", () => {
  let createCategoryUseCase: CreateCategoryUsecase;
  let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUsecase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category desciption Test",
    };

    await createCategoryUseCase.execute(category);

    const categoyCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoyCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category desciption Test",
      };

      await createCategoryUseCase.execute(category);

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
