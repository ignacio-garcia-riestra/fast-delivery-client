import axios from 'axios'

function App() {
	const URL = 'http://localhost:4000/'
	axios.get(URL).then(response => {
		console.log(response.data)
	})
	return <div>WELCOME TO LOGIN</div>
}

export default App
