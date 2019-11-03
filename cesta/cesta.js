var i01= document.getElementById('image01');
var data= document.getElementById('data');
var navbar= document.getElementById('navbar');
var navLink= document.getElementsByClassName('nav-link');
var navBrand= document.getElementsByClassName('navbar-brand');
var overlappedImages= document.getElementsByClassName('overlapped)images');

var vw,vh,zI;
var ar=[];
for(var i=0;i<overlappedImages.length;i++)
    ar.push(overlappedImages[i]);

$('.overlapped_images').hover(function(){
    zI = $( this ).css( "zIndex");
    $(this).css("zIndex", "2");
    }, function(){
    $(this).css("zIndex", zI);
});

window.onresize= ()=>{
    resize();
 }

function resize(){
    if(window.innerWidth<550)
    {
        vw=65;
        vh=15;
        i01.style.width=vw*innerWidth/100;
        i01.style.height=vh*innerHeight/100;
        data.style.width=90*innerWidth/100;
        console.log(data.style.marginLeft);
    }
    else
    {
        vw=35;
        vh=17;
        i01.style.width=vw*innerWidth/100;
        i01.style.height=vh*innerHeight/100;
        data.style.width=50*innerWidth/100;
        console.log(data.style.marginLeft);
    }
}

resize();