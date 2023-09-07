import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
  Index,
} from "typeorm";
import { ShoeToCategory } from "./shoe_to_category";

@Entity()
@Unique(["name"])
export class Category {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn()
  public created: Date;

  @UpdateDateColumn()
  public updated: Date;

  @Column()
  public name: string;

  @Index()
  @Column()
  public path: string;

  @Column()
  public weight: number;

  @OneToMany(
    () => ShoeToCategory,
    (shoeToCategory) => shoeToCategory.category,
    {
      cascade: true,
    }
  )
  public shoeToCategory: ShoeToCategory[];
}
