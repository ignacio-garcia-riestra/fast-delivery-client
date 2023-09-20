import { ReactNode } from 'react'
import Navbar from '../navbar/Navbar'

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="w-screen flex flex-col min-h-screen overflow-hidden bg-blue-fd">
			<Navbar />
			{children}
		</div>
	)
}

export default Layout
