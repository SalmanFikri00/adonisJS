import { DateTime } from "luxon";
import { BaseModel, HasMany, column, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Siswa from "./Siswa";

export default class Kela extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nama: string;

  @column()
  public kode: string;

  @column()
  public namaGuru: string;

  @column()
  public dihapus: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Siswa, {
    localKey: "id",
    foreignKey: "kelasId",
  })
  public siswa: HasMany<typeof Siswa>;
}
