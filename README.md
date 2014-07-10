Simpleloader
============

#####Usage:
	var options = {
		id: "simpleloader",
		opacity: 0.9,
		imgurl: false,
		imgwidth: 50,
		imgheight: 50,
		autoopen: false,
		selector: false
	}

	simpleloader.init(options);

	id - ID of the div which will be created.
	opacity - opacity of the overlay.
	imgurl - loader image url.
	imagewidth - as the name says its just the image width in pixels (put this without px values).
	imageheight - as the name says its just the image height in pixels (put this without px values).
	autoopen - if set to true, the loading will appear once the plugin is initialized.
	selector - selector to which the loader has to be applied.

#####Functions:
	init - to initialise the plugin (has to be called before calling anyother function) - Takes object parameter which is explained in the top
	show - to show the loader - Param : speed in milliseconds
	hide - to hide the loader - Param : speed in milliseconds
	fadein - to show the loader with a fadein effect - Param : speed in milliseconds
	fadeout - to hide the loader with a fadeout effect - Param : speed in milliseconds
	remove - to remove the html which are injected by init function
	log - to log (just a wrapper for window.console.log) - Param : message to be logged
	updatedefaults - to update the default object - Param : updated object which can have the same parameters as default obj
	isempty - checks if an object is empty - Param : object to be checked
