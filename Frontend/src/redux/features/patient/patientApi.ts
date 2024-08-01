import { baseApi } from "@/redux/api/baseApi";

const patientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPatient: builder.mutation({
      query: (patientInfo) => ({
        url: "/patients",
        method: "POST",
        body: patientInfo,
      }),
    }),
    getAllPatient: builder.query({
      query: () => ({
        url: `/patients`,
        method: "GET",
      }),
      providesTags: ["patients"],
    }),
    getSinglePatient: builder.query({
      query: (id) => ({
        url: `/patients/${id}`,
        method: "GET",
      }),
      providesTags: ["patients"],
    }),
  }),
});

export const {
  useCreatePatientMutation,
  useGetSinglePatientQuery,
  useGetAllPatientQuery,
} = patientApi;
