const watch = ()=>{
    const time = new Date()
    const hours = String(time.getHours()).padStart(2 , '0')
    const min = String(time.getMinutes()).padStart(2 , '0')
    const sec = String(time.getSeconds()).padStart(2 , '0')
    
    document.getElementById('watch').textContent = `${hours}:${min}:${sec}`
}

setInterval(watch , 1000);

watch()
