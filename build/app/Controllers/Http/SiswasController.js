"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Siswa_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Siswa"));
class SiswasController {
    async store({ request, response }) {
        const { nama, whatsapp, kelas_id } = request.all();
        await Siswa_1.default.create({
            nama,
            whatsapp,
            kelasId: kelas_id,
            dihapus: 0,
        });
        return response.redirect("/kelas");
    }
}
exports.default = SiswasController;
//# sourceMappingURL=SiswasController.js.map