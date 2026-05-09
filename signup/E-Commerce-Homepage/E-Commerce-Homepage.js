

 const targetDate = new Date("May 30, 2026 23:59:59").getTime();



function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;



    const allCountdowns = document.querySelectorAll(".countdown-wrapper");

   


    if (allCountdowns.length === 0) {

        console.log("مش لاقي أي عنصر واخد كلاس countdown-wrapper");

        return;

    }



    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);



    allCountdowns.forEach(container => {

        if (distance > 0) {

            // بنحدث العناصر اللي جوه الحاوية دي

            const d = container.querySelector(".days");

            const h = container.querySelector(".hours");

            const m = container.querySelector(".minutes");

            const s = container.querySelector(".seconds");



            // بنأكد إن العناصر موجودة فعلاً قبل ما نغير قيمتها

            if(d) d.innerText = days.toString().padStart(2, '0');

            if(h) h.innerText = hours.toString().padStart(2, '0');

            if(m) m.innerText = minutes.toString().padStart(2, '0');

            if(s) s.innerText = seconds.toString().padStart(2, '0');

        } else {

            container.innerHTML = "EXPIRED";

        }

    });

}





setInterval(updateCountdown, 1000);

updateCountdown();



setInterval(updateCountdown, 1000);



const interval = setInterval(updateCountdown , 1000) ;



const tra = document.getElementById('tra');

const btnNext = document.querySelector('.x');

const btnPrev = document.querySelector('.y');



let counter = 0;





btnNext.addEventListener('click', () => {

    const productCard = document.querySelector('.product');

    const cardWidth = productCard.offsetWidth + 30;

    const maxScroll = tra.children.length - 4;



    if (counter < maxScroll) {

        counter++;

        tra.style.transform = `translateX(-${counter * cardWidth}px)`;

    }

});





btnPrev.addEventListener('click', () => {

    const productCard = document.querySelector('.product');

    const cardWidth = productCard.offsetWidth + 30;



    if (counter > 0) {

        counter--;

        tra.style.transform = `translateX(-${counter * cardWidth}px)`;

    }

});



const products = document.querySelectorAll('.product');

products.forEach(product =>{

    product.addEventListener('click' , function(){

        const currentActive = document.querySelector('.product.active') ;

        if (currentActive){

            currentActive.classList.remove('active');

        }

        this.classList.add('active') ;

    });

});

