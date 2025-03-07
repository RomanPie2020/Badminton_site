import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { authStatusSliceActions } from '../store/authStatus.slice'
import { favoritesActions } from '../store/favorites/favoritesSlice'
import { useAppDispatch } from '../store/store'
import { userIdActions } from '../store/userId.slice'

const rootActions = {
	...favoritesActions,
	...userIdActions,
	...authStatusSliceActions,
}

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
