import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
  isTeam: boolean;
  numberOfParticipants: number;
  numberOfEntries: number;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({
    name,
    description,
    isTeam,
    numberOfEntries,
    numberOfParticipants = 1,
  }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError(`Category ${name} already exists`);
    }

    if (!isTeam && numberOfParticipants > 1) {
      throw new AppError(
        `Categories of individuals must contain just one participant`
      );
    }

    if (isTeam && numberOfParticipants === 1) {
      throw new AppError(
        `Categories of teams must contain more than one participant`
      );
    }

    await this.categoriesRepository.create({
      name,
      description,
      isTeam,
      numberOfParticipants,
      numberOfEntries,
    });
  }
}

export { CreateCategoryUseCase };
