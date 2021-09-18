import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/participant/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/participant/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
