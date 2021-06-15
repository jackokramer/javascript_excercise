
const Button = ({increment, onClick}) =>{
    const handleClick = () =>{
        onClick(increment)
    }
    return <button onClick={handleClick}>+{increment}</button>
}

export default Button
