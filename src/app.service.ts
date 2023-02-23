import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { consultarCep, rastrearEncomendas, calcularPrecoPrazo, PrecoPrazoRequest } from 'correios-brasil/dist';

@Injectable()
export class AppService {
   async getCep(params: any) {
    try {
      const cep = params.cep;
      const res = await consultarCep(cep);
      return res;

    } catch (error) {
      throw new HttpException(`Erro ao consultar o CEP: ${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getRastreio(params: any) {
    try {
      const cods =[] 
      cods.push(params.cod);
      const res = await rastrearEncomendas(cods);
      return res[0].eventos;

    } catch (error) {
      throw new HttpException(`Erro ao consultar o código de rastreio: ${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  // calcular preco e prazo de envio
  async getPrecoPrazo(params: any) {
    try {
      let args = {
        sCepOrigem: params.sCepOrigem,
        sCepDestino: params.sCepDestino,
        nVlPeso: params.nVlPeso,
        nCdFormato: params.nCdFormato,
        nVlComprimento: params.nVlComprimento,
        nVlAltura: params.nVlAltura,
        nVlLargura: params.nVlLargura,
        nCdServico: [params.nCdServico],
        nVlDiametro: params.nVlDiametro,
      };

      const res = await calcularPrecoPrazo(args);
      return res;
    } catch (error) {
      throw new HttpException(`Erro ao consultar preço e prazo: ${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
}