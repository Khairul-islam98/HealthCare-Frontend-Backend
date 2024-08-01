import image1 from "../assets/images/dr-cameron.png";
import image2 from "../assets/images/dr-cruz.png";
import image3 from "../assets/images/dr-green.png";
import image4 from "../assets/images/dr-lee.png";
import image5 from "../assets/images/dr-livingston.png";
import image6 from "../assets/images/dr-powell.png";
import image7 from "../assets/images/dr-remirez.png";
import image8 from "../assets/images/dr-sharma.png";
import image9 from "../assets/images/dr-peter.png";

export const GenderOptions = ["Male", "Female", "Other"];
type Gender = "Male" | "Female" | "Other";

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: image1,
    name: "John Green",
  },
  {
    image: image2,
    name: "Leila Cameron",
  },
  {
    image: image3,
    name: "David Livingston",
  },
  {
    image: image4,
    name: "Evan Peter",
  },
  {
    image: image5,
    name: "Jane Powell",
  },
  {
    image: image6,
    name: "Alex Ramirez",
  },
  {
    image: image7,
    name: "Jasmine Lee",
  },
  {
    image: image8,
    name: "Alyana Cruz",
  },
  {
    image: image9,
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "../src/assets/icons/check.svg",
  pending: "../src/assets/icons/pending.svg",
  cancelled: "../src/assets/icons/cancelled.svg",
};

// patient.interface.ts
export interface IPatient {
  _id: string;
  userId?: string;
  name: string;
  email: string;
  phone: string;
  privacyConsent?: boolean;
  treatmentConsent?: boolean;
  disclosureConsent?: boolean;
  gender?: "Male" | "Female" | "Other";
  birthDate: string;
  addresss?: string;
  occupation?: string;
  emergencyContactName?: string;
  emergencyContactNumber?: string;
  primaryPhysician?: string;
  insuranceProvider?: string;
  insurancePolicyNumber?: string;
  allergies?: string;
  currentMedication?: string;
  familyMedicalHistory?: string;
  pastMedicalHistory?: string;
  identificationType?: string;
  identificationNumber?: string;
  identificationDocument?: string;
}

export type Status = "scheduled" | "pending" | "cancelled";

export interface IAppointment {
  _id: string;
  patientId: IPatient;
  userId: string;
  schedule: Date;
  status: "pending" | "scheduled" | "cancelled";
  primaryPhysician: string;
  reason?: string;
  note?: string;
  cancellationReason?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
