// Non-breaking spaces are not drawn
function walk(position, charact) {
    // Do Character stuff
    var pos;
    try {
        pos = we.doGetCartesian();
    }catch(e){}
    var chr = '*';
    if(typeof(position) !== 'undefined') {
        pos = position;
        if(typeof(charact) !== 'undefined') {
            chr = charact;
        }
    }
    if(we.isReady()) {
        for(var i = 0; i < 1000; i++) {
            we.goToCartesian(pos[0], pos[1]);
            we.typeText(chr);
            if(Math.round(Math.random())) { we.move('up'); }
            if(Math.round(Math.random())) { we.move('down'); }
            if(Math.round(Math.random())) { we.move('left'); }
            if(Math.round(Math.random())) { we.move('right'); }
            pos = we.getCartesian();
        }
    }
    if(we.go) {
        setTimeout(
            function() {
                walk(pos, chr);
            },
            10
        )
    }
}