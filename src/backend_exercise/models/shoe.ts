import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ShoeModel } from "./shoe_model";
import { ShoeToCategory } from "./shoe_category";

@Entity()
@Unique(["modelId", "color", "size"])
export class Shoe {
  @PrimaryGeneratedColumn()
  public id: number;

  @CreateDateColumn()
  public created: Date;

  @UpdateDateColumn()
  public updated: Date;

  @Column()
  public color: string;

  @Column()
  public size: string;

  @ManyToOne(() => ShoeModel, (shoeModel) => shoeModel.shoe, {
    onDelete: "CASCADE",
  })
  public shoeModel: ShoeModel;

  @OneToMany(() => ShoeToCategory, (shoeToCategory) => shoeToCategory.shoe, {
    cascade: true,
  })
  public shoeToCategory: ShoeToCategory[];
}
