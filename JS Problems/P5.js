// **** password generator ****
let lengthOfPassword = int(prompt("Enter the length if the password: " ));
values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
function generator(values , length){
    let password ='';
for (let i = 0; i < length ; i++){
    // math.floor will change the float number into the integer 
    password += values[Math.floor(Math.random() * values.length)]
}   
    return password;
};

console.log(generator(values , lengthOfPassword))