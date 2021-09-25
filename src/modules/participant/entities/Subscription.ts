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

import { Participant } from "./Participant";
import { Ticket } from "./Ticket";

@Entity("subscriptions")
class Subscription {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  responsibleName: string;

  @Column()
  responsibleEmail: string;

  @Column()
  responsiblePhone: string;

  @Column()
  status: "approved" | "declined";

  @Column()
  isTeam: boolean;

  @Column()
  teamName: string;

  @ManyToOne((type) => Ticket, (subscriptions) => Subscription, {
    eager: true,
    onDelete: "CASCADE",
  })
  ticket: Ticket;

  @OneToMany((type) => Participant, (subscription) => Subscription)
  participants: Participant[];

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

export { Subscription };
