"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Kela_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Kela"));
class KelasController {
    async index({ view }) {
        const kelas = await Kela_1.default.query().where({ dihapus: 0 });
        console.log(kelas);
        const listKelas = kelas.map((d, idx) => {
            return { ...d.toJSON(), idx: idx + 1 };
        });
        console.log(listKelas);
        return view.render("kelas.index", {
            kelas: listKelas,
            nama_admin: "Raihan",
        });
    }
    async store({ request, response }) {
        const { nama, kode, guru } = request.all();
        await Kela_1.default.create({
            nama,
            kode,
            namaGuru: guru,
            dihapus: 0,
        });
        return response.redirect("/kelas");
    }
    async show({ view, params }) {
        const id = params.id;
        const kelas = await Kela_1.default.query()
            .where({ dihapus: 0 })
            .andWhere({ id })
            .firstOrFail();
        return view.render("kelas.show", { kelas });
    }
    async update({ request, response, params, session, }) {
        const { nama, kode, guru } = request.all();
        const id = params.id;
        await Kela_1.default.query().where({ id }).update({
            nama,
            kode,
            namaGuru: guru,
            dihapus: 0,
        });
        session.flash({ notifivation: "Data Berhasil Diupdate!" });
        return response.redirect(`/kelas/${id}`);
    }
    async delete({ response, params, session }) {
        const id = params.id;
        await Kela_1.default.query().where({ id }).update({
            dihapus: 1,
        });
        session.flash({ notifivation: "Data Berhasil Diupdate!" });
        return response.redirect(`/kelas`);
    }
}
exports.default = KelasController;
//# sourceMappingURL=KelasController.js.map