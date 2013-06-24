var form = function() {
  $j('#create-form'){
        var value = $j(this).temp;
            value = ((temp -32)*5)/9;
        return value;
         
            }
};
$j(document).ready(function() {

   $j('#output a').click(function() {
         displayView('output');
   });

   $j('#help a').click(function() {
         displayView('help');
   });
});

gadgets.util.registerOnLoadHandler(function() {
  // add code that should run on page load here

  // resize app window to fit content
  // gadgets.window.adjustHeight();
});
