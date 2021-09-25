import { Category } from "../entities/Category";

interface ICreateTicketDTO {
  name: string;
  price: number;
  category: Category;
  quantity: number;
  startDate: Date;
  endDate: Date;
}
export { ICreateTicketDTO };
