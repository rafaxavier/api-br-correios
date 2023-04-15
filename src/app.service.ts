import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  consultarCep,
  rastrearEncomendas,
  calcularPrecoPrazo,
} from 'correios-brasil/dist';

@Injectable()
export class AppService {
  async getCep(params: any) {
    try {
      const cep = params.cep;

      // Define a Promise com timeout de 25 segundos
      const res = await Promise.race([
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(consultarCep(cep));
          }, 2000); //Aqui, 1000 é o tempo em milissegundos (1 segundo).
        }),

        new Promise((_resolve, reject) => {
          setTimeout(() => reject(new Error('Tempo limite excedido')), 25000);
        }),
      ]);

      return res;
    } catch (error) {
      throw new HttpException(
        `Erro ao consultar o CEP: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getRastreio(params: any) {
    try {
      const cods = [];
      cods.push(params.cod);
      const res = await rastrearEncomendas(cods);
      return res[0].eventos;
    } catch (error) {
      throw new HttpException(
        `Erro ao consultar o código de rastreio: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getPrecoPrazo(params: any) {
    try {
      const args = {
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
      throw new HttpException(
        `Erro ao consultar preço e prazo: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
