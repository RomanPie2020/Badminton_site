import { Link } from "react-router-dom";
import { ILogo } from "../../shared/interfaces/models";

interface ILogoProps {
  logo: ILogo;
}

function Logo({ logo }: ILogoProps) {
  return (
    <Link
      className="bg-logo bg-left bg-no-repeat pb-10 pl-20 pt-10 text-3xl text-white"
      to="/"
    >
      {logo.title}
    </Link>
  );
}

export default Logo;
