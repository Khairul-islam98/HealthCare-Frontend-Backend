import { Link, useParams, useSearchParams } from "react-router-dom";
import logo from "../../../../assets/icons/logo-full.svg";
import successGif from '../../../../assets/gifs/success.gif'
import { useGetSingleAppointmentQuery } from "@/redux/features/appointment/appointmentApi";
import { Doctors } from "@/constant";
import calendar from '../../../../assets/icons/calendar.svg'
import { formatDateTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Success = () => {
    const {userId} = useParams();
    const [searchParams] = useSearchParams();
    const appointmentId = searchParams.get("appointmentId");
    const {data} = useGetSingleAppointmentQuery(appointmentId)

    const doctor = Doctors.find((doc)=> doc.name === data?.data?.primaryPhysician);
  return (
    <div className="flex  px-[5%]">
      <div className="success-img">
        <Link to="/">
          <img
            src={logo}
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center">
            <img src={successGif} height={300} width={280}  alt="success" />
        <h2 className="header mb-6 mx-w-[600px] text-center">
          You <span className="text-green-500">appointment request</span> has
          been successfully submitted!
        </h2>
        <p>We will be in touch shortly to confirm.</p>
        </section>
        <section className="request-details">
            <p>Requested appointment details:</p>
            <div className="flex items-center gap-3">
                <img src={doctor?.image} width={100} height={100} alt="doctor" className="size-6" />
                <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
            </div>
            <div className="flex gap-2">
                <img src={calendar} height={24} width={24}  alt="calendar" />
                <p>{formatDateTime(data?.data?.schedule).dateTime}</p>
            </div>
        </section>
        <Button variant='outline' className="shad-primary-btn" asChild>
            <Link to={`/patient/${userId}/new-appointment`}>
            New Appointment
            </Link>
        </Button>
        <p className="copyright">© 2024 HealthCare</p>
      </div>
    </div>
  );
};

export default Success;
