import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ErrorMessageItem } from './ErrorMessageItem'

export default {
    component: ErrorMessageItem,
} as Meta

export const Default: Story = (args) => (
    <ErrorMessageItem message="Test message" {...args} />
)
Default.args = {
    label: 'Error message item',
}
