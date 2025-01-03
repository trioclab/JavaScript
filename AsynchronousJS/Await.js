// async function return promise
// basic syntax to make the async function 
async function hi(){
    console.log("return promise in asyc wait");
    
}
console.log(hi());



// here is the api weather suppose we are using to get the weather information
async function mosam(){
    let lahoreWeather = new Promise((resolved , reject)=>{
        setTimeout(() => {
            console.log("Lahore ka weather thanda h!");
        }, 2000);
    })
    let KarachiWeather = new Promise((resolved , reject)=>{
        setTimeout(() => {
            console.log("Karachi ka weather Garam h!");
        }, 3000);
    })
    return [await lahoreWeather, await KarachiWeather]
}
console.log(mosam());




// weather api example for await from the webiste => https://rapidapi.com/
const url = 'https://jsonplaceholder30.p.rapidapi.com/users';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ff1471d251mshcacefc84a4eb56dp1beb9ejsndd040e6c14a9',
		'x-rapidapi-host': 'jsonplaceholder30.p.rapidapi.com'
	}
};
async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();