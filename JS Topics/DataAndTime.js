// Date();
// Date().set
// console.log(Date())


// function hello(){
//     const now = new Date();
//     console.log(now)
//     console.log((now.getHours()));
    
//     }
    
// hello()
    

function updateTime() {
    const now = new Date();
    //method of function for 
    //padStart method of strings 
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Assuming there's an element with id "watch" in your HTML
    document.getElementById('watch').textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  // Update time every second
  // setInterval(function name , time , optional argument)
  setInterval(updateTime, 1000);
  updateTime(); // Call it initially to show the time immediately
  