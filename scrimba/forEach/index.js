//import iro from '@jaames/iro';
//var colorPicker = new iro.ColorPicker('#picker',{
//    width: 250,
//    color: '#f00'
//});
const squares = document.querySelectorAll('div')

const changeColor = () => {
    console.log('Color has been changed')
}

squares.forEach(square => {
    square.addEventListener('click', changeColor)
})

