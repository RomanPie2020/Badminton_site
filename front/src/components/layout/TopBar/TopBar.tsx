import React from 'react'
import SearchInput from "../../ui/SearchInput/SearchInput"
import LogButton from "../../ui/LogButton/LogButton";
import {ILogButton} from "../../../shared/interfaces/models";
import {Link, Outlet} from "react-router-dom";

// const button: ILogButton = {
//   title: 'click me',
//   color: 'text-black',
//   bgColor: 'bg-white',
//   width: 'w-20',
//   height: 'h-10'
// }


const logButtonProps: ILogButton = {
  title: 'Login',
  to: "/login",
  styles: 'log-button mt-10 ml-10',
}

const regButtonProps: ILogButton = {
  title: 'Sign up',
  to: "/signup",
  styles: 'reg-button mt-10 ml-10',
}

function TopBar() {
  return (
    <>
      <div className="flex fixed top-0 w-full bg-[#282828]">
        <Link className="text-white pt-10 pb-10 pl-20 bg-logo bg-no-repeat bg-left" to="/">
          QuickPaste
        </Link>
        <SearchInput/>
        <LogButton button={logButtonProps}/>
        <LogButton button={regButtonProps}/>
      </div>
      <Outlet/>
    </>
  )
}

export default TopBar