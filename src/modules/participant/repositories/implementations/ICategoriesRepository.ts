import { Category } from "../../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
  isTeam: boolean;
  numberOfParticipants: number;
  numberOfEntries: number;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({
    name,
    description,
    isTeam,
    numberOfEntries,
    numberOfParticipants,
  }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
