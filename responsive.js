/*! Responsive v0.2 | (c) 2013 Evgenyi Podluzhnyi */
window.Responsive = {

	curSize: null,
	curBClass: null,
	settings: {},
	defaultSettings: {
		breakpoints: [320,768,1024,1600],
		callbacks: {
			320: function(){return true;},
			768: function(){return true;},
			1024: function(){return true;},
			1600: function(){return true;}
		}
	},

	init: function(settings)
	{
		this.settings = this._mergeObjects(this.defaultSettings,settings);
		this.curSize = this._getWindowWidth();
		this.setStyles();
		this._callCallback(this.curBClass);

		window.onresize = function(event) {
			var Resp = window.Responsive;
			for ( var i in window.Responsive.settings.breakpoints )
			{
				if ((Resp.curSize > Resp.settings.breakpoints[i] && Resp.settings.breakpoints[i] > Resp._getWindowWidth()) ||
					(Resp.curSize < Resp.settings.breakpoints[i] && Resp.settings.breakpoints[i] < Resp._getWindowWidth()))
					{
						Resp.curSize = Resp._getWindowWidth();
						Resp.setStyles();
						Resp._callCallback(Resp.curBClass);
					}
			}
		}
	},

	_callCallback: function(callback)
	{
		for ( var i in this.settings.callbacks )
		{
			if ( callback == i )
			{
				try
				{
					this.settings.callbacks[i]();
				}
				catch (e)
				{
					throw new Error ( callback + ' is not a function' );
				}
			}
		}
	},

	_mergeObjects: function (obj_one, obj_two)
	{
		obj_two = obj_two || {};
		obj_one = obj_one || {};
		var obj = {};
		for (var property in obj_one) obj[property] = obj_two[property] || obj_one[property];
		return obj;
	},

	_getWindowWidth: function()
	{
        return window.screen.availWidth;
	},

	getCurBreakpoint: function()
	{
		var curBreakpoint = this.settings.breakpoints[0];
		for ( var i in this.settings.breakpoints )
			if ( this.curSize >= this.settings.breakpoints[i] ) curBreakpoint = this.settings.breakpoints[i];
		return curBreakpoint;
	},

	_isNumeric: function(num)
	{
		return num >=0 || num < 0;
	},

	setStyles: function(last)
	{
		var respElements = document.getElementsByClassName('responsive');
		for ( var i in respElements )
		{
			if ( this._isNumeric(i) )
			{
				respElements[i].classList.remove('b'+window.Responsive.curBClass);
				respElements[i].classList.add('b' + window.Responsive.getCurBreakpoint());
			}
		}
		window.Responsive.curBClass = window.Responsive.getCurBreakpoint();
	}
}