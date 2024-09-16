import { Outlet } from "react-router-dom";
import { ILogButton, ILogo } from "../../../shared/interfaces/models";
import LogButton from "../../ui/LogButton/LogButton";
import Logo from "../Logo";

// const button: ILogButton = {
//   title: 'click me',
//   color: 'text-black',
//   bgColor: 'bg-white',
//   width: 'w-20',
//   height: 'h-10'
// }

const logButtonProps: ILogButton = {
  title: "Login",
  to: "/login",
  styles: "log-button mt-10 ml-10 text-xl text-center rounded-xl ",
};

const regButtonProps: ILogButton = {
  title: "Sign up",
  to: "/signup",
  styles: "reg-button mt-10 ml-10 text-xl text-center rounded-xl ",
};

const logo: ILogo = {
  title: "BadmiLearn",
};

function TopBar() {
  return (
    <>
      <div className="fixed top-0 z-50 flex w-full justify-between bg-[#282828] px-10">
        <Logo logo={logo} />
        <div className="flex">
          <LogButton button={logButtonProps} />
          <LogButton button={regButtonProps} />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default TopBar;
