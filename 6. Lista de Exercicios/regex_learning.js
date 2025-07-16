const regex = /\d+/g;
const str = "abc123def456";

// test
regex.test(str); // true

// exec
regex.exec(str); // ["123"]

// match
str.match(regex); // ["123", "456"]

// matchAll
[...str.matchAll(regex)]; // [Array ["123"], Array ["456"]]

// search
str.search(/\d+/); // 3

// replace
str.replace(/\d+/g, "-"); // "abc-def-"

// replaceAll
str.replaceAll(/\d+/g, "-"); // "abc-def456" (sem 'g', troca só o primeiro)

// split
str.split(/\d+/); // ["abc", "def", ""]
