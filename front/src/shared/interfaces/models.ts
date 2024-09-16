// topBar
// logo

export interface ILogo {
	title: string
}
export interface ILogButton {
	title: string
	styles: string
	to: string
}

// LogInForm
export interface ILogInData {
	email: string
	password: string
}
export interface ILogInFormProps {
	onSubmit: (userData: ILogInData) => void
}

// SignUpForm
export interface ISignUpData {
	email: string
	username: string
	password: string
	passwordConfirmation: string
}
export interface ISignUpFormProps {
	onSubmit: (userData: ISignUpData) => void
}

// Code verification
export interface ICodeVerifyData {
	user_id: string
	code: string
}

export interface ICodeVerifyFormProps {
	onSubmit: (codeData: ICodeVerifyData) => void
}

// Auth service
// SignUp
export interface IResponseSignUp {
	id: number
	email: string
	username: string
	first_name: string
	last_name: string
	password: string
}

export interface IRequestSignUp {
	email: string
	username: string
	password: string
}

// Card3d
export interface ICard3d {
	title: string
	description: string
	image: string
}
