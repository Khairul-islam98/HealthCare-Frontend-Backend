/* eslint-disable @typescript-eslint/ban-ts-comment */
import appoinment from '../../../assets/images/appointment-img.png'
import logo from '../../../assets/icons/logo-full.svg'
import AppointmentForm from '@/components/forms/AppointmentForm';
import { useParams } from 'react-router-dom';
import { useGetSinglePatientQuery } from '@/redux/features/patient/patientApi';

const NewAppointment = () => {
  const { user: userId } = useParams<{ user?: string }>();
  const { data: patient } = useGetSinglePatientQuery(userId);

  return (
    <div className="flex">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <img
            height={1000}
            width={1000}
            className="mb-12 h-10 w-fit"
            src={logo}
            alt=""
          />
          {/* @ts-ignore */}
          <AppointmentForm type="create" userId={userId} patientId={patient?.data?._id} />
          <div className="text-14-regular flex mt-20 justify-between">
            <p className="copyright mt-10">© 2024 HealthCare</p>
          </div>
        </div>
      </section>
      <img src={appoinment} height={1000} width={1000} className="side-img h-full max-w-[390px] bg-bottom" alt="" />
    </div>
  );
};

export default NewAppointment;
