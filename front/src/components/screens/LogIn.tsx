import { SubmitHandler } from 'react-hook-form'
import { useLogInMutation } from '../../services/AuthService'
import { ILogInData } from '../../shared/interfaces/models'
import LogInForm from '../ui/forms/LogInForm'

const LogIn = () => {
	const [login] = useLogInMutation()
	const onSubmit: SubmitHandler<ILogInData> = async req => {
		const res = await login(req)
		console.log(res)
	}

	return (
		<div>
			<div className='mt-28 text-center'>
				<h1 className='text-7xl mb-20'>LogIn</h1>
				<LogInForm onSubmit={onSubmit} />
			</div>
		</div>
	)
}

export default LogIn
