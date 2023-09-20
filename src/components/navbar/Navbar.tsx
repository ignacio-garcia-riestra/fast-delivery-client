import logoutIcon from '../../assets/logout.svg'
import smallLogo from '../../assets/small-logo.svg'

function Navbar() {
	return (
		<nav className="shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
			<div className="flex flex-row h-[50px] w-5/6 mx-auto items-center justify-between">
				<div className="w-11 h-7">
					<img className="h-8 w-auto" src={smallLogo} alt="Logo" />
				</div>
				<div className="h-[26px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded">
					<img src={logoutIcon} alt="Logout" />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
