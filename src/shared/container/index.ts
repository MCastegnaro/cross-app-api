import { container } from "tsyringe";

import { UsersRepository } from "../../modules/account/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/account/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/participant/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/participant/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
