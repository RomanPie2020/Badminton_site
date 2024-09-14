import { useForm } from 'react-hook-form'
import {
	ICodeVerifyData,
	ICodeVerifyFormProps,
	ILogButton,
} from '../../../shared/interfaces/models'
import LogButton from '../LogButton/LogButton'

const signUpButtonProps: ILogButton = {
	title: 'Send code again',
	styles: 'mt-2 inline-block',
	to: '/codeverification',
}

const CodeVerificationForm = ({ onSubmit }: ICodeVerifyFormProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ICodeVerifyData>({
		values: {
			code: '',
			user_id: '',
		},
	})

	return (
		<>
			<form
				className='ml-10 mt-10'
				noValidate
				autoComplete='off'
				onSubmit={handleSubmit(onSubmit)}
			>
				<label>
					Code <br />
					<input type='' {...register('code', { required: true })} />
				</label>
				{errors.code && <span>This field is required</span>}
				<br />
				<button className='reg-button'>Send</button>
				<br />
			</form>
			<LogButton button={signUpButtonProps} />
		</>
	)
}

export default CodeVerificationForm
