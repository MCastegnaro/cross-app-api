import { getRepository, Repository } from "typeorm";

import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { Ticket } from "../../entities/Ticket";
import { ITicketsRepository } from "../ITicketsRepository";

class TicketsRepository implements ITicketsRepository {
  private repository: Repository<Ticket>;

  constructor() {
    this.repository = getRepository(Ticket);
  }
  async create({
    name,
    price,
    quantity,
    endDate,
    startDate,
    category,
  }: ICreateTicketDTO): Promise<void> {
    const ticket = this.repository.create({
      name,
      price,
      quantity,
      endDate,
      startDate,
      category,
    });

    await this.repository.save(ticket);
  }

  async findByName(name: string): Promise<Ticket> {
    const ticket = await this.repository.findOne({ name });

    return ticket;
  }

  async list(): Promise<Ticket[]> {
    const tickets = await this.repository.find();

    return tickets;
  }
}

export { TicketsRepository };
