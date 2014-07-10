(function() {
	var linkloader = {
		defaults: {
			id: "linkloader",
			init: false,
			opacity: 0.9,
			imgurl: false,
			imgwidth: 50,
			imgheight: 50,
			autoopen: false,
			selector: false
		},
		init: function(obj){
			if (typeof jQuery == 'undefined') {
				this.log("jQuery is not found. Make sure you have jquery included");
				return false;
			}
			else if(typeof $ == 'undefined'){
				$ = jQuery;
			}
			$.fn.extend({
				exists: function () {
					return this.length !== 0;
				}
			});
			if(!this.isEmpty(obj)){
				this.updatedefaults(obj);
			}
			if(!$("#"+this.defaults.id).exists()){
				var obj = (this.defaults.selector) ? this.defaults.selector : $('body');
				obj.prepend('<div id="'+this.defaults.id+'" style="display:none;position:absolute;width:100%;top:0;background-color:black;height:100%;left:0;z-index:9999999999999999999999999;opacity:'+this.defaults.opacity+';" ></div>');
				this.defaults.init = true;
			}
			if(this.defaults.imgurl)
				$("#"+this.defaults.id).html('<img src="'+this.defaults.imgurl+'" '+((this.defaults.imgwidth)? "width="+this.defaults.imgwidth+"px" : "" )+' '+((this.defaults.imgheight)? "width="+this.defaults.imgheight+"px" : "" )+' style="position: absolute;margin: auto;top: 0;left: 0;right: 0;bottom: 0;"/>');
			else
				$("#"+this.defaults.id).html(' ');
			if(this.defaults.autoopen){
				this.fadein();
			}
		},
		show: function(speed){
			if(this.defaults.init)
				$("#"+this.defaults.id).show(speed);
			else
				this.log("Please initialize the loader using linkloader.init()");
		},
		hide: function(speed){
			if(this.defaults.init)
				$("#"+this.defaults.id).hide(speed);
			else
				this.log("Please initialize the loader using linkloader.init()");
		},
		fadein: function(speed){
			if(this.defaults.init)
				$("#"+this.defaults.id).fadeIn(speed);
			else
				this.log("Please initialize the loader using linkloader.init()");
		},
		fadeout: function(speed){
			if(this.defaults.init)
				$("#"+this.defaults.id).fadeOut(speed);
			else
				this.log("Please initialize the loader using linkloader.init()");
		},
		remove: function(){
			$("#"+this.defaults.id).remove();
			this.defaults.init = false;
		},
		log: function(msg){
			if(window.console)
				console.log(msg);
		},
		updatedefaults: function(obj){
			for (var attrname in obj) { 
				this.defaults[attrname] = obj[attrname]; 
			}
		},
		isEmpty: function(obj) {
			for(var prop in obj) {
				if(obj.hasOwnProperty(prop))
					return false;
			}
			return true;
		}
	};
	window.linkloader = linkloader;
})()