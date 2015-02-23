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