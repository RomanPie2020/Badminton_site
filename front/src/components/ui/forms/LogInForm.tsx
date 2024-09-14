// import React from 'react'
import { useForm } from 'react-hook-form'
import {
	ILogButton,
	ILogInData,
	ILogInFormProps,
} from '../../../shared/interfaces/models'
import LogButton from '../LogButton/LogButton'

// const submitButtonProps: ILogButton = {
// 	title: 'LogIn',
// 	styles: 'log-button mt-5',
// 	to: '/',
// }

const signUpButtonProps: ILogButton = {
	title: 'Register now',
	styles: 'mt-2 inline-block',
	to: '/signup',
}

const LogInForm = ({ onSubmit }: ILogInFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogInData>({
		values: {
			email: '',
			password: '',
		},
	})

	return (
		<form
			className='ml-10 mt-10'
			noValidate
			autoComplete='off'
			onSubmit={handleSubmit(onSubmit)}
		>
			<label>
				Email <br />
				<input type='email' {...register('email', { required: true })} />
			</label>
			{errors.email && <span>This field is required</span>}

			<label>
				<br /> Password <br />
				<input type='password' {...register('password')} />
			</label>
			<br />
			<button className='reg-button'>LogIn</button>
			<br />
			<LogButton button={signUpButtonProps} />
		</form>
	)
}

export default LogInForm
