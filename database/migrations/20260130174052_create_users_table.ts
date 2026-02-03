import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('yearAt').defaultTo(knex.fn.now());
  })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

