import { useForm } from "react-hook-form";
import CustomFormField from "../CustomFormField";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { CreateAppointmentSchema } from "@/lib/validation";
import { useNavigate } from "react-router-dom";
import { FormFieldTypes } from "./PatientForm";
import { Doctors, IAppointment } from "@/constant";
import { SelectItem } from "../ui/select";
import {
  useCreateAppointmentMutation,
  useGetUpdateAppointmentMutation,
  useSendMessageCreateMutation,
} from "@/redux/features/appointment/appointmentApi";
import { formatDateTime } from "@/lib/utils";

const AppointmentForm = ({
  userId,
  patientId,
  type,
  appointment,
  setOpen,
}: {
  userId?: string;
  patientId: string;
  type: "create" | "cancel" | "schedule";
  appointment: IAppointment;
  setOpen: (open: boolean) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [createAppointment] = useCreateAppointmentMutation();
  const [updateAppointment] = useGetUpdateAppointmentMutation();
  const [createMessage] = useSendMessageCreateMutation()
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof CreateAppointmentSchema>>({
    resolver: zodResolver(CreateAppointmentSchema),
    defaultValues: {
      primaryPhysician: appointment ? appointment.primaryPhysician : "",
      schedule: appointment ? new Date(appointment?.schedule) : new Date(Date.now()),
      reason: appointment ? appointment.reason : "",
      note: appointment ? appointment.note : "",
      cancellationReason: appointment ? appointment.cancellationReason : "",
    },
  });

  async function onSubmit(values: z.infer<typeof CreateAppointmentSchema>) {
    setIsLoading(true);
    let status;

    switch (type) {
      case "schedule":
        status = "scheduled";
        break;
      case "cancel":
        status = "cancelled";
        break;
      default:
        status = "pending";
        break;
    }

    try {
      if (type === "create" && patientId) {
        const appointmentInfo = {
          userId,
          patientId,
          primaryPhysician: values.primaryPhysician,
          schedule: new Date(values.schedule),
          reason: values.reason,
          note: values.note,
          status: status,
        };
        const res = await createAppointment(appointmentInfo).unwrap();
  
        if (res) {
          form.reset();
          navigate(
            `/patient/${userId}/new-appointment/success?appointmentId=${res?.data?._id}`
          );
        }
      } else {
        const appointmentToUpdate = {
          userId,
          appointmentId: appointment?._id,

          primaryPhysician: values?.primaryPhysician,
          schedule: new Date(values?.schedule),
          status: status,
          cancellationReason: values?.cancellationReason,

          type,
        };
  
        const updatedAppointment = await updateAppointment(
          appointmentToUpdate
        ).unwrap();
        

        const smsMessage = `Hi, it's HealtCare. ${
          type === "schedule"
            ? `Your appointment has been scheduled for ${formatDateTime(
                values?.schedule
              ).dateTime} with Dr. ${appointment.primaryPhysician}`
            : `We regret to inform you that your appointment has been cancelled for the following reason: ${appointment.cancellationReason}`
        }`;
        const smsPayload = {
          to: appointment?.patientId.phone,  
          body: smsMessage 
        };
        
        const res = await createMessage(smsPayload).unwrap();
        console.log("SMS response:", res);

        if (updatedAppointment) {
          setOpen && setOpen(false);
          form.reset();
        }
      }
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  let buttonLabel;

  switch (type) {
    case "cancel":
      buttonLabel = "Cancel Appointment";
      break;
    case "create":
      buttonLabel = "Create Appointment";
      break;
    case "schedule":
      buttonLabel = "Schedule Appointment";
      break;

    default:
      break;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        {type === "create" && (
          <section className="mb-12 space-y-4">
            <h1 className="header">New Appointment</h1>
            <p className="text-dark-700">
              Request a new appointment in 10 seconds
            </p>
          </section>
        )}
        {type !== "cancel" && (
          <>
            <CustomFormField
              fieldType={FormFieldTypes.SELECT}
              control={form.control}
              name="primaryPhysician"
              label="Doctor"
              placeholder="Select a doctor"
            >
              {Doctors.map((doctor) => (
                <SelectItem key={doctor.name} value={doctor.name}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <img
                      src={doctor.image}
                      width={32}
                      height={32}
                      alt={doctor.name}
                      className="rounded-full border border-dark-500"
                    />
                    <p className="text-white">{doctor.name}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>
            <CustomFormField
              fieldType={FormFieldTypes.DATE_PICKER}
              control={form.control}
              name="schedule"
              label="Expected appointment date"
              showTimeSelect
              dateFormat="MM/dd/yyyy - h:mm aa"
            />
            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField
                fieldType={FormFieldTypes.TEXTAREA}
                control={form.control}
                name="reason"
                label="Reason for the appointment"
                placeholder="Enter reason for the appointment"
              />
              <CustomFormField
                fieldType={FormFieldTypes.TEXTAREA}
                control={form.control}
                name="note"
                label="Notes"
                placeholder="Enter notes"
              />
            </div>
          </>
        )}
        {type === "cancel" && (
          <CustomFormField
            fieldType={FormFieldTypes.TEXTAREA}
            control={form.control}
            name="cancellationReason"
            label="Reason for cancellation"
            placeholder="Enter reason for cancellation"
          />
        )}
        <SubmitButton
          isLoading={isLoading}
          className={`${
            type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"
          } w-full`}
        >
          {buttonLabel}
        </SubmitButton>
      </form>
    </Form>
  );
};

export default AppointmentForm;
