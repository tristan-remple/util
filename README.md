## Aqualunae Util Package

This is a simple collection of JavaScript string helpers that I use on a regular basis, now packaged for convenient import wherever I need them. You're welcome to use them as well, if you'd like. More may be added later.

### Strings

Each function takes one string as an argument and returns one string, or null if the input is not a string or number. Empty strings and falsy values will return empty strings.

- util.str.title() achieves the same effect as the PHP ucfirst() function. It takes a string in any case and converts it to a string that is capitalized like a title. Example: All That You Could Do

### Dates

Each function takes one string as an argument and returns one string. If the input is an empty string or null, returns today's date in the selected format. If the input is not a valid date, returns null.

- util.date.friendly() returns a date that's easily human readable, with no time. Example: April 21, 2024

- util.date.admin() returns a date that's easy for Excel to parse, with no time. Example: 2024-04-21

- util.date.sql() returns a date that's easy for SQL to parse, with the time included. Example: 2024-04-21 00:00:00

### Validation

Each function takes one string as an argument and returns an object. The object's result property will contain the correctly formatted input, if possible, or null if the input is not in a valid format. The object's optional error property will contain an error message string if the input is not valid.

- util.valid.phone() checks a string against 3 possible phone number formats, and returns an object with a result string in 000-000-0000 format. Example: { result: 123-123-1234 }

- util.valid.email() checks a string against an email regex, and returns an object with a result string containing the input. Example: { result: example@email.com }