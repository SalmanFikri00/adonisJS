import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Eskul extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public namaEskul: string;

  @column()
  public namaSiswa: string;

  @column()
  public kelas: string;
  
  @column()
  public absen: number;
  
  @column()
  public dihapus: number;
}
