// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by sensors-collection.js.
import { name as packageName } from "meteor/sensors-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('sensors-collection - example', function (test) {
  test.equal(packageName, "sensors-collection");
});
