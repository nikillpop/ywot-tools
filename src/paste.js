function pasteText(string) {
    we.goToCursor();
    var pos = we.getCartesian();
    for(var idx = 0; idx < string.length; idx++) {
        if(string[idx] !== "\n") {
            we.typeText(string[idx]);
            we.move('right');
        } else {
            we.move('down');
            we.goToCartesian(pos[0], we.getCartesian()[1]);
        }
    }
}

// Non-breaking spaces are not drawn
function clearBlock(width, height, charactOrPos) {
    we.goToCursor();
    var string;
    var chosen;
    var pos = we.getCartesian();
    if(typeof(charactOrPos) === 'undefined') {
        string = ' ';
    } else if(typeof(charactOrPos) === 'object') {
        pos = charactOrPos;
        string = ' ';
    } else if(charactOrPos === 'random') {
        string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !@#$%^&*()_+';
    } else {
        string = charactOrPos;
    }
    for(var row = 0; row < height; row++) {
        for(var col = 0; col < width; col++) {
            chosen = string[Math.floor(string.length*Math.random())];
            if(chosen !== we.NBS) {
                we.goToCartesian(pos[0]+col,pos[1]+row);
                we.typeText(chosen);
            }
        }
    }
}

function clearSpiral(number, initPosition) {
    var n = 0;
    var initPos = initPosition;
    var pos;
    // Initialization stuff, ignore
    if(typeof(number)==='number') {
        n = number;
    } else {
        we.goToCursor();
        initPos = we.getCartesian();
    }
    if(we.isReady()) {
        // Now for the fun
        for(var i = 0; i < 1000; i++) {
            pos = _spiralPosFromN(n);
            we.goToCartesian(pos[0]+initPos[0], pos[1]+initPos[1]);
            we.typeText(" ");
            n++;
        }
    }
    if(we.go) {
        setTimeout(
            function() {
                clearSpiral(n, initPos);
            },
            10
        );
    }
}

function _spiralPosFromN(n) {
    var pos;
    var sqn = Math.floor(Math.sqrt(n));
    var sqn2 = Math.pow(sqn, 2);
    if(sqn%2 === 1) {
        pos = [(sqn+1)/2, (sqn-1)/2];
        if(n <= sqn2+sqn) {
            pos[1] -= n-sqn2;
        } else {
            pos[1] -= sqn;
            pos[0] -= n-(sqn2+sqn);
        }
    } else {
        pos = [-sqn/2, -sqn/2];
        if(n <= sqn2+sqn) {
            pos[1] += n-sqn2;
        } else {
            pos[1] += sqn;
            pos[0] += n-(sqn2+sqn);
        }
    }
    return pos;
}