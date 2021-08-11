import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
  isTeam: boolean;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description, isTeam }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
