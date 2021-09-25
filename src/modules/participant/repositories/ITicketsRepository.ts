import { ICreateTicketDTO } from "../dtos/ICreateTicketDTO";
import { Ticket } from "../entities/Ticket";

interface ITicketsRepository {
  findByName(name: string): Promise<Ticket>;
  list(): Promise<Ticket[]>;
  create({
    name,
    price,
    quantity,
    endDate,
    startDate,
    categoryName,
  }: ICreateTicketDTO): Promise<void>;
}

export { ITicketsRepository };
