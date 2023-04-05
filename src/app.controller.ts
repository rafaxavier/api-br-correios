import { Controller, Get, Param, Query } from '@nestjs/common';
import { PrecoPrazoRequest } from 'correios-brasil/dist';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/v1/busca-cep')
  getCep(@Query() params: string) {
    return this.appService.getCep(params);
  }

  @Get('api/v1/rastreio')
  getRastreio(@Query() params: string) {
    return this.appService.getRastreio(params);
  }

  @Get('api/v1/calcula-preco-prazo')
  getPrecoPrazo(@Query() params: PrecoPrazoRequest) {
    return this.appService.getPrecoPrazo(params);
  }
}
