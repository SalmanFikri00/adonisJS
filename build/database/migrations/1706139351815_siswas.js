"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = "siswas";
    }
    async up() {
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
            table.timestamps(true, true);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1706139351815_siswas.js.map