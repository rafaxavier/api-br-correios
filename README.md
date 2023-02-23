<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

-----------------------------------------------------------------
# Argumentos para a consulta da API (calculo de preco e prazo)
```json
let args = {
  sCepOrigem: '81200100',
  sCepDestino: '21770200',
  nVlPeso: '1',
  nCdFormato: '1',
  nVlComprimento: '20',
  nVlAltura: '20',
  nVlLargura: '20',
  nCdServico: ['04014'], //Array , porém só funciona 1 por vez
  nVlDiametro: '0',
};

calcularPrecoPrazo(args).then(response => {
  console.log(response);
});
```

#### Código do serviço:

- 04014 = SEDEX à vista

- 04065 = SEDEX à vista pagamento na entrega

- 04510 = PAC à vista

- 04707 = PAC à vista pagamento na entrega

- 40169 = SEDEX12 ( à vista e a faturar)

- 40215 = SEDEX 10 (à vista e a faturar)

- 40290 = SEDEX Hoje Varejo

-----------------------------------------------------------------

##### sCepOrigem - String/Number
CEP de Origem. Exemplo: 05311900

##### sCepDestino - String/Number
CEP de Destino

##### nVlPeso - String
Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg

##### nCdFormato - Inteiro
Formato da encomenda (incluindo embalagem)
1 = Formato caixa/pacote
2 = Formato rolo/prisma
3 = Envelope

##### nVlComprimento - Decimal
Comprimento da encomenda (incluindo embalagem), em centímetros

##### nVlAltura - Decimal
Altura da encomenda (incluindo embalagem), em centímetros. Se o formato for envelope, informar zero (0)

##### nVlLargura - Decimal
Largura da encomenda (incluindo embalagem), em centímetros

##### nVlDiametro - Decimal
Diâmetro da encomenda (incluindo embalagem), em centímetros

##### sCdMaoPropria - String
Indica se a encomenda será entregue com o serviço adicional mão própria
S = sim
N = não PADRÃO

##### nVlValorDeclarado - Decimal
Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais

##### sCdAvisoRecebimento - String
Indica se a encomenda será entregue com o serviço adicional mão própria
S = sim
N = não PADRÃO
