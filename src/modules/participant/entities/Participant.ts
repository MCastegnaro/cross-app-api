import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Category } from "./Category";
import { Subscription } from "./Subscription";

@Entity("participants")
class Participant {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  code: number;

  @Column()
  affiliate: string;

  @Column()
  city: string;

  @Column()
  tShirtSize: string;

  @ManyToOne((type) => Subscription, (participants) => Participant, {
    eager: true,
    onDelete: "CASCADE",
  })
  subscription: Subscription;

  @ManyToOne((type) => Category, (participants) => Participant, {
    eager: true,
    onDelete: "CASCADE",
  })
  category: Category;

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

export { Participant };
