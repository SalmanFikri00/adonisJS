// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Itc from "App/Models/Itc";


export default class ItcsController {
    public async index({ view, auth }: HttpContextContract) {
        const Itclub = await Itc.query().where({ dihapus: 0 });
    
        const user = await auth?.user?.toJSON();
        console.log(user);
    
        const listItc = Itclub.map((d, idx) => {
            return { ...d.toJSON(), idx: idx + 1 };
        });

    
        return view.render("itc/index", {
            Itc: listItc,
            nama_pembimbing: "Salman Fikri",
        });
    }
    public async store({ request, response }: HttpContextContract) {
        const { nama, jumlah, deskripsi } = request.all();
    
        await Itc.create({
        nama,
        jumlah,
        deskripsi: deskripsi,
        dihapus: 0,
        });
    
        return response.redirect("/itc");
    }
    public async show({ view, params }: HttpContextContract) {
        const id = params.id;
        const Itclub = await Itc.query()
        .where({ dihapus: 0 })
        .andWhere({ id })
        .firstOrFail();
    
        return view.render("itc.show", { Itclub });
    }
    public async update({
        request,
        response,
        params,
        session,
    }: HttpContextContract) {
        const { nama, jumlah, deskripsi } = request.all();
        const id = params.id;
    
        await Itc.query().where({ id }).update({
            nama,
            jumlah,
            deskripsi: deskripsi,
            dihapus: 0,
        });
        session.flash({ notifivation: "Data Berhasil Diupdate!" });
    
        return response.redirect(`/itc/${id}`);
    }
    
    public async delete({ response, params, session }: HttpContextContract) {
        const id = params.id;
    
        await Itc.query().where({ id }).update({
            dihapus: 1,
        });
        session.flash({ notifivation: "Data Berhasil Diupdate!" });
    
        return response.redirect(`/itc`);
    }
}
