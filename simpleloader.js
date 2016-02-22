(function() {
    var e = {
        initFlag: false,
        defaults: {
            id: "simpleloader",
            opacity: .5,
            autoOpen: false,
        },
        init: function(e) {
            if (typeof jQuery == "undefined") {
                this.log("jQuery is not found. Make sure you have jquery included");
                return false
            } else if (typeof $ == "undefined") {
                $ = jQuery
            }
            $.fn.extend({
                exists: function() {
                    return this.length !== 0
                }
            });
            if (!this.isEmpty(e)) {
                this.updatedefaults(e)
            }
            if (!$("." + this.defaults.id).exists()) {
                var e = $("body");
                e.append('<div class="' + this.defaults.id + '" style="display:none;position:fixed;width:100%;top:0;background-color:black;height:100%;left:0;z-index:99999;opacity:' + this.defaults.opacity + ';" ></div>');
                e.append('<div class="' + this.defaults.id + ' progress progress-striped active" style="display:none; position: fixed !important; width: 16%; z-index: 100000; height: 20px;margin: auto; left: 0; top: 0; right: 0; bottom: 0; "> <div style="width: 100%;" class="progress-bar progress-bar-success">Loading...</div> </div>');
                this.initFlag = true;
            }
            if (this.defaults.autoOpen) {
                this.fadeIn()
            }
        },
        show: function(e) {
            if (this.initFlag) $("." + this.defaults.id).show(e);
            else this.log("Please initialize the loader using simpleloader.init()")
        },
        hide: function(e) {
            if (this.initFlag) $("." + this.defaults.id).hide(e);
            else this.log("Please initialize the loader using simpleloader.init()")
        },
        fadeIn: function(e) {
            this.fadein(e)
        },
        fadeOut: function(e) {
            this.fadeout(e)
        },
        fadein: function(e) {
            if (this.initFlag) $("." + this.defaults.id).fadeIn(e);
            else this.log("Please initialize the loader using simpleloader.init()")
        },
        fadeout: function(e) {
            if (this.initFlag) $("." + this.defaults.id).fadeOut(e);
            else this.log("Please initialize the loader using simpleloader.init()")
        },
        remove: function() {
            $("." + this.defaults.id).remove();
            this.initFlag = false
        },
        log: function(e) {
            if (window.console) console.log(e)
        },
        updatedefaults: function(e) {
            for (var t in e) {
                this.defaults[t] = e[t]
            }
        },
        isEmpty: function(e) {
            for (var t in e) {
                if (e.hasOwnProperty(t)) return false
            }
            return true
        }
    };
    window.simpleloader = e;
    return e;
})().init();