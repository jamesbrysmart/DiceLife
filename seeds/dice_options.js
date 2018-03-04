
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dice_options').del()
    .then(function () {
      // Inserts seed entries
      return knex('dice_options').insert([
        {id: 1, dice_option: 'Roll again', position: 1, dice_names_id: 1},
        {id: 2, dice_option: 'Watch a movie', position: 2, dice_names_id: 1},
        {id: 3, dice_option: 'Go out for dinner', position: 3, dice_names_id: 1},
        {id: 4, dice_option: 'Call your parents and tell them you love them', position: 4, dice_names_id: 1},
        {id: 5, dice_option: 'Buy a ticket to something and go', position: 5, dice_names_id: 1},
        {id: 6, dice_option: 'Visit family or friends', position: 1, dice_names_id: 2},
        {id: 7, dice_option: 'Go for a swim', position: 2, dice_names_id: 2},
        {id: 8, dice_option: 'Buy a new houseplant', position: 3, dice_names_id: 2},
        {id: 9, dice_option: 'Take a pottery class', position: 4, dice_names_id: 2},
        {id: 10, dice_option: 'Sleep under the stars', position: 5, dice_names_id: 2},
        {id: 11, dice_option: 'Get takeaway', position: 1, dice_names_id: 3},
        {id: 12, dice_option: 'Cook something from scratch', position: 2, dice_names_id: 3},
        {id: 13, dice_option: 'Go to your favourite restaurant', position: 3, dice_names_id: 3},
        {id: 14, dice_option: "Go to a new restaurant, order something you've never had before", position: 4, dice_names_id: 3},
        {id: 15, dice_option: 'Invite everyone over, cook for whoever turns up', position: 5, dice_names_id: 3}
      ]);
    });
};
