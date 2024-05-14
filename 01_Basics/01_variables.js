const accountid = 1212121212
let accountEmail = "RamShayam@gmail.com"
var accountPassword = "123123123"
accountcity = "pune"
let accountState;
/* When we declare a variable in js like above accounstate and 'not give the value' to that then it will print 'undefined' */

accountEmail = "nishu@gmail.com"
accountPassword = "98989898"
accountcity = "Mumbai"

/* prefer not to use var
because issue in block scope and functional scope (eg--- {}) */

console.log(accountEmail)

console.table([accountEmail, accountPassword, accountcity, accountState])