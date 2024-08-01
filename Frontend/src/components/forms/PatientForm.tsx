import { useForm } from "react-hook-form";
import CustomFormField from "../CustomFormField";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import user from "../../assets/icons/user.svg";
import email from "../../assets/icons/email.svg";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { UserFormValidation } from "@/lib/validation";
import { useCreateUserMutation } from "@/redux/features/user/userApi";
import { useNavigate } from "react-router-dom";

export enum FormFieldTypes {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phone_input",
  CHECKBOX = "checkbox",
  DATE_PICKER = "date_picker",
  SELECT = "select",
  SKELETON = "skeleton",
}



const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [createUser] = useCreateUserMutation()
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof  UserFormValidation
>>({
    resolver: zodResolver( UserFormValidation
),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit({name, email, phone}: z.infer<typeof  UserFormValidation
>) {
    setIsLoading(true)
    try {
      const userData = {
        name,
        email,
        phone,
      }
      const res = await createUser(userData).unwrap()
      if(res) {
        navigate(`/patient/${res.data?._id}/register`)
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appoinment.</p>
        </section>
        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc={user}
          iconAlt={user}
        />
        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="john.doe@example.com"
          iconSrc={email}
          iconAlt={email}
        />
        <CustomFormField
          fieldType={FormFieldTypes.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(555) 123-4567"
        />
        <SubmitButton isLoading={isLoading}>
          Get Started
        </SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
