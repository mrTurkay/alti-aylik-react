console.log("1");

function login(username, password, callbackParam) {
  setTimeout(() => {
    console.log("2");
    const token = "asefasefsefasef" + username + password;
    callbackParam(token);
  }, 2000);
}

console.log("3");

login("murat", "12345", callback);

console.log("4");

// 1-3-2-4 , 1-3-4-2

function callback(token) {
  console.log("5");
  console.log(token);
}
