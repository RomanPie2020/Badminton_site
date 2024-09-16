import { SubmitHandler } from "react-hook-form";
import { useLogInMutation } from "../../services/AuthService";
import { ILogInData } from "../../shared/interfaces/models";
import LogInForm from "../ui/forms/LogInForm";

const LogIn = () => {
  const [login] = useLogInMutation();
  const onSubmit: SubmitHandler<ILogInData> = async (req) => {
    const res = await login(req);
    console.log(res);
  };

  return (
    <div>
      <div className="bg-log_reg_bg mt-28 h-screen bg-cover bg-no-repeat pt-48 text-center">
        <h1 className="mb-20 text-7xl">LogIn</h1>
        <LogInForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default LogIn;
