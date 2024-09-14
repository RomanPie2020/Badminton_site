import { SubmitHandler } from 'react-hook-form'
import { useCodeVerificationMutation } from '../../services/AuthService'
import { ICodeVerifyData } from '../../shared/interfaces/models'
import { useAppSelector } from '../../store/store'
import CodeVerificationForm from '../ui/forms/CodeVerificationForm'

const CodeVerificationPage = () => {
	// const { auth } = useSelector(state => state)
	// console.log(auth)
	const [id] = useAppSelector(state => state.code)
	const [codeVerification] = useCodeVerificationMutation()
	const onSubmit: SubmitHandler<ICodeVerifyData> = async req => {
		console.log(req)

		console.log(id)
		req.user_id = id
		console.log(req)

		const res = await codeVerification(req)
		console.log(res)
	}

	return (
		<div>
			<div className='mt-28 text-center'>
				<h1 className='text-7xl mb-20'>Code verification</h1>
				<CodeVerificationForm onSubmit={onSubmit} />
			</div>
		</div>
	)
}
export default CodeVerificationPage

//записати в стор id
// слати id + код з форми
