import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Participant } from "./Participant";
import { Ticket } from "./Ticket";

@Entity("categories")
class Category {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  isTeam: boolean;

  @Column()
  numberOfParticipants: number;

  @Column()
  numberOfEntries: number;

  @OneToMany((type) => Ticket, (category) => Category)
  tickets: Ticket[];

  @OneToMany((type) => Participant, (category) => Category)
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

export { Category };
