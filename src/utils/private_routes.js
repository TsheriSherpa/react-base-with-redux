import { Outlet, Navigate } from 'react-router-dom'

// Private use for protecting authenticated routes
const PrivateRoutes = () => {
    let auth = { 'token': true }

    return (
        auth.token ? <Outlet/> : <Navigate  to='/login'/>
    )
}

export default PrivateRoutes