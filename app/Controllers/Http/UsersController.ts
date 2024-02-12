import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import Hash from "@ioc:Adonis/Core/Hash";
import Database from "@ioc:Adonis/Lucid/Database";

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async login({
    auth,
    request,
    response,
    session,
  }: HttpContextContract) {
    const { email, password } = request.all();

    await auth.attempt(email, password);
    session.put("authenticated", true);
    return response.redirect("/kelas");
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
