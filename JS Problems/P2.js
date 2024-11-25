    let CarName = prompt("Enter the Car Name");
    let array = [
        {
            name: 'Bogati',
            model: 'X-1',
            color: 'Red',
            year: 2010,
            mileage: 150000
        },
        {
            name: 'Toyota',
            model: 'Corolla',
            color: 'Blue',
            year: 2020,
            mileage: 100000
        },
        {
            name: 'Hyundai',
            model: 'Elantra',
            color: 'Black',
            year: 2015,
            mileage: 120000
        },{
            name: 'Ford',
            model: 'Mustang',
            color: 'White',
            year: 2021,
            mileage: 80000
        }
    ];

    let value = false;
    for(let i = 0; i < array.length; i++){
        if(array[i].name.toLocaleLowerCase() === CarName.toLocaleLowerCase()){
            console.log(`Car Name: ${array[i].name}`);
            console.log(`Model: ${array[i].model}`);
            console.log(`Color: ${array[i].color}`);
            console.log(`Year: ${array[i].year}`);
            console.log(`Mileage: ${array[i].mileage}`);
            value = true;
            return value;
        }
    }

    if(!value){
        console.log("Car not found in the list.");
    }