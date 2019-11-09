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
        navbar.style.backgroundImage= "linear-gradient( 112.2deg,  rgba(86,223,223,1) 4.7%, rgba(2,28,186,1) 110.1% )";
        console.log("hello");
    }
    else
        navbar.style.backgroundImage= "";
}

function resize(){
    var vh= 40;
    x= window.innerHeight*vh/100;
}

resize();

