import { createSlice } from '@reduxjs/toolkit'

const initialState: any = []

export const userIdSlice = createSlice({
	name: 'codeVerify',
	initialState,
	reducers: {
		addUserId: (state, { payload: userId }) => {
			const isExists = state.length > 0

			if (isExists) {
				state.pop()
				state.push(userId)
				return console.log('userId was changed')
			} else {
				state.push(userId)
			}
		},
	},
})

export const userIdActions = userIdSlice.actions
export const userIdReducer = userIdSlice.reducer
