
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('previous_dice_rolls').del()
    .then(function () {
      // Inserts seed entries
      return knex('previous_dice_rolls').insert([
        {prid: 1, user_id: 1, roll_score: 3, dice_name_id: 1, dice_option_id: 4},
        {prid: 2, user_id: 1, roll_score: 7, dice_name_id: 1, dice_option_id: 1},
        {prid: 3, user_id: 1, roll_score: 12, dice_name_id: 1, dice_option_id: 5}
      ]);
    });
};
