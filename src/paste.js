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

function clearBlock(width, height, charactOrPos) {
    we.goToCursor();
    var string;
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
            we.goToCartesian(pos[0]+col,pos[1]+row);
            we.typeText(string[Math.floor(string.length*Math.random())])
        }
    }
}