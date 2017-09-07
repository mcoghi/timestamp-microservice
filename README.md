Timestamp Microservice

 Description:

You can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: September 7, 2017).

If it does, it returns both the Unix timestamp and the natural language form of that date.

If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage:
https://mhl-timestamp.glitch.me/September 7, 2017
https://mhl-timestamp.glitch.me/1504742400000

Result (a JSON with two properties):
{unix: 1504742400000, natural: "Thu Sep 07 2017"}
