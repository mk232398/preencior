
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollToPlugin);

gsap.from(".textOld", {opacity: 0, delay: 2})
gsap.to(".wishesTextHer", {
    
    text: {
        value: `wszystkiego najlepszego, zdrowia, szczęścia i innych pierdół tradycyjnie &#129315, prawdziwych oraz dobrych ludzi wokół siebie, no i życzę Ci żebyś miala zawsze dobry powód, żeby wstawać codziennie rano z nadzieją, że to co robisz ma sens, po prostu wish you all the best! Lecimy dalej przez to życie &#128170 `,
        speed: "0.5"
    },
    ease: "none",
    delay: 5
})


let cursor = gsap.from('.cursor', {duration: .7, opacity:0, ease: "power2.inOut", repeat:-1, delay: 2})


document.querySelectorAll("button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:`#section${index === 0 ? 2 : 1}`, }, ease: "bounce.out"});
    });
  });
  document.querySelector('.prezencik').addEventListener('click', ()=>{
      gsap.to(window, {duration: 1, scrollTo:{y: '#section3'}, ease: "bounce.out"})
  })

  for(let i = 2; i<10; i++){
      let randomInt = Math.random() * 8;
    gsap.to(`.balonik${i}`, {duration: randomInt + 6, delay: randomInt, repeat: -1, y: window.innerHeight + 100, ease: "none"})
  }



  let prezent
  


  document.querySelector('#section1Btn').addEventListener('click', ()=>{
      prezent = gsap.to('.prezencik', {delay: 2, scale: 1.3, repeat: -1, yoyo: true, duration: .3})
  })
  document.querySelector('#section2Btn').addEventListener('click', ()=>{
    
    prezent.pause()
    gsap.set('.prezencik', {scale: 1});
    prezent.kill();
    

  })
