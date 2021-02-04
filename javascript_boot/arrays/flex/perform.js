const temperatures = [
  { degrees: 69, isRecordTemp: false},
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false},
  { degrees: 64, isRecordTemp: false}
];

const newTemps = temperatures.map(temperature => //map transforms our entire array
    temperature.degrees> 70 ? {...temperature, isHigh: true}: temperature
    //temperature.isRecordTemp = true;
    // sets the isRecordTemp property to true
).forEach(temperature=>{
    if(temperature.isHigh){
        console.log(`Temperature ${temperature.degrees} was a record high last week`)
    } // example method chain
})
//map applies a given transformation. To every single element of the array

//forEach() doesn't create a new array. Use it for formatted arrays
 
console.log(newTemps);