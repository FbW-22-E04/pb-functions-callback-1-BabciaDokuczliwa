function greetMessage(name) {
  console.log("Good morning,", name);
}
greetMessage("John");
function greetUsers(arr, cb) {
  arr.forEach((item) => {
    cb(item);
  });
}
greetUsers(["John", "Peter", "Mark"], greetMessage);
