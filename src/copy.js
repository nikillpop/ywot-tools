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

function tessellateBehind(width, height) {
	var strA = ["\\__/ / __ \\ ",
				"____/ /  \\ \\",
				"___ \\ \\   \\_",
				"   \\ \\ \\    ",
				"___/ / /   _",
				"____/ /   / ",
				" __ \\ \\__/ /",
				"/  \\ \\____/ ",
				"\\   \\____ \\ ",
				" \\       \\ \\",
				" /   ____/ /",
				"/   / ____/ "];
	we.goToCursor();
	var firstPass = "";
	var secondPass = copy(width, height).replace(/[^\w\n]/g, we.NBS);
	for(var idx = 0; idx < strA.length; idx++) { strA[idx] = strA[idx].replace(/ /g, we.NBS); }
	for(var row = 0; row < height; row++) {
		for(var col = 0; col < width; col++) {
			firstPass += strA
				[
					we.mod((we.getCartesian()[0]+row),strA.length)
				][
					we.mod((we.getCartesian()[1]+col),strA[0].length)
				];
		}
		firstPass += "\n";
	}
	pasteText(firstPass);
	pasteText(secondPass);
}