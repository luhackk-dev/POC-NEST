import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Knex, knex } from 'knex';
import config from '../../knexfile';

@Injectable()
export class KnexService implements OnModuleInit, OnModuleDestroy {
  public knex: Knex;

  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    this.knex = knex(config[environment]);
  }

  async onModuleInit() {
    // Knex já está conectado quando instanciado
  }

  async onModuleDestroy() {
    await this.knex.destroy();
  }
}
