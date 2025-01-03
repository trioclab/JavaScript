// example
// in nesting system there is refrence not copy 

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  
  let a = init()
  a()