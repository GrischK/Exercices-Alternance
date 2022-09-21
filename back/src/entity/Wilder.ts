import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Grade from "./Grade";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, length: 100, type: "varchar" })
  city: string;

  @Column({ nullable: true, type: "varchar" })
  img: string;

  @Column({ nullable: true, length: 500, type: "text" })
  bio: string;

  @OneToMany(() => Grade, (g) => g.wilder)
  grades: Grade[];
}

export default Wilder