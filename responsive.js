window.responsive = {

	curSize: null,
	curBClass: null,
	settings: {},
	defaultSettings: {
		breakpoints: [320,768,1024,1600],
		callbacks: {
			320: function(){return true;},
			768: function(){return true;},
			1024: function(){return true;},
			1600: function(){return true;},
		},
	},

	init: function(settings)
	{
		this.settings = this._mergeObjects(this.defaultSettings,settings);
		this.curSize = $(window).width();
		this.setStyles();
		this._callCallback(this.curBClass);

		$(window).on('resize',function(){
			for ( var i in window.responsive.settings.breakpoints )
			{
				if ((window.responsive.curSize > window.responsive.settings.breakpoints[i] && window.responsive.settings.breakpoints[i] > $(window).width()) ||
					(window.responsive.curSize < window.responsive.settings.breakpoints[i] && window.responsive.settings.breakpoints[i] < $(window).width()))
					{
						window.responsive.curSize = $(window).width();
						window.responsive.setStyles();
						window.responsive._callCallback(responsive.curBClass);
					}
			}
		});
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

	getCurBreakpoint: function()
	{
		var curBreakpoint = 0;
		for ( var i in this.settings.breakpoints )
			if ( this.curSize > this.settings.breakpoints[i] ) curBreakpoint = this.settings.breakpoints[i];
		return curBreakpoint;
	},

	setStyles: function(last)
	{
		$('.responsive').each(function(){
			$(this).removeClass('b'+window.responsive.curBClass);
			$(this).addClass('b'+window.responsive.getCurBreakpoint());
		});
		window.responsive.curBClass = window.responsive.getCurBreakpoint();
	}
}
