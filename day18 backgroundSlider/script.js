const body = documnent.body;
const slides = document.querySelectorAll('.slides')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 1; 
rightBtn.addEventListener('click', ()=>{
    activeSlide++
    if(activeSlide > slides.length - 1){
        activeSlide = 0 ;
    }
    setBgToBody()
    setActiveSlide()
})
leftBtn.addEventListener('click', ()=>{
    activeSlide--
    if(activeSlide < 0){
        activeSlide = slides.length -1 ;
    }
    setBgToBody()
    setActiveSlide()
})
setBgToBody()

function setBgToBody(){
    body.style.backroundImage = slides[activeSlide].style.backgroundImage 
}

function setActiveSlide(){
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    slides[activeSlide].classList.add('active');
}
