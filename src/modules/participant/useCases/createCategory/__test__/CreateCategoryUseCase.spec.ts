import { AppError } from "../../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "../CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should BE able to create a new category", async () => {
    const category = {
      name: "Category test",
      description: "Description category test",
      isTeam: false,
      numberOfParticipants: 1,
      numberOfEntries: 30,
    };

    await createCategoryUseCase.execute(category);

    const individualcategoryCreated =
      await categoriesRepositoryInMemory.findByName(category.name);

    expect(individualcategoryCreated).toHaveProperty("id");
  });

  it("should NOT be able to create a new category WITH name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category test",
        description: "Description category test",
        isTeam: false,
        numberOfParticipants: 1,
        numberOfEntries: 30,
      };

      await createCategoryUseCase.execute(category);

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should NOT be able to create a new individual category, if is a team", async () => {
    expect(async () => {
      const category = {
        name: "Category individual test",
        description: "Description category individual test",
        isTeam: true,
        numberOfParticipants: 1,
        numberOfEntries: 30,
      };

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should NOT be able to create a new team category, if is a individual", async () => {
    expect(async () => {
      const category = {
        name: "Category individual test",
        description: "Description category individual test",
        isTeam: false,
        numberOfParticipants: 3,
        numberOfEntries: 30,
      };

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
