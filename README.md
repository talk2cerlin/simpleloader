Simpleloader
============

#####Usage:
	var options = {
		id: "simpleloader",
		opacity: .5,
		autoopen: false
	}

	simpleloader.init(options);

	id - ID of the div which will be created.
	opacity - opacity of the overlay.
	autoopen - if set to true, the loading will appear once the plugin is initialized.

#####Usage:
###To show the loader:

	simpleloader.fadeIn()

###To hide the loader:

	simpleloader.fadeOut()
