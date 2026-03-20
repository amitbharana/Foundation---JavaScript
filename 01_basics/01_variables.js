const accountId = 12345
let accountEmail = "amit@gmail.com"
var accountPassword = "123456"
accountCity = "jaipur"

let accountState;

 //accountId = 2 // not allowed

 accountEmail = "ankit@gmail.com"
 accountPassword = "2345"
 accountCity = "bihar"


console.log(accountId);

/*
perfer not to use var
because of issue in block scope and functional scope

*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])