function artistFinder(song){
	if(song === 'Sound of Silence'){
    	return 'Simon and Garfunkel';
    } else if(song === 'Hey Jude'){
    	return  'The Beatles';
    } else if(song === 'Time in a Bottle'){
		return 'Jim Croce';
        } else if(song === 'Message in a Bottle'){
		return 'The Police';
    } else{
    	return "I don't know that one.";
    }
}

// code
console.log(artistFinder('Message in a Bottle'));