import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Category } from "./Category";
import { Subscription } from "./Subscription";

@Entity("tickets")
class Ticket {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  quantity: number;

  @ManyToOne((type) => Category, (tickets) => Ticket, {
    eager: true,
    onDelete: "CASCADE",
  })
  category: Category;

  @OneToMany((type) => Subscription, (ticket) => Ticket)
  subscriptions: Subscription[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Ticket };
