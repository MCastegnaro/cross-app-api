import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, isTeam, numberOfParticipants, numberOfEntries } =
      request.body;

    await this.createCategoryUseCase.execute({
      name,
      description,
      isTeam,
      numberOfParticipants,
      numberOfEntries,
    });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
