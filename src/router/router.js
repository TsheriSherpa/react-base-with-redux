import Login from '../layouts/pages/Login';
import { Routes, Route} from 'react-router-dom'
import Dashboard from '../layouts/pages/Dashboard';
import PrivateRoutes from '../utils/private_routes';


function AppRoutes() {	
	return (
		<Routes>
			<Route path="/public" element={<PublicPage/>}/>
			<Route element={<PrivateRoutes/>}>
				<Route path="/" element={<Dashboard/>} exact />
				<Route path='/protected' element={<ProtectedPage />} exact/>
			</Route>
			<Route path="/login" element={<Login/>}/>
		</Routes>
  	)
}

function PublicPage() {
	return (<h1>Public Page</h1>)
} 

function ProtectedPage() {
	return <h1>Protected Page</h1>
} 

export default AppRoutes