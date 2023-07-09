import { createSlice } from '@reduxjs/toolkit'
import { ErrorMessageItemProps, SuccessMessageItemProps } from '~types/message'

interface MessageState {
    success: SuccessMessageItemProps | undefined
    error: ErrorMessageItemProps | undefined
}

const initialState: MessageState = {
    success: undefined,
    error: undefined,
}
export const handleMessages = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addSuccessMessage: (state, action) => {
            state.success = { message: action.payload.message }
        },
        addErrorMessage: (state, action) => {
            state.error = {
                message: action.payload.message,
                code: action.payload.code,
            }
        },
        removeSuccessMessage: (state) => {
            state.success = undefined
        },
        removeErrorMessage: (state) => {
            state.error = undefined
        },
    },
})

export const {
    addSuccessMessage,
    addErrorMessage,
    removeSuccessMessage,
    removeErrorMessage,
} = handleMessages.actions

export default handleMessages.reducer
