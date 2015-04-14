function adminWatchdog(text) {
	var newString;
	var oldString;
	var blurb = "";
	blurb += "+-----WARNING: ADMINS ONLINE-----+\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "|@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@|\n";
	blurb += "+--------EVERYONE BEHAVE!--------+";
	blurb = blurb.replace(/@/g, we.NBS);
	if(we.go) {
		if(text === undefined) {
			adminWatchdog(copy(32,16,[-16,-8]));
		} else {
			oldString = text;
			newString = copy(32,16,[-16,-8]);
			if(oldString !== newString) {
				pasteText(blurb, [-17,-9]);
			}
			setTimeout(
				function() {
					adminWatchdog(newString);
				},
				2500
			);
		}
	}
}