// ***** set timeout function ****

setTimeout(()=> {
        console.log("It will after 10 second minimum time");
        
}, 60000);

setTimeout(() => {
    console.log("Third");
    
}, 10000);
function sync(){
    console.log("second");
}
sync();
console.log("first");
