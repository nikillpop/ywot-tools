function copy(width, height, pos) {
	if(typeof(pos) === 'undefined') {
		we.goToCursor();
		pos = we.getCartesian();
	}
	var copystr = '';
	for(var row = 0; row < height; row++) {
		for(var col = 0; col < width; col++) {
			we.goToCartesian(pos[0]+col, pos[1]+row)
			copystr += we.getSelected();
		}
		copystr += "\n";
	}
	we.goToCursor();
	return copystr.slice(0,-1);
}

function upperCaseBlock(width, height, pos) {
	if(typeof(pos) === 'undefined') {
		we.goToCursor();
		pos = we.getCartesian();
	}
	pasteText(copy(width, height, pos).toUpperCase().replace(/[^\w\n]/g,we.NBS), pos)
}

function loopUpperCaseBlock(width, height, pos) {
	if(typeof(pos) === 'undefined') {
		we.goToCursor();
		pos = we.getCartesian();
	}
	if(we.isReady()) {
		upperCaseBlock(width, height, pos);
		we.world._state.lastEvent = new Date().getTime();
	} else {
		pos = pos
	}
	if(we.go) {
		setTimeout(
			function() {
				loopUpperCaseBlock(width, height, pos);
			},
			100
		);
	}
}