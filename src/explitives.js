function replaceProfanity() { replaceString(260,65,"Fuck","Duck");replaceString(260,65,"fuck","duck");replaceString(260,65,"FUCK","DUCK");replaceString(260,65,"dick","slip");replaceString(260,65,"Dick","Slip");replaceString(260,65,"DICK","SLIP");replaceString(260,65,"Pussy","Kitty");replaceString(260,65,"pussy","kitty");replaceString(260,65,"PUSSY","KITTY");replaceString(260,65,"Faggot","Maggot");replaceString(260,65,"faggot","maggot");replaceString(260,65,"FAGGOT","MAGGOT");replaceString(260,65,"nigger","tigger");replaceString(260,65,"Nigger","Tigger");replaceString(260,65,"NIGGER","TIGGER");replaceString(260,65,"Bitch","Nitch");replaceString(260,65,"bitch","nitch");replaceString(260,65,"BITCH","NITCH"); }
function loopProfanity() {
if(we.isReady()) { replaceProfanity() }
if(we.go) { setTimeout(loopProfanity, 5000) }
}