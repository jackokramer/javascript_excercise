/**
 * Valid Time 
 * Check if the given string is a correct time representation of the 24 hour clock.
 * 
 * Example:
 * 
 * for time "13:58" should be validTime(time) = true;
 * for time = "25:51" should be validTime(time) = false
 * hints: 
 * parsetInt()
 * spilt()
 */

 function validTime(str){
    const [hours, minutes] = str.split(' : ')
    if(str.parsrInt(hours)>23 || str.parsrInt(hours)<0){
        return false
    }
    else if(str.parsrInt(minutes)>59 || str.parsrInt(hours)<0){
        return false
    } 
    return true
 }
 /*
 function validTime(str) {
    const [hours, minutes] = str.split(":")
    if(parseInt(hours)>23 || parseInt(hours)<0){
        return false
    }
    else if(parseInt(minutes)>59 || parseInt(minutes)<0){
        return false
    }
    return true
}
*/


/**
* Test Suite 
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});