"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get("/", async ({ view }) => {
    return view.render("welcome");
});
Route_1.default.get("/kelas", "KelasController.index");
Route_1.default.get("/kelas/:id", "KelasController.show").as("kelas.detail");
Route_1.default.post("/kelas/create", "KelasController.store").as("kelas.store");
Route_1.default.post("/kelas/update/:id", "KelasController.update").as("kelas.update");
Route_1.default.get("/kelas/delete/:id", "KelasController.delete").as("kelas.delete");
Route_1.default.post("/siswa/create", "KelasController.store").as("siswa.store");
Route_1.default.post("/siswa/update/:id", "KelasController.update").as("siswa.update");
Route_1.default.get("/siswa/delete/:id", "KelasController.delete").as("siswa.delete");
//# sourceMappingURL=routes.js.map