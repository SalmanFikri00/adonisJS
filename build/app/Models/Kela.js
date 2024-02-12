"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Siswa_1 = __importDefault(require("./Siswa"));
class Kela extends Orm_1.BaseModel {
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Kela.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Kela.prototype, "nama", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Kela.prototype, "kode", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Kela.prototype, "namaGuru", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Kela.prototype, "dihapus", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Kela.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Kela.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Siswa_1.default, {
        localKey: "id",
        foreignKey: "kelasId",
    }),
    __metadata("design:type", Object)
], Kela.prototype, "siswa", void 0);
exports.default = Kela;
//# sourceMappingURL=Kela.js.map