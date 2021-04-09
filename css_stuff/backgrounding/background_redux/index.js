function loopIt(){
for(let x = 1; x<=15; x++){
    if(x%0 == 0){
        x+2
    } else if(x%3==0){
        x++;
    }
    console.log(x);
}
}

console.log(loopIt());
