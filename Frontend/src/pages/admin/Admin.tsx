import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo-full.svg'
import StatCard from "@/components/StatCard";
import appoinments from '../../assets/icons/appointments.svg'
import pendings from '../../assets/icons/pending.svg'
import cancelleds from '../../assets/icons/cancelled.svg'
import { useGetAllAppointmentsQuery } from "@/redux/features/appointment/appointmentApi";
import {DataTable} from "@/components/DataTable";
import {columns} from "@/components/table/columns";

const Admin = () => {

    const {data} = useGetAllAppointmentsQuery([])
    return (
        <div className="mx-auto flex max-w-7xl flex-col space-y-14">
            <header className="admin-header">
                <Link to='/' className=" cursor-pointer">
                <img src={logo} alt="logo" height={32} width={162} className="h-8 w-fit" />
                </Link>
                <p className="text-16-semibold">Admin Dashboard</p>
            </header>
            <main className="admin-main">
                <section className="w-full space-y-4">
                    <h1 className="header">Welcome 👋</h1>
                    <p className="text-dark-700">Start the day with managing new appointments</p>
                </section>
                <section className="admin-stat">
                    <StatCard 
                      type="appointment"
                      count={data?.data?.meta?.scheduledCount}
                      label="Scheduled appointments"
                      icon={appoinments}
                     />
                    <StatCard 
                      type="pending"
                      count={data?.data?.meta?.pendingCount}
                      label="Pending appointments"
                      icon={pendings}
                     />
                    <StatCard 
                      type="cancelled"
                      count={data?.data?.meta?.cancelledCount}
                      label="Cancelled appointments"
                      icon={cancelleds}
                     />
                </section>
                <DataTable columns={columns} data={data?.data?.result} />
            </main>
        </div>
    );
};

export default Admin;