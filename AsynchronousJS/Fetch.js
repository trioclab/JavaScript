

/// get call fetch APi key 
async function getData() {
        const url = "https://example.org/products.json";
        try {
            let response = await fetch(url)
            if(!response.ok){
                throw new Error(`${response.status}`);
            }
            const data = await response.json()
            console.log(data);
            
        } catch (error) {
            console.error(error.message);
        }
}
/// Post call APi key 

async () => {
    const rawResponse = await fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: "Sania", age: 18})
    });
    const content = await rawResponse.json();
    console.log(content);
  };