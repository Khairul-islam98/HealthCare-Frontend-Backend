import App from "@/App";
import Admin from "@/pages/admin/Admin";
import Home from "@/pages/home/Home";
import NewAppointment from "@/pages/patient/new-appointment/NewAppointment";
import Success from "@/pages/patient/new-appointment/success/Success";
import Register from "@/pages/patient/Register";
import { createBrowserRouter } from "react-router-dom";


const router: ReturnType<typeof createBrowserRouter>  = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/admin',
                element: <Admin />
            },
            {
                path: '/patient/:id/register',
                element: <Register />
            },
            {
                path: '/patient/:user/new-appointment',
                element: <NewAppointment />
            },
            {
                path: '/patient/:userId/new-appointment/success',
                element: <Success />
            }
        ]
    }
])

export default router;