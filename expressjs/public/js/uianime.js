function showTab(selection, element, classValue) {
	currentSelection = $(selection).attr('href')
	$(currentSelection).css("display", "none");
	// Remove from anchor
	$("[href='" + currentSelection + "']").removeClass();
	$(element).fadeIn();
	// add to anchor
	$("[href='" + element + "']").addClass(classValue);
}

function toggle(selection) {
	if ($(selection).is(':visible')) {
		$(selection).fadeOut();
	}
	else {
		$(selection).fadeIn();
	}
}