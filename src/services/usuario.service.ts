import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioService {

    private usuario = [];

    public cria(usuario) {
        this.usuario.push(usuario);

        return usuario;
    }
}