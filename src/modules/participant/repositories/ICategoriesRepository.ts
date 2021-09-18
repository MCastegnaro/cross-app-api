import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
  isTeam: boolean;
  numberOfParticipants: number;
  numberOfEntries: number;
}

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

export { ICategoriesRepository, ICreateCategoryDTO };
