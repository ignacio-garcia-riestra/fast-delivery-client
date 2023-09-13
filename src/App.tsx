import axios from 'axios'
import './index.css'
import Layout from './components/layout/Layout'

function App() {
	const URL = 'http://localhost:4000/'
	axios.get(URL).then(response => {
		console.log(response.data)
	})
	return (
		<Layout>
			{/* <div>WELCOME TO LOGIN</div> */}
		</Layout>
	)
}

export default App
