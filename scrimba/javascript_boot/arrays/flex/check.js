const temperatures = [
    {degrees:60, isRecordTemp: false},
    {degrees:20, isRecordTemp: false}, 
    {degrees:30, isRecordTemp: false}, 
    {degrees:50, isRecordTemp: false}, 
    {degrees:64, isRecordTemp: false}, 
    {degrees:82, isRecordTemp: true}
]; // 0,1,2,3

//console.log(temperatures.indexOf(42)> -1) // indexOf couldn't find that elment use includes instead
//console.log(temperatures.includes(5));

// -1 is the way for indexOf to show that the number is not found in that array

const result = temperatures.some(temperature => temperature.isRecordTemp === true);
const results = temperatures.every(temperature => temperature.isRecordTemp === true);
//console.log(result);
//console.log(results);

//includes, sum, every => more concise with arrow functions

// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const wonGrammy = songs.some(song=> song.wonGrammy===true) // you can remove ===true and it still works
console.log(wonGrammy)
const timesStreamed = songs.every(song => song.timesStreamed> 1.5)

console.log(timesStreamed)