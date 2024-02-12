import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Kela from "./Kela";

export default class Siswa extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nama: string;

  @column()
  public whatsapp: string;

  @column()
  public dihapus: number;

  @column()
  public kelasId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Kela, {
    localKey: "id",
    foreignKey: "kelasId",
  })
  public kelas: BelongsTo<typeof Kela>;
}
