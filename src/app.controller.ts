import { Controller, Get, Query } from '@nestjs/common';
import { PrecoPrazoRequest } from 'correios-brasil/dist';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('busca-cep')
  getCep(@Query() params: string) {
    return this.appService.getCep(params);
  }

  @Get('rastreio')
  getRastreio(@Query() params: string) {
    return this.appService.getRastreio(params);
  }

  @Get('calcula-preco-prazo')
  getPrecoPrazo(@Query() params: PrecoPrazoRequest) {
    return this.appService.getPrecoPrazo(params);
  }
}
