let sun = document.querySelector('.sun');
let nam = document.querySelector('.name');
let inf = document.querySelector('.info');
let rav1 = document.querySelector('.rav1');
let rav2 = document.querySelector('.rav2');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let three = document.querySelector('.three');
let border1 = document.querySelector('.border1');
let phead = document.querySelector('.projhead');
let inf1 = document.querySelector('.info1');
let border2 = document.querySelector('.border2');
let phead2 = document.querySelector('.projhead2');
let inf2 = document.querySelector('.info2');
let maxscroll = 500;

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // const triggerPoint = window.innerHeight / 1.5; 
    // const triggerPoint2 = window.innerHeight / 2.0; 
    
    if(value<=maxscroll){
        nam.style.left = value * -1.5 + 'px';
        inf.style.left = value * -1.5 + 'px';
    }

    let maxravScroll = 100;
    if(value<=maxravScroll){
        sun.style.top = value * -1.5 + 'px';
        sun.style.left = value * 1.5 + 'px';
        rav2.style.top = value * -1.5 + 'px';
        rav2.style.left = value * 1.5 + 'px';
        rav1.style.top = value * 1.5 + 'px';
        rav1.style.left = value * 1.5 + 'px';
    }

    let fadeOutStart = 200;
    let fadeOutEnd = 200; 

    let fadeOutStartR = 300;
    let fadeOutEndR = 300; 
    
    let fadeOutStartT = 500;
    let fadeOutEndT = 500; 
    
    let fadeInStart = 200; 
    let fadeInStartR = 300;
    let fadeInStartT = 500;
    let fadeInEnd = 500;
    let fadeInEndR = 600;
    let fadeInEndT = 800;

    if (value < fadeOutStart) {
        left.style.opacity = '0';
    }else if (value >= fadeOutStart && value <= fadeOutEnd) {
        left.style.opacity = 1 - (value - fadeOutStart) / (fadeOutEnd - fadeOutStart);
    } else if (value >= fadeInStart && value <= fadeInEnd) {
        left.style.opacity = (value - fadeInStart) / (fadeInEnd - fadeInStart);
    } else if (value > fadeOutEnd && value < fadeInStart) {
        left.style.opacity = '0';
    }

    if(value < fadeOutStartR){
        right.style.opacity = '0';
    }else if(value >= fadeOutStartR && value <= fadeOutEndR){
        right.style.opacity = 1 - (value - fadeOutStartR) / (fadeOutEndR - fadeOutStartR);
    }else if(value >= fadeInStartR && value <= fadeInEndR){
        right.style.opacity = (value - fadeInStartR) / (fadeInEndR - fadeInStart);
    }else if (value > fadeOutEndR && value < fadeInStartR){
        right.style.opacity = '0';
    }else{
        right.style.opacity = '1';
    }

    if(value < fadeOutStartT){
        three.style.opacity = '0';
    }else if(value >= fadeOutStartT && value <= fadeOutEndT){
        three.style.opacity = 1 - (value - fadeOutStartT) / (fadeOutEndT - fadeOutStartT);
    }else if(value >= fadeInStartT && value <= fadeInEndT){
        three.style.opacity = (value - fadeInStartT) / (fadeInEndT - fadeInStart);
    }else if (value > fadeOutEndT && value < fadeInStartT){
        three.style.opacity = '0';
    }else{
        three.style.opacity = '1';
    }

    // let maxscrollp1 = 1450;

    // if(value > triggerPoint && value <= maxscrollp1){
    //     border1.style.left = (value-1400) * 1.5 + 'px';
    //     phead.style.left = (value-1400) * 1.5 + 'px';
    //     inf1.style.left = (value-1400) * 1.5 + 'px';
    // }

    // let maxscrollp2 = 2000;

    // if(value < 1600){
    //     border2.style.opacity = 0;
    //     phead2.style.opacity = 0;
    //     inf2.style.opacity = 0;
    // }

    // if (value > 1800 && value <= maxscrollp2) {

    //     border2.style.opacity = 1;
    //     phead2.style.opacity = 1;
    //     inf2.style.opacity = 1;
    //     border2.style.right = (value-1800) + 'px';
    //     phead2.style.right = (value-1800) + 'px';
    //     inf2.style.right = (value-1800) + 'px';
    // }
    
});
