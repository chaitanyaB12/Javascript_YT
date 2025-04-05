function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called")
}

function createuser(username, email, password){
    SetUsername.call(this, username)

    this.email = email;
    this.password = password;
}

const sam = new createuser("sam", "sam@ok.com", "12345");

console.log(sam);
