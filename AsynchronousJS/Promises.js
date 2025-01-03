// States: Pending, Fulfilled, Rejected.
// new keyword : Creates a New Object
let meraPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("This is my promise.");
    }, 2000);
});