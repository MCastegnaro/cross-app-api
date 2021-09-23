import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: UsersRepository
  ) {}

  async execute({ name, password, email }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      password,
      email,
    });
  }
}

export { CreateUserUseCase };
