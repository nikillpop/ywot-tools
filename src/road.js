function drawEastRoad(startPos) {
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
                drawEastRoad(pos);
            },
            10
        );
    }
}

function drawWestRoad(startPos) {
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
            we.move('left');
            we.goToCartesian(we.getCartesian()[0],pos[1]);
        }
        pos = we.getCartesian();
    }
    if(we.go) {
        setTimeout(
            function() {
                drawWestRoad(pos);
            },
            10
        );
    }
}

function drawSouthRoad(startPos) {
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
            road = "▒████   ████▒";
            if(we.getCartesian()[1]%2==0) { road = "▒████ ║ ████▒"; }
            for(var idx = 0; idx < road.length; idx++) {
                we.typeText(road[idx]);
                we.move('right');
            }
            we.move('down');
            we.goToCartesian(pos[0],we.getCartesian()[1]);
        }
        pos = we.getCartesian();
    }
    if(we.go) {
        setTimeout(
            function() {
                drawSouthRoad(pos);
            },
            10
        );
    }
}

function drawNorthRoad(startPos) {
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
            road = "▒████   ████▒";
            if(we.getCartesian()[1]%2==0) { road = "▒████ ║ ████▒"; }
            for(var idx = 0; idx < road.length; idx++) {
                we.typeText(road[idx]);
                we.move('right');
            }
            we.move('up');
            we.goToCartesian(pos[0],we.getCartesian()[1]);
        }
        pos = we.getCartesian();
    }
    if(we.go) {
        setTimeout(
            function() {
                drawNorthRoad(pos);
            },
            10
        );
    }
}