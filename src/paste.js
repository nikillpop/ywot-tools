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