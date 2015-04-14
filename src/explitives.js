function replaceProfanity() {
    replaceString(275, 80, "Fuck", "Duck");
    replaceString(275, 80, "fuck", "duck");
    replaceString(275, 80, "FUCK", "DUCK");
    replaceString(275, 80, "dick", "slip");
    replaceString(275, 80, "Dick", "Slip");
    replaceString(275, 80, "DICK", "SLIP");
    replaceString(275, 80, "Pussy", "Kitty");
    replaceString(275, 80, "pussy", "kitty");
    replaceString(275, 80, "PUSSY", "KITTY");
    replaceString(275, 80, "Faggot", "Maggot");
    replaceString(275, 80, "faggot", "maggot");
    replaceString(275, 80, "FAGGOT", "MAGGOT");
    replaceString(275, 80, "nigger", "tigger");
    replaceString(275, 80, "Nigger", "Tigger");
    replaceString(275, 80, "NIGGER", "TIGGER");
    replaceString(275, 80, "Bitch", "Nitch");
    replaceString(275, 80, "bitch", "nitch");
    replaceString(275, 80, "BITCH", "NITCH");
    replaceString(275, 80, "andrew", "hitler");
    replaceString(275, 80, "Andrew", "Hitler");
    replaceString(275, 80, "ANDREW", "HITLER");
    replaceString(275, 80, "cunt", "runt");
    replaceString(275, 80, "Cunt", "Runt");
    replaceString(275, 80, "CUNT", "RUNT");
    replaceString(275, 80, "shit", "poop");
    replaceString(275, 80, "Shit", "Poop");
    replaceString(275, 80, "SHIT", "POOP");
}

function loopProfanity() {

    if (we.isReady()) {
        replaceProfanity()
    }

    if (we.go) {
        setTimeout(loopProfanity, 5000)
    }

}