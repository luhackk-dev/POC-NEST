import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('products', (table) => {
        table.integer('user_id')
        .unsigned().
        references('id').
        inTable('users').
        onDelete('CASCADE');

        table.index('user_id');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('products', (table) => {
        table.dropIndex('user_id');
        table.dropColumn('user_id');
    })
}

