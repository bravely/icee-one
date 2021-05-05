/* Today we're going to build a Javascript interface for filtering Jsonb rows in Postgres.

   PostgreSQL is a popular open-source relational database, with specialized query support
   for JSON, in the form of Jsonb columns. A normal filtering query might look like:

   SELECT * FROM "posts" WHERE "author_id" = 42;

   Their support for Jsonb allows them to be queried like any other
   column, but they have their own unique syntax for accessing values. Some of that syntax
   includes:

   "data"->'title' // This accesses the "title" property of the "data" Jsonb column.
   "data"->>'title' // This also accesses it, but returns the result as text, which is optimal for comparison with values outside the Database.

   You would then use this syntax in a query like:

   SELECT * FROM "posts" WHERE "data"->>'title' = "What I learned during Covid"

   '{"title": "What I learned during Covid"}'
   '{"title": "What I learned during Covid", "authorName": "Jake" }'
*/

// "WHERE "data"->>'title' = '42'"
// "WHERE "foo"->>'bar' = 'baz'"


// const field = "name"
// console.log(`My ${field} is`)
// `My ${field} is` ==="My name is"

function Filter(data, title, val){
  var info = ""
  var info2 = ""
}

function jakesFilter(column, property, value){
  return(`WHERE ${column} ->> ${property} = "${value}"`)

}

console.log(jakesFilter("data", "title", "What I learned during Covid"))

// `WHERE "data"->>'title' = "What I learned during Covid"`
