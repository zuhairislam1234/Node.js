const str = "hello, I have a cat";
const ptr = /^hello/;
if (ptr.test(str)) {
console.log("The string starts with hello");
} else {
console.log("The string does not start with hello");
}
