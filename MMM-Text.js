/* Magic Mirror
 * Module: MMM-Text
 *
 * By Petter Skog (https://skogdev.no)
 * MIT Licensed.
 */

Module.register('MMM-Text', {

	// Module config defaults.
	defaults: {
		updateInterval: 60000,
		fadeSpeed: 4000
	},

	// Define required scripts.
	getScripts: function () {
		return ['moment.js'];
	},

	// Define start sequence.
	start: function () {
		Log.info('Starting module: ' + this.name);

		// Schedule update timer.
		this.text = 'Loading ..';
		var self = this;
		setInterval(function() {

			var hr = new XMLHttpRequest();
			hr.onreadystatechange = function() {

				if (hr.readyState == 4 && hr.status == 200) {
					var res = JSON.parse(hr.responseText).result;
					self.text = res.currentText;
					self.updateDom(self.config.fadeSpeed);
				}
			}

			hr.open('GET', self.config.url, true);
			hr.send(null);
			
		}, this.config.updateInterval);
	},

	// Override dom generator.
	getDom: function () {
		var text = document.createTextNode(this.text);
		var wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin xlarge bright";
		wrapper.appendChild(text);
		return wrapper;
	}

});