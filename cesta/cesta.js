var navbar= document.getElementById('navbar');

var x;

window.onscroll = function() {
    scroll();
};

window.onresize= function(){
    resize();
}

function scroll() {
    if (document.body.scrollTop >= x)
    {
        navbar.style.backgroundImage= "linear-gradient( 112.2deg,  rgba(2,28,186,1) 4.1%, rgba(86,223,223,1) 110.7%)";
        navbar.style.opacity= ".95";
    }
    else
    {
        navbar.style.backgroundImage= "";
        navbar.style.opacity= "1";
    }
}

function resize(){
    var vh= 35;
    x= window.innerHeight*vh/100;
}

resize();

