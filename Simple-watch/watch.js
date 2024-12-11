const watch = ()=>{
    const time = new Date()
    const hours = String(time.getHours()).padStart(2 , '0')
    const min = String(time.getMinutes()).padStart(2 , '0')
    const sec = String(time.getSeconds()).padStart(2 , '0')
    
    document.getElementById('watch').textContent = `${hours}:${min}:${sec}`
    document.addEventListener('mousemove', (e) => {
        const sparkle = document.getElementsByClassName('warpper');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);
      
        gsap.set(sparkle, {
          x: e.pageX,
          y: e.pageY,
          scale: gsap.utils.random(0.5, 1.5),
        });
      
        gsap.to(sparkle, {
          opacity: 0,
          scale: 2,
          duration: 1,
          onComplete: () => sparkle.remove(),
        });
      });
}

setInterval(watch , 1000);

watch()


