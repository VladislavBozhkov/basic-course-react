
import './Button.css'

interface ButtonProps {
  text: string
  onChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button:React.FC<ButtonProps> = (props) => {
  
    return (
      <button className='button active' onClick={props.onChange}>
        {props.text}
      </button>
    )
  
}

export default Button;


