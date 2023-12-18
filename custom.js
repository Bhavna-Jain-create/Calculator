var result = document.querySelector(".result");
var btn = document.querySelectorAll(".btn");
var screenValue = " ";
var str ="";
btn.forEach(function(btnn){
    btnn.addEventListener('click',function(e){
       var buttonText = e.target.getAttribute("data-target");
      
       
       if(buttonText == "C"){
        result.innerHTML = "0";
        document.querySelector(".result").innerHTML="0";
        return '';
       }else if(buttonText == "="){
        result.innerHTML = eval(str);
        
        str="";
        return '';
       }
        str += buttonText;
        console.log(str);
        result.innerHTML = buttonText;
        result.innerHTML = str;
      
    })
})
//console.log(eval('2 + 2') === eval('4'));