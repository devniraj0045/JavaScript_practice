
function hello()
{
    alert (window.value);  // declaring the global variable 
}

function animation()
{

    window.value=100; // accesing the another function using global

}
hello();
animation();


document.getElementById("para").onclick=function(){
  clickme()
}
 function clickme()
 {
 document.getElementById("para").innerHTML="my name is rahul";
 document.getElementById("para").style.color="blue";
 document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";  
  
 }


 document.getElementById("prt").onclick=function(){
    prt()
  }

  function prt(){
    document.getElementById("prt").style.color="blue";

    var emp=["Sonoo","Vimal","Ratan"];  
    for (i=0;i<emp.length;i++){  
    document.write(emp[i] + "<br/>"); 
    }
  }

