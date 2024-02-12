import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "siswas";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nama");
      table.integer("whatsapp");

      table
        .integer("kelas_id")
        .unsigned()
        .references("kelas.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.tinyint("dihapus").defaultTo(0);

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
