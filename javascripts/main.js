function apply()
{
   var a = tform.myoption.value;
   if(a=="Fahrenheit")
   {
      var val=tform.txt.value;
      var tf=parseInt(val);
      var tc=(5/9)*(tf-32);
      var res=Math.round(tc*Math.pow(10,2))/Math.pow(10,2);
      tform.txt1.value=res+" C";
    }
    else
    {
       var val=tform.txt.value;
       var tc=parseInt(val);
       var tf=((9/5)*tc)+32;
       var res=Math.round(tc*Math.pow(10,2))/Math.pow(10,2);
       tform.txt1.value=res+" F";
    }
}

gadgets.util.registerOnLoadHandler(function() {
  // add code that should run on page load here

  // resize app window to fit content
  // gadgets.window.adjustHeight();
});
