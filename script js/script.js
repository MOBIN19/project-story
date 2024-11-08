
let $ = document;
let slide = $.getElementsByClassName('slide')
let prev = $.querySelector('.prev')
let next = $.querySelector('.next')
let dot =$.getElementsByClassName('dot')
let n=0;
let i;

function disno(){
for(i=0;i<slide.length;i++){
slide[i].style.display='none'
}}

function no_active(){
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove('active')
    }
}


next.addEventListener('click',function(e){
    e.preventDefault();
    n++;
    if(n>slide.length-1){
        n=0;
    }
    disno();
    no_active();
    slide[n].style.display='block'
    dot[n].classList.add('active');
})

prev.addEventListener('click',function(e){
    e.preventDefault();
    n--;
    if(n<0){
        n=slide.length-1;
    }
    disno();
    no_active();
    slide[n].style.display='block'
    dot[n].classList.add('active');
})

setInterval(function(){
    n++;
    if(n>slide.length-1){
        n=0;
    }
    disno();
    no_active();
    slide[n].style.display='block'
    dot[n].classList.add('active');

},5000)

///////product/////


let slider_product = document.getElementById("slider-product");
let slider = document.getElementsByClassName("slider-p");


function nextp(){
    slider_product.append(slider[0]);
}

function prevp(){
    slider_product.prepend(slider[slider.length-1])
}


setInterval(function(){
    slider_product.append(slider[0]);


},4000)

///////////best product/////////


let slider_productbest = document.getElementById("best-product");
let sliderb = slider_productbest.getElementsByClassName("slider-p");


function nextb(){
    slider_productbest.append(sliderb[0]);
}

function prevb(){
    slider_productbest.prepend(sliderb[sliderb.length-1])
}

setInterval(function(){
    slider_productbest.append(sliderb[0]);


},4000)


let slider_productnew = document.getElementById("new-product");
let slidernew = slider_productnew.getElementsByClassName("slider-p");


function nextnew(){
    slider_productnew.append(slidernew[0]);
}

function prevnew(){
    slider_productnew.prepend(slidernew[slidernew.length-1])
}

setInterval(function(){
    slider_productnew.append(slidernew[0]);


},4000)



let slider_Articles = document.getElementById("Articles");
let sliderArticle = slider_Articles.getElementsByClassName("Article");


function nextarticle(){
    slider_Articles.append(sliderArticle[0]);
}

function prevarticle(){
    slider_Articles.prepend(sliderArticle[sliderArticle.length-1])
}

setInterval(function(){
    slider_Articles.append(sliderArticle[0]);


},4000)


let items = document.querySelectorAll('.item-mobile');

items.forEach(item => {

   item.addEventListener('click', function(){
   items.forEach(item => {
      if(item.classList.contains('active-menu')){
      item.classList.remove('active-menu');
   }
   });
 
   item.classList.add('active-menu');
   });
});



function hidmenu(){
   let menumobile=document.querySelector('.menu-mobile')
   menumobile.style.display='none'

}
function showmenu(){
    let menumobile=document.querySelector('.menu-mobile')
    menumobile.style.display='block'
}

