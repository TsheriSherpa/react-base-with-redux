import { Routes, Route} from 'react-router-dom'
import PrivateRoutes from '../utils/private_routes';


function AppRoutes() {
	return (
		<Routes>
			<Route path="/public" element={<PublicPage/>} />
			<Route element={<PrivateRoutes/>}>
				<Route path='/protected' element={<ProtectedPage />} exact />
			</Route>
			<Route path="/login" element={<LoginPage/>}/>
		</Routes>
  	)
}

function PublicPage() {
	return (<h1>Public Page</h1>)
} 

function ProtectedPage() {
	return <h1>Protected Page</h1>
} 

function LoginPage() {
	return <h1>Login Page</h1>
} 

export default AppRoutes