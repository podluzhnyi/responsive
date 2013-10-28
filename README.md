Responsive
=======================

Simple js plugin for creating responsive front-end.

Dependence: JQuery.

Usages:
==========

Step 1:
----
Add JQuery and Resposive plugin to page


Step 2:
----
Initiate the plugin with the necessary parameters:  Responsive.init();

Step 3:
----
Add class "resposive" to each elements which need to change style when breakpoint crossed

Step 4:
----
Describe the styles for each breakpoint, like that:

.b320 { font-size: 12px; }
.b768 { font-size: 16px; }
.b1024 { font-size: 20px; }
.b1600 { font-size: 24px; }


Settings:
==========

breakpoints: [],
-----
array of breakpoints whitch you will use. By default it is [320,768,1024,1600]

usage: Responsive.init( { breakpoints:[320,1024] } );


callbacks: {},
-----
object contains callback methods on cross some breakpoint.

usage:  Responsive.init({callbacks:{ 320: function(){ alert('switched to 320'); } }});


callback: function(){}
-----
method which will fired on cross any breakpoint.

usage: Responsive.init({callback: function(){ alert('switched'); } });
