import  {ReactNode} from 'react'
import {ILogButton} from "../../../shared/interfaces/models"
import {Link} from "react-router-dom";

interface ButtonProps{
  button: ILogButton
  // children?: ReactNode
}

const LogButton = ({ button }: ButtonProps) => {
  return (
    <Link className={`${button.styles}`} to={button.to}>{button.title}</Link>
  )
}

export default LogButton

