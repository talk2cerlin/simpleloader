Simpleloader
============

### Usage:
	var options = {
		id: "simpleloader",
		opacity: .5,
		autoopen: false
	}

	simpleloader.init(options);

	id - ID of the div which will be created.
	opacity - opacity of the overlay.
	autoopen - if set to true, the loading will appear once the plugin is initialized.

##### To show the loader:

	simpleloader.fadeIn();

##### To hide the loader:

	simpleloader.fadeOut();

##### To get the loading text:

	simpleloader.getText();

##### To update the loading text:

	simpleloader.setText("New text goes here..");

---

	NOTE: For people who use twitter bootstrap, you can ignore the css file.

---

	NOTE: Please make sure the loader is added in the bottom of the page.
