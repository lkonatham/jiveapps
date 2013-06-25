var result = function(temp) {
                return(5/9)*(temp-32);
             }

};


$j(document).ready(function() {

   $j('#output a').click(function() {
         displayView('output');
   });

   
});

gadgets.util.registerOnLoadHandler(function() {
  // add code that should run on page load here

  // resize app window to fit content
  // gadgets.window.adjustHeight();
});
