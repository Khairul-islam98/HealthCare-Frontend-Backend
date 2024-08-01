import {  useParams } from "react-router-dom";
import logo from "../../assets/icons/logo-full.svg";
import register from "../../assets/images/register-img.png";
import RegisterForm from "@/components/forms/RegisterForm";

const Register = () => {
    const {id: user} = useParams();
  return (
    <div className="flex">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <img
            src={logo}
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <div className="text-14-regular flex mt-20 justify-between">
            <p className="copyright py-12">
              © 2024 HealthCare
            </p>
          </div>
        </div>
      </section>
      <img
        src={register}
        height={1000}
        width={1000}
        className="hidden h-full object-cover max-w-[420px] md:block"
        alt=""
      />
    </div>
  );
};

export default Register;
