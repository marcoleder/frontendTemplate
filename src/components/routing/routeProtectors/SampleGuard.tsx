import { Navigate, Outlet } from 'react-router-dom';

export const SampleGuard = (props: any) => {
    const auth = true; // determine if authorized

    // authorized: return outlet rendering child elements, else redirect
    return auth ? <Outlet /> : <Navigate to="/" />;
}