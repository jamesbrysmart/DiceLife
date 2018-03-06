
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dice_names').del()
    .then(function () {
      // Inserts seed entries
      return knex('dice_names').insert([
        {id: 1, dice_name: 'Friday Night', user_id: null, active: true},  //user_id null means available to all,
        {id: 2, dice_name: 'Weekend Plans', user_id: null, active: true},
        {id: 3, dice_name: 'Dinner Plans', user_id: null, active: true }
      ]);
    });
};
