import PropTypes from 'prop-types';
import { Navigate, Outlet } from "react-router";

export default function ProtectedRouter({ atm }) {

    const isLogged = atm.usuarioAutenticado;
    if (!isLogged) {
        return <Navigate to={"/"}></Navigate>
    }

    return (<>
        <Outlet />
    </>
    )
}

ProtectedRouter.propTypes = {
    atm: PropTypes.object.isRequired,
};
