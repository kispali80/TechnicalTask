import { MESSAGE_TYPE_ERROR, MESSAGE_TYPE_SUCCESS } from '~constants/messages'

export interface SuccessMessageItemProps {
    message: string
}

export interface ErrorMessageItemProps {
    message: string
    code?: string
}

export interface MessageProps {
    type: typeof MESSAGE_TYPE_SUCCESS | typeof MESSAGE_TYPE_ERROR
    autoRemove: boolean
    message: string
    code?: string
}
