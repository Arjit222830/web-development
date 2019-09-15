        var slideIndex,slides,nSlide,dott,flag=0;
        slideIndex=0;
        function initGallery()
        {
            slides=document.getElementsByClassName("imageHolder");
            slides[slideIndex].style.opacity=1;
            dott=[];
            var dotsContainer= document.getElementById("dotsContainer");
            for(var i=0;i<slides.length;i++)
            {
                var dot=document.createElement("span");
                dot.classList.add("dots");
                dotsContainer.append(dot);
                dott.push(dot);
            }
            dott[slideIndex].classList.add("active");
        }
        setTimeout(function () {
                move(1);
            }, 5000);
        
        function move(side) 
        {
          if(flag==0)
           {
               // side = 0 (left)
            if (side == 0) 
            {
                //next slide
                if (slideIndex == 0) 
                    nSlide = slides.length - 1;
                else
                    nSlide = slideIndex - 1;
            } 
            else //side=1 (right)
            {
                
                if (slideIndex == slides.length-1) 
                    nSlide = 0;
                else
                    nSlide = slideIndex + 1;
            }
           }
            slides[slideIndex].style.opacity=0;
            dott[slideIndex].classList.remove("active");
            slides[nSlide].style.opacity=1;
            dott[nSlide].classList.add("active");
            slideIndex = nSlide;
            flag=0;
            /*setTimeout(function () {
                move(1);
            }, 3000);*/
        }
        initGallery();
        
        for (var i = 0; i<dott.length; i++)
        {
            circle(i);
        }
        
        function circle(i)
        {
            dott[i].onclick = function() {
                    nSlide=i;
                    console.log(nSlide);
                    flag=1;
                    move(0);    
            };
        }