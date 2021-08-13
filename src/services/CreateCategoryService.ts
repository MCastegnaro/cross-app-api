import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
  isTeam: boolean;
  numberOfParticipants: number;
  numberOfEntries: number;
}

class CreateCategoryService {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({
    name,
    description,
    isTeam,
    numberOfEntries,
    numberOfParticipants = 1,
  }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists`);
    }

    if (isTeam && numberOfParticipants === 1) {
      throw new Error(
        `Categories of teams must contain more than one participant`
      );
    }

    this.categoriesRepository.create({
      name,
      description,
      isTeam,
      numberOfParticipants,
      numberOfEntries,
    });
  }
}

export { CreateCategoryService };
