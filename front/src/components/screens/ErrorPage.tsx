import { useRouteError } from "react-router-dom"
import LogButton from "../ui/LogButton/LogButton"
import { ILogButton } from "../../shared/interfaces/models"


const buttonProps: ILogButton = {
  title: "Home",
  styles: "reg-button",
  to: "/"
}


export const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  
  return (
    <>
      <div className="text-center">
        <h1 className="text-6xl mb-10">Oops!</h1>
        <p>{error.statusText ?? error.message}</p>
        <p>{error.status}</p>
        <LogButton button={buttonProps}/>  
      </div>
    </>
  )
}

