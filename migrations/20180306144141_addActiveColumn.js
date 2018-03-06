
exports.up = function(knex, Promise) {
    return knex.schema.table('dice_names', function (table) {
        table.boolean('active')
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('dice_names', function (table) {
      table.dropColumn('active')
  })
};
