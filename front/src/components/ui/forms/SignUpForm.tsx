// import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
	ILogButton,
	ISignUpData,
	ISignUpFormProps,
} from '../../../shared/interfaces/models'
import LogButton from '../LogButton/LogButton'

// #todo підключити reduxtoolkit

// type FormData = {
//   value: string
//   touched?: boolean
// }

// const submitButtonProps: ILogButton = {
// 	title: 'SignUp',
// 	styles: 'log-button mt-5',
// 	to: '/',
// }

const LogInButtonProps: ILogButton = {
	title: 'Have account? Log in',
	styles: 'mt-2 inline-block',
	to: '/login',
}

const SignUpForm = ({ onSubmit }: ISignUpFormProps) => {
	const {
		register,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm<ISignUpData>({
		values: {
			email: '',
			username: '',
			password: '',
			passwordConfirmation: '',
		},
	})
	// const watchAllFields = watch()
	// const { password, passwordConfirmation } = watch()
	// const all = watch()

	// const comparePasswords = () => {
	// const password = getValues('password')
	// const { password, passwordConfirmation } = watch()
	// console.log(watchAllFields)
	// const isPasswordEqual = password === passwordConfirmation
	// console.log(isPasswordEqual)
	// }
	const { password, passwordConfirmation } = getValues()
	const comparePasswords = () => {
		useEffect(() => {
			console.log('All Values:', password, passwordConfirmation)
			const isPasswordEqual = password === passwordConfirmation
			return !isPasswordEqual && <span>no equal passwords</span>
		}, [password, passwordConfirmation])
	}
	return (
		<form
			className='ml-10 mt-10'
			autoComplete='off'
			onSubmit={handleSubmit(onSubmit)}
		>
			<label>
				Email <br />
				<input type='email' {...register('email', { required: true })} />
			</label>
			{/* {errors.email && (
				<div>
					<span>This field is required</span>
				</div>
			)} */}
			<label>
				<br /> Username <br />
				<input
					type='text'
					{...register('username', { required: true, minLength: 4 })}
				/>
			</label>
			<label>
				<br /> Password <br />
				<input
					type='text'
					{...register('password', {
						required: true,
						minLength: 8,
					})}
				/>
			</label>
			<label>
				<br /> Confirm Password <br />
				<input
					type='text'
					{...register('passwordConfirmation', {
						required: true,
						minLength: 8,
					})}
					// onChange={comparePasswords}
				/>
			</label>
			<br />
			<button className='reg-button'>SignUp</button>
			<br />
			<LogButton button={LogInButtonProps} />
		</form>
	)
}

export default SignUpForm
