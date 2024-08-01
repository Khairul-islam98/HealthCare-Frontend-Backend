import { baseApi } from "@/redux/api/baseApi";

const appointmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAppointment: builder.mutation({
      query: (appointmentInfo) => ({
        url: "/appointments",
        method: "POST",
        body: appointmentInfo,
      }),
      invalidatesTags: ["appointments"],
    }),
    getAllAppointments: builder.query({
      query: () => ({
        url: "/appointments",
        method: "GET",
      }),
      providesTags: ["appointments"],
    }),
    getSingleAppointment: builder.query({
      query: (appointmentId) => ({
        url: `/appointments/${appointmentId}`,
        method: "GET",
      }),
      providesTags: ["appointments"],
    }),
    getUpdateAppointment: builder.mutation({
      query: ({ appointmentId, ...data }) => ({
        url: `/appointments/${appointmentId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["appointments"],
    }),
    sendMessageCreate: builder.mutation({
      query: (data) => ({
        url: "/sms",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["appointments"],
    }),
  }),
});

export const {
  useCreateAppointmentMutation,
  useGetAllAppointmentsQuery,
  useGetSingleAppointmentQuery,
  useGetUpdateAppointmentMutation,
  useSendMessageCreateMutation,
} = appointmentApi;
