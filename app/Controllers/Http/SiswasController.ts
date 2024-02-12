import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Siswa from "App/Models/Siswa";

export default class SiswasController {
  public async store({ request, response }: HttpContextContract) {
    const { nama, whatsapp, kelas_id } = request.all();

    await Siswa.create({
      nama,
      whatsapp,
      kelasId: kelas_id,
      dihapus: 0,
    });

    return response.redirect("/kelas");
  }
}
