import PatientForm from "@/components/forms/PatientForm";
import logo from "../../assets/icons/logo-full.svg";
import onboarding from "../../assets/images/onboarding-img.png";
import { Link, useSearchParams } from "react-router-dom";
import PasskeyModal from "@/components/PasskeyModal";
const Home = () => {
  const [searchParams] = useSearchParams();
  const admin = searchParams.get('admin');
  const isAdmin = admin === 'true';
  return (
    <div className="flex">
        {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <img
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
            src={logo}
            alt=""
          />
          <PatientForm />
          <div className="text-14-regular flex mt-20 justify-between">
            <p className=" justify-items-end text-dark-600 xl:text-left">© 2024 HealthCare</p>
            <Link to='/?admin=true' className="text-green-500">Admin</Link>
          </div>
        </div>
      </section>
      <img src={onboarding} height={1000} width={1000} className="side-img h-full max-w-[50%]" alt="" />
    </div>
  );
};

export default Home;
