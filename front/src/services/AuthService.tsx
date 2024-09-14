import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiUrl } from '../configs/url.config'
import { IRequestSignUp, IResponseSignUp } from '../shared/interfaces/models'

export const authService = createApi({
	reducerPath: 'auth',
	baseQuery: fetchBaseQuery({
		baseUrl: apiUrl,
	}),
	endpoints: build => ({
		logIn: build.mutation<any, any>({
			query: body => ({
				url: 'api/auth/token/',
				method: 'POST',
				body,
			}),
		}),
		signUp: build.mutation<IResponseSignUp, IRequestSignUp>({
			query: body => ({
				url: 'api/user/register',
				method: 'POST',
				body,
			}),
			// transformResponse: res => {
			// 	return res
			// },
		}),
		codeVerification: build.mutation<any, any>({
			query: body => ({
				url: 'api/user/verify',
				method: 'POST',
				body,
			}),
			transformResponse: res => {
				return res
			},
		}),
	}),
})

export const {
	useLogInMutation,
	useSignUpMutation,
	useCodeVerificationMutation,
} = authService
