import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper(".swiper", {
    speed: 1500,
    onAny(){
        try{
            document.getElementById('currentSlide').innerText = swiper.activeIndex + 1;
        }catch(e){}
    }
});

document.getElementById('countSlide').innerText = swiper.slides.length;

document.getElementById('nextSlide').addEventListener('click', ()=>{
    swiper.slideNext();
});

window.addEventListener('keyup', (e) => {
    if(e.key === 'ArrowRight'){
        swiper.slideNext();
    }

    if(e.key === 'ArrowLeft'){
        swiper.slidePrev();
    }
});