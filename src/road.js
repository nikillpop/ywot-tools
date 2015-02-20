/* Roads */

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


/* Intersections */

function drawSouthIntersection() {
    we.goToCursor();
    var pos = we.getCartesian();
    var offsets = [
        [-6, 0],
        [-5, 0],
        [-4, 0],
        [-3, 0],
        [-2, 0],
        [-1, 0],
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [-1, -1],
        [0, -1],
        [1, -1],
        [-1, -2],
        [0, -2],
        [1, -2],
        [-2, -4],
        [-1, -4],
        [0, -4],
        [1, -4],
        [2, -4],
    ]
    for(var i = 0; i < offsets.length; i++) {
        we.goToCartesian(
            pos[0]+offsets[i][0],
            pos[1]+offsets[i][1]
        )
        we.typeText(' ')
    }
    we.goToCursor();
}

function drawNorthIntersection() {
    we.goToCursor();
    var pos = we.getCartesian();
    var offsets = [
        [-6, 0],
        [-5, 0],
        [-4, 0],
        [-3, 0],
        [-2, 0],
        [-1, 0],
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [-1, 2],
        [0, 2],
        [1, 2],
        [-2, 4],
        [-1, 4],
        [0, 4],
        [1, 4],
        [2, 4],
    ]
    for(var i = 0; i < offsets.length; i++) {
        we.goToCartesian(
            pos[0]+offsets[i][0],
            pos[1]+offsets[i][1]
        )
        we.typeText(' ')
    }
    we.goToCursor();
}

function drawEastIntersection() {
    we.goToCursor();
    var pos = we.getCartesian();
    var offsets = [
        [0, -4],
        [0, -3],
        [0, -2],
        [0, -1],
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [-2, -1],
        [-2, 0],
        [-2, 1],
        [-3, -1],
        [-3, 0],
        [-3, 1],
        [-4, -1],
        [-4, 0],
        [-4, 1],
        [-6, -2],
        [-6, -1],
        [-6, 0],
        [-6, 1],
        [-6, 2]
    ]
    for(var i = 0; i < offsets.length; i++) {
        we.goToCartesian(
            pos[0]+offsets[i][0],
            pos[1]+offsets[i][1]
        )
        we.typeText(' ')
    }
    we.goToCursor();
}

function drawWestIntersection() {
    we.goToCursor();
    var pos = we.getCartesian();
    var offsets = [
        [0, -4],
        [0, -3],
        [0, -2],
        [0, -1],
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [1, -1],
        [1, 0],
        [1, 1],
        [2, -1],
        [2, 0],
        [2, 1],
        [3, -1],
        [3, 0],
        [3, 1],
        [4, -1],
        [4, 0],
        [4, 1],
        [6, -2],
        [6, -1],
        [6, 0],
        [6, 1],
        [6, 2]
    ]
    for(var i = 0; i < offsets.length; i++) {
        we.goToCartesian(
            pos[0]+offsets[i][0],
            pos[1]+offsets[i][1]
        )
        we.typeText(' ')
    }
    we.goToCursor();
}


/* Caps */

function drawEastCap() {
    var cap = '';
    cap += "▒▒▒▒▒▒▒\n";
    cap += "██████▒\n";
    cap += "██████▒\n";
    cap += "  ████▒\n";
    cap += "  ████▒\n";
    cap += "  ████▒\n";
    cap += "██████▒\n";
    cap += "██████▒\n";
    cap += "▒▒▒▒▒▒▒";
    we.goToCursor();
    pasteText(cap);
}

function drawWestCap() {
    var cap = '';
    cap += "▒▒▒▒▒▒▒\n";
    cap += "▒██████\n";
    cap += "▒██████\n";
    cap += "▒████  \n";
    cap += "▒████  \n";
    cap += "▒████  \n";
    cap += "▒██████\n";
    cap += "▒██████\n";
    cap += "▒▒▒▒▒▒▒";
    we.goToCursor();
    pasteText(cap);
}

function drawNorthCap() {
    var cap = '';
    cap += "▒▒▒▒▒▒▒▒▒▒▒▒▒\n";
    cap += "▒███████████▒\n";
    cap += "▒███████████▒\n";
    cap += "▒████   ████▒\n";
    we.goToCursor();
    pasteText(cap);
}

function drawSouthCap() {
    var cap = '';
    cap += "▒████   ████▒\n";
    cap += "▒███████████▒\n";
    cap += "▒███████████▒\n";
    cap += "▒▒▒▒▒▒▒▒▒▒▒▒▒\n";
    we.goToCursor();
    pasteText(cap);
}


/* Corner */

function drawNorthWest() {
    var corn = '';
    corn += "▒▒▒▒▒▒▒▒▒▒▒▒▒\n";
    corn += "▒████████████\n";
    corn += "▒████████████\n";
    corn += "▒████        \n";
    corn += "▒████        \n";
    corn += "▒████        \n";
    corn += "▒████   █████\n";
    corn += "▒████   █████\n";
    corn += "▒████   ████▒\n";
    we.goToCursor();
    pasteText(corn);
}

function drawNorthEast() {
    var corn = '';
    corn += "▒▒▒▒▒▒▒▒▒▒▒▒▒\n";
    corn += "████████████▒\n";
    corn += "████████████▒\n";
    corn += "        ████▒\n";
    corn += "        ████▒\n";
    corn += "        ████▒\n";
    corn += "█████   ████▒\n";
    corn += "█████   ████▒\n";
    corn += "▒████   ████▒\n";;
    we.goToCursor();
    pasteText(corn);
}

function drawSouthEast() {
    var corn = '';
    corn += "▒████   ████▒\n";
    corn += "█████   ████▒\n";
    corn += "█████   ████▒\n";
    corn += "        ████▒\n";
    corn += "        ████▒\n";
    corn += "        ████▒\n";
    corn += "████████████▒\n";
    corn += "████████████▒\n";
    corn += "▒▒▒▒▒▒▒▒▒▒▒▒▒\n";
    we.goToCursor();
    pasteText(corn);
}

function drawSouthWest() {
    var corn = '';
    corn += "▒████   ████▒\n";
    corn += "▒████   █████\n";
    corn += "▒████   █████\n";
    corn += "▒████        \n";
    corn += "▒████        \n";
    corn += "▒████        \n";
    corn += "▒████████████\n";
    corn += "▒████████████\n";
    corn += "▒▒▒▒▒▒▒▒▒▒▒▒▒\n";
    we.goToCursor();
    pasteText(corn);
}