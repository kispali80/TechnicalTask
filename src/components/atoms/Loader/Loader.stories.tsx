import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Loader } from './Loader'

export default {
    component: Loader,
} as Meta

export const Default: Story = (args) => <Loader isLoading {...args} />
Default.args = {
    label: 'Loader',
}
