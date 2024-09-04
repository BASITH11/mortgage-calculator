 

 var total_btn = document.getElementById("btn")
 var repay_radio = document.getElementById("repay")
  var ionly_radio = document.getElementById("ionly");

 if( repay_radio.addEventListener("click",() => {

  if(total_btn.addEventListener("click",() => {

 var amount_val = document.getElementById("amount")
 var year_val = document.getElementById("year")
 var interest_val = document.getElementById("interest")
var p = amount_val.value
var n = year_val.value
var r = interest_val.value

console.log(p)
console.log(r)
console.log(n)

var x=(r/100/12)
x.toFixed(6)
console.log(x)

var a= x*p
console.log(a)

var y= 1-Math.pow((1+x),(-n * 12))
console.log(y)

var z = (a/y).toFixed(2)
console.log(z)
 result.textContent="$" +z
 
}));

}));
 
  

  else if(ionly_radio.addEventListener("click",() => {
 

 if(total_btn.addEventListener("click",() => {
 
      var amount_val = document.getElementById("amount")
 var year_val = document.getElementById("year")
 var interest_val = document.getElementById("interest")

 
var p = amount_val.value
var n = year_val.value
var r = interest_val.value



var x=(r/100/12)
x.toFixed(6)
console.log(x)

var a= x*p
console.log(a)

var y= 1-Math.pow((1+x),(-n * 12))
console.log(y)

var z = (a/y).toFixed(2)


var b = (z * n * 12).toFixed(2);
console.log(b)

result1.textContent = "$" +b

}));

}));


 var field1=document.getElementById("p12")
  var amount_val = document.getElementById("amount")
   

if(total_btn.addEventListener("click",() => {
if(amount_val.value =='')
{
       field1.style.display = "block";
      
     };

}));
 else if(amount_val.value !=='')
{
       field1.style.display = "block";
      

};
   
  var field2 = document.getElementById("p10")
  var year_val = document.getElementById("year")
 
 
   if(total_btn.addEventListener("click",() => {
if(year_val.value =='')
{
       field2.style.display = "block";
        
     };

}));
 else if(year_val.value !=='')
{
       field2.style.display = "block";
      

 
     };

   
  var field3 = document.getElementById("p11")
  var interest_val = document.getElementById("interest")
  
     if(total_btn.addEventListener("click",() => {
if(interest_val.value =='')
{
       field3.style.display = "block";
      
     };

}));
 else if(interest_val.value !=='')
{
       field3.style.display = "block";
        
};



    var complete = document.querySelector(".complete")
    var fillup = document.querySelector(".fillup")
    var total_btn = document.getElementById("btn")

   if(total_btn.addEventListener("click",() => {
      
       fillup.style.display = "none";
       complete.style.display = "block";
}));
   else if(total_btn.addEventListener("!click",() => {
 
       fillup.style.display = "block";
       complete.style.display = "none";
}));

    var amount_val = document.getElementById("amount")
 var year_val = document.getElementById("year")
 var interest_val = document.getElementById("interest")

    var result=document.getElementById("p6")
    var result1=document.getElementById("p8")
     var p = amount_val.value
     var n = year_val.value
     var r = interest_val.value
     var x=(r/100/12)
      x.toFixed(6)
	var a= x*p
       var y= 1-Math.pow((1+x),(-n * 12))
      var z = (a/y).toFixed(2)
     var b = (z * n * 12).toFixed(2)
   
     result.textContent= z
     result1.textContent = b



var amount_val = document.getElementById("amount")
 var year_val = document.getElementById("year")
 var interest_val = document.getElementById("interest")

 var clr_btn = document.getElementById("btn2")

 clr_btn.addEventListener("click",() => {


 amount_val.value = '';
year_val.value = '';
interest_val.value = '';
result.textContent ='$';
result1.textContent ='$';


        });