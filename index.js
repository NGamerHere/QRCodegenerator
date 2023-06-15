function timeHeading(){
    var currentTime=new Date();
    var currentHour=currentTime.getHours();
    var hdoc=document.getElementById("timer");
    if(currentHour < 12){
        hdoc.textContent="Good morning";
    }
    else if(currentHour<18){
        hdoc.textContent="Good afternoon";
    }
    else {
        hdoc.textContent="Good evening";
    }
}

function k() {
    var subText = document.getElementById("myInput");
    var url = subText.value;
    var qrPlacer=document.getElementById("qrimage");
    var qrcode=new QRCode(qrPlacer,{
        text: url,
        width: 256,
        height: 256
    })
}
timeHeading();
var btn=document.getElementById("myForm");
btn.addEventListener("submit",function (event){
   event.preventDefault();
   k();
});


