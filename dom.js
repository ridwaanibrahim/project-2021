//documentqueryselectorAll()
//loop

var data=document.querySelectorAll(".geek");
var len=data.length;

for (let i = 0; i < len; i++) {
	var result=document.querySelectorAll(".geek")[i];
	document.write(result +"<br>");
	console.log(result);
}