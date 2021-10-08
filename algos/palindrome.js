function palindROme(str){
    const caseless = str.toLowerCase();
    let reVersedCase = ''
    for(let x = str.length -1; x >= 0; x--){
        reVersedCase += caseless[x]
    }
    return caseless === reVersedCase
    }

    /******
     * OR..... with built in methods
     */

    function palinDrome(){
        const caselessStr = str.toLowerCase()
        const reversed  = caselessStr.split(' ').revserse().join()
        return caselessStr === reversed
    }