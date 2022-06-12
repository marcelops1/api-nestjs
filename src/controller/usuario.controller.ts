import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioService } from 'src/services/usuario.service';

@Controller('users')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}
    
    @Post()
    public cria(@Body() usuario) {
        return this.usuarioService.cria(usuario);
    }
}