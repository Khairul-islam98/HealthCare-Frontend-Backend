/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from "@tanstack/react-table";
import StatusBadge from "../StatusBadge";
import { formatDateTime } from "@/lib/utils";
import { Doctors, IAppointment } from "@/constant";
import AppointmentModal from "../AppointmentModal";

export const columns: ColumnDef<IAppointment, any>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
  },
  {
    accessorKey: "patientId",
    header: "Patient",
    cell: ({ row }) => (
      <p className="text-14-medium">{row.original.patientId.name}</p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="min-w-[115px]">
        <StatusBadge status={row.original.status} />
      </div>
    ),
  },
  {
    accessorKey: "schedule",
    header: "Appointment",
    cell: ({ row }) => (
      <p className="text-14-regular min-w-[100px]">
        {formatDateTime(row.original.schedule).dateTime}
      </p>
    ),
  },
  {
    accessorKey: "primaryPhysician",
    header: "Doctor",
    cell: ({ row }) => {
      const doctor = Doctors.find(
        (doc) => doc.name === row.original.primaryPhysician
      );

      return (
        <div className="flex items-center gap-3">
          <img
            src={doctor?.image}
            alt={doctor?.name}
            width={100}
            height={100}
            className="size-8"
          />
          <p className=" whitespace-nowrap">Dr. {doctor?.name}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => (
      <div className="flex gap-1">
        <AppointmentModal 
          type="schedule"
          patientId={row.original.patientId._id} 
          userId={row.original.userId} 
          appointment={row.original}
        />
        <AppointmentModal 
          type="cancel"
          patientId={row.original.patientId._id} 
          userId={row.original.userId} 
          appointment={row.original}
        />
      </div>
    ),
  },
];
