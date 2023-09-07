import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  ManyToOne,
} from "typeorm";
import { Shoe } from "./shoe";
import { Category } from "./category";

@Entity()
@Unique(["shoeId", "categoryId"])
export class ShoeToCategory {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn()
  public created: Date;

  @UpdateDateColumn()
  public updated: Date;

  @Column()
  public shoeId: number;

  @Column()
  public categoryId: number;

  @Column()
  public path: string;

  @Column()
  public weight: number;

  @ManyToOne(() => Shoe, (shoe) => shoe.shoeToCategory, {
    onDelete: "CASCADE",
  })
  public shoe: Shoe;

  @ManyToOne(() => Category, (category) => category.shoeToCategory, {
    onDelete: "CASCADE",
  })
  public category: Category;
}
