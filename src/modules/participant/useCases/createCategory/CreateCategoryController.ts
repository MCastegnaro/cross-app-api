import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description, isTeam, numberOfParticipants, numberOfEntries } =
      request.body;

    this.createCategoryUseCase.execute({
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
