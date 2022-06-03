Utilities are primarily used for libraries that already do the hard work for you for example

The JWT(jsonwebtoken) library has also integrated validation method, we use that method here, so we don't need to repeat the same logic in every file and request

The validator library helps you not think if an email is correct or a specific date is spelled incorrectly

Quote on quote

"Utils directory will have all the utilities and helpers needed for the application. It will also act as a place to put shared logic, if any. For example, a simple helper to calculate the offset for a paginated SQL query can be put in a helper.util.js file in this folder."