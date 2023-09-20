import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DeliveriesDashboard from './pages/DeliveriesDashboard'

function App() {
	return (
		<div className="font-poppins">
			<BrowserRouter>
				<Routes>
					<Route path="/deliveries" element={<DeliveriesDashboard />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
