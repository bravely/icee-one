function assertEqual(a, b) {
  if (a !== b) {
    throw new Error(`Assertion failed, ${a} is not equivalent to ${b}`)
  }
}

// Here, I'm gonna write some tests of increasing difficulty over what you
// did this morning. Uncomment them one by one and run `npm test` from your
// console to run this file and see if they work.

// Remember, keep everything being returned by the function as a string- that's
// what it's being compared to!

// You'll need to define what parameters are required to produce the given
// output. And once you have a test passing, don't re-comment it on the next
// step- leave it running so you have to keep all of them passing as it gets
// more complex.

// Don't worry about completing all of it- just get as far as you can, and
// remember to email me questions once you've reached a point frustration!
// When you do, be sure you commit your work and push it up to the repo.

function filter() {
  return
}

assertEqual(filter(), 'WHERE "id" = 42')


assertEqual(filter(), 'WHERE "id" = 42 AND "likes_count" = 24')


assertEqual(filter(), `WHERE "data"->'title' = 'Test Title'`)


assertEqual(filter(), `WHERE "id" = 42 AND "data"->'title' = 'Test Title'`)


assertEqual(filter(), `WHERE "id" = 42 AND "data"->'title' = 'Test Title' AND "data"->'body'->'footer' = "Test footer"`)
