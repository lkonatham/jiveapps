$(document).ready(function() {
  $.simpleWeather({
    zipcode: '78754',
    location: 'austin',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});


function displayData()
{

  $(document).ready(function(){

    $.getJSON("http://www.weather.com/weather/today/Austin+TX+78754:4:US?city=Austin",

        function(data){

        $("#city").html( data.city );
        $("#temperature").html( data.temperature );

        });

  });

} //end displayData

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
       var res=Math.round(tf*Math.pow(10,2))/Math.pow(10,2);
       tform.txt1.value=res+" F";
    }
}

gadgets.util.registerOnLoadHandler(function() {
  // add code that should run on page load here

  // resize app window to fit content
  // gadgets.window.adjustHeight();
});
