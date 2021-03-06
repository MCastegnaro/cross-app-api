import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../entities/Category";

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({
    name,
    description,
    isTeam,
    numberOfEntries,
    numberOfParticipants,
  }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository };
