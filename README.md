Responsive
=======================

Simple js plugin for creating responsive front-end.

Usages:
==========

Step 1:
----
Add JQuery and Resposive plugin to the page
<pre>
&lt;script type="text/javascript" src="{path_to_responsive}/responsive.min.js"&gt;&lt;/script&gt;
</pre>


Step 2:
----
Initiate the plugin with the necessary parameters
<pre>
Responsive.init({parameters});
</pre>

Step 3:
----
Add class "resposive" to each element which needs to change style when meet breakpoint, like:
<pre>
&lt;p class="slogan resposive"&gt;My responsive text&lt;/p&gt;
</pre>

Step 4:
----
Describe the styles for each breakpoint, like that:
<pre>
.slogan.b320 { font-size: 12px; }
.slogan.b768 { font-size: 16px; }
.slogan.b1024 { font-size: 20px; }
.slogan.b1600 { font-size: 24px; }
</pre>


Settings:
==========

breakpoints: [],
-----
array of breakpoints which you will use. Default is [320,768,1024,1600]

usage:
<pre>
Responsive.init( { breakpoints:[320,1024] } );
</pre>


callbacks: {},
-----
object contains callback methods which will be called on meet some breakpoint.

usage:
<pre>
Responsive.init({
  callbacks:{
    320: function(){
      alert('switched to 320');
    },
    1024: function(){
      alert('switched to 1024');
    }
  }
});
</pre>

or:
<pre>
var to320 = function(){
  alert('switched to 320');
}

var to1024 = function(){
  alert('switched to 1024');
}

Responsive.init({
  callbacks:{
    320: to320,
    1024: to1024
  }
});
</pre>




callback: function(){},
-----
method which will be called on meet any breakpoint.

usage:
<pre>
Responsive.init({
  callback: function(){
    alert('switched');
  }
});
</pre>
