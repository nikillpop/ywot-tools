function drawRoad(startPos) {
    var pos;
    if(startPos) {
        pos = startPos;
    } else {
        pos = we.doGetCartesian();
        we.goToCursor();
    }
    if(we.isReady()) {
        var road;
        for(var count = 0; count < 16; count++) {
            road = "▒██   ██▒";
            if(we.getCartesian()[0]%3==0) { road = "▒██ ═ ██▒"; }
            for(var idx = 0; idx < road.length; idx++) {
                we.typeText(road[idx]);
                we.move('down');
            }
            we.move('right');
            we.goToCartesian(we.getCartesian()[0],pos[1]);
        }
        pos = we.getCartesian();
    }
    if(we.go) {
        setTimeout(
            function() {
                drawRoad(pos);
            },
            10
        );
    }
}