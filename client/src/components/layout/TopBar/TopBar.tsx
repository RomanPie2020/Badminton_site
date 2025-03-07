import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { ILogButton } from '../../../shared/interfaces/models'
import { useAppSelector } from '../../../store/store'
import LogButton from '../../ui/LogButton/LogButton'

// const button: ILogButton = {
//   title: 'click me',
//   color: 'text-black',
//   bgColor: 'bg-white',
//   width: 'w-20',
//   height: 'h-10'
// }

const logButtonProps: ILogButton = {
	title: 'Log in',
	to: '/login',
	styles: 'log-button',
}

const regButtonProps: ILogButton = {
	title: 'Sign up',
	to: '/signup',
	styles: 'reg-button',
}

const logoutButtonProps: ILogButton = {
	title: 'Log out',
	to: '/login',
	styles: 'reg-button',
}

const profileButtonProps: ILogButton = {
	title: 'Profile',
	to: '/profile',
	styles: 'log-button',
}

function TopBar() {
	const navigate = useNavigate()
	const { logOut } = useActions()
	const isAuthenticated = useAppSelector(
		state => state.authStatus.isAuthenticated
	)

	const logoutUser = async () => {
		localStorage.removeItem('access_token')
		localStorage.removeItem('refresh_token')
		localStorage.setItem('is_Auth', 'false')
		logOut()
		navigate('/login')
	}

	return (
		<>
			<div className='flex justify-between fixed top-0 w-full px-5 bg-[#282828]'>
				<div className='flex'>
					<Link
						className='inline-block bg-logo bg-no-repeat bg-left w-16 h-16 my-4'
						to='/'
					></Link>
					<div className='ml-2 mt-10 text-white sm:hidden'>QuickPaste</div>
				</div>

				{/* <SearchInput /> */}
				{isAuthenticated ? (
					<div className='flex'>
						<LogButton
							onButtonClick={() => logoutUser()}
							button={logoutButtonProps}
						/>
						<LogButton button={profileButtonProps} />
					</div>
				) : (
					<div className='flex'>
						<LogButton button={logButtonProps} />
						<LogButton button={regButtonProps} />
					</div>
				)}
			</div>
			<Outlet />
		</>
	)
}

export default TopBar
