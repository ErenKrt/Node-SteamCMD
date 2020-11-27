const {SteamCMD} = require("../Src/Wrapper");

var Cmd= new SteamCMD({Bindir:"./test/steamcmd.exe"});

(async function (){
	
	await Cmd.Create();
	
    var Login= await Cmd.Login({
        Username:"<YOUR USERNAME>",
        Password:"<YOUR PASSWORD>",
        Guard:"<YOUR GUARD CODE>",
    });

    if(Login.type==0){ // Logged In | Response Codes at SteamCMD.js
        console.log(Login);
    }else{
        console.log(Login);
    }

})()
