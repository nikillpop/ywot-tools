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

// This is the same as clearBlock but it relies on "copy" to 
// perform the operation much more quickly
function fastClearBlock(width, height, pos) {
	pasteText(
		copy(width, height, pos)
		.replace(/ /g, we.NBS)
		.replace(eval("/[^"+we.NBS+"\\n]/g"), " ")
	);
}

// This function removes a particular string from a block
function removeString(width, height, string, pos) {
	regExpFromString = new RegExp(RegExp.escape(string.replace(/ /g, we.NBS)), 'g');
	pasteText(
		copy(width, height, pos)
		.replace(/ /g, we.NBS)
		.replace(regExpFromString, " ".repeat(string.length))
		.replace(/[^ \n]/g, we.NBS)
	);
}

// This function replaces a particular string from a block
function replaceString(width, height, string, replacer, pos) {
	regExpFromString = new RegExp(RegExp.escape(string.replace(/ /g, we.NBS)), 'g');
	pasteText(
		copy(width, height, pos)
		.replace(/ /g, we.NBS)
		.replace(regExpFromString, " ".repeat(string.length))
		.replace(/[^ \n]/g, we.NBS)
		.replace(new RegExp(" ".repeat(string.length), "g"), replacer)
	);
}


function upperCaseBlock(width, height, pos) {
	if(typeof(pos) === 'undefined') {
		we.goToCursor();
		pos = we.getCartesian();
	}
	pasteText(
		copy(width, height, pos)
		.replace(eval("/"+we.NBS+"/g"), " ")
		.replace(/           Welcome to           /g, "                                ")
		.replace(/      ..t...e.....x....t..      /g, "                                ")
		.replace(/  Featured worlds         Help  /g, "                                ")
		.replace(/[^a-z\n]/g, we.NBS)
		.toUpperCase()
	)
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
			2000
		);
	}
}

function tessellateBehind(width, height) {
	var strA = [
		"╦╩═",
		"╩═╦",
		"═╦╩"
	]
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

/*
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
*/