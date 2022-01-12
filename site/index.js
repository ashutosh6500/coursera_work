func =()=>{
	let date=new Date();
let timestring="";
timestring+=date.getHours();
timestring+=":";
timestring+=date.getMinutes();
timestring+=":";
timestring+=date.getSeconds();
document.getElementById("para").innerHTML=timestring;
document.getElementById("date").innerHTML=date.toLocaleDateString();
}
//setInterval(func,1000); //This will give real time date and time.
func();

