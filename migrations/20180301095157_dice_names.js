
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('dice_names', table => {
  table.increments('id')
  table.string('dice_name')
  table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dice_names')
};
