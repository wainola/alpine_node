exports.up = function(knex, Promise) {
  let createQuery = `
    CREATE TABLE user 
    (
      id text not null primary key,
      name text not null,
      created_at timestamp default now()
    )
  `;
  return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
  let dropTable = `DROP TABLE user`;
  return knex.raw(dropTable);
};
