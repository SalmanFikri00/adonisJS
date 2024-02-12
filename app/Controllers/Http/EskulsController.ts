import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Eskul from 'App/Models/Eskul'

export default class EskulsController {
  public async index({view}: HttpContextContract) { 
    const eskul = await Eskul.all(); 
  return view.render("eskul.index", {eskul: eskul});
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const {nama_eskul, nama_siswa, kelas } = request.all();

    await Eskul.create({
      nama_eskul,
      nama_siswa,
      kelas: kelas,
      dihapus: 0,
    });

    return response.redirect("/eskul");
  }