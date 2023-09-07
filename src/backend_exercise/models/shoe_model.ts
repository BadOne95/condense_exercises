import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  Unique,
  OneToMany,
} from "typeorm";
import { Shoe } from "./shoe";

@Entity()
@Unique(["name", "material"])
export class ShoeModel {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn()
  public created: Date;

  @UpdateDateColumn()
  public updated: Date;

  @Index()
  @Column()
  public name: string;

  @Column()
  public material: string;

  @OneToMany(() => Shoe, (shoe) => shoe.shoeModel, {
    cascade: true,
  })
  public shoe: Shoe[];
}
