import { Routes, Route } from 'react-router-dom'
import Form from '../components/qr_option/form'
import Ticket from '../components/qr_option/ticket'
import MainOperador from '../components/operador/mainOperador'
import Screen from '../components/mainscreen/screen'
import QR from '../components/qr_option/qr'

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Form />} />

			<Route path="/ticket" element={<Ticket />} />
			<Route path="/mainOp" element={<MainOperador />} />
			<Route path="/screen" element={<Screen />} />
			<Route path="/qr" element={<QR />} />
		</Routes>
	)
}

export default AppRoutes
