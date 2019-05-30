
 if ((M<=12) && (M>0))

  { 

    var Landing =Math.ceil(M)*42*100/100; 
    var Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
    var Approach =Math.round(Math.sqrt(Math.ceil(M))*144*100)/100; 

var Lighting=781;
var paxeu  =182;
var paxus =242;

var Concession=36; 
var Supervision=180;
var Handling=129;

tableau();
tableau2();


  }

 else if ((M>12) && (M<26)) 
  { 
   if (M<=19){var Handling=129;var Concession=36;
      var Supervision=180;}  else {var Handling=266;var Concession=49;
      var Supervision=180;}     
           

       var Landing =Math.ceil(M)*42*100/100; 
    var Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
    var Approach =Math.round(Math.sqrt(Math.ceil(M))*240*100)/100; 
 
 

var Lighting=781;
var paxeu =182;
var paxus =242;



tableau();
tableau2();
 
  }

else if ((M>25) && (M<51))

  { 
 if (M<=30){var Handling=266;var Concession=49;
      var Supervision=180;}  else if (M<=40) {var Handling=476;var Concession=84;
      var Supervision=200;}  
else {var Handling=516;var Concession=84;
      var Supervision=200;}  
                          


    var Landing =Math.ceil(M)*85*100/100-1075;  
    var Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
 var Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 

var Lighting=781;
var paxeu =182;
var paxus =242;tableau();tableau2();

 
  }



else if ((M>50) && (M<76))

  { 
  if (M<=60){var Handling=711;var Concession=84;
      var Supervision=250;}  else if ((M<=70)&&(M>60)) {var Handling=685;var Concession=110; var Supervision=250;}  
 else {var Handling=985;var Concession=110; var Supervision=250;}     
                           


    var Landing =Math.ceil(M)*122*100/100-2925; 
    var Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
 var Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100; 

var Lighting=781;
var paxeu =182;
var paxus =242;tableau();tableau2();


  }





else if ((M>75) && (M<126))

  { 

if (M<=80){var Handling=985;var Concession=110;
      var Supervision=250;}  else if ((M<=100)&&(M>80)) {var Handling=1090;var Concession=110; var Supervision=300;}  
 else {var Handling=1302;var Concession=158; var Supervision=300;}     

     var Landing =Math.ceil(M)*152*100/100-5175; 
        var Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
                 var Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100;  


var Lighting=781;
var paxeu =182;
var paxus =242;tableau();tableau2();


  }




else if ((M>125) && (M<201))

  { 

  if (M<=130){var Handling=1302;var Concession=158;
      var Supervision=300;}  else if ((M<=150)&&(M>130)) {var Handling=1392;var Concession=158; var Supervision=300;}  
 else if ((M<=180)&&(M>150)) {var Handling=1592;var Concession=158; var Supervision=350;}     
 else if ((M<=200)&&(M>180)) {var Handling=1767;var Concession=158; var Supervision=350;} 

    var Landing =Math.ceil(M)*174*100/100-7925; 
          var Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
                   var Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100;  

var Lighting=781;
var paxeu =182;
var paxus =242;tableau();tableau2();


  }


else if ((M>200) && (M<401))

  { 
  if (M<=230){var Handling=1937;var Concession=228;
      var Supervision=350;}  else if ((M<=300)&&(M>230)) {var Handling=2347;var Concession=228; var Supervision=400;}  
     else {var Handling=3065;var Concession=300; var Supervision=400;} 



     var Landing =Math.ceil(M)*160*100/100-5125;  
              var Parking =Math.round(Math.ceil(M)*(3.47)*100)/100; 
                    var Approach =Math.round(Math.sqrt(Math.ceil(M))*392*100)/100;  


var Lighting=781;
var paxeu =182;
var paxus =242;tableau();tableau2();


  }

else {alert("You are introducing a wrong number !!\r"+" MTOW should be less than 400 tons"); 
window.location.href = 'http://jamal-r.blogspot.com/p/test-aircraft-mtow-display.html'}

