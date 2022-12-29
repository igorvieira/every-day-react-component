import {  ComponentMeta, ComponentStory } from '@storybook/react'

import BannerWithText from '.'

export default {
  title: 'Components/BannerWithText',
  args: {
    urlImage: 'https://static.vecteezy.com/ti/vetor-gratis/p1/192737-america-desert-landscape-vector-gratis-vetor.jpg',
    centerText: 'Center Text',
    topLeftText: 'Top Left Text',
    topRightText: 'Top Right Text',
    bottomLeftText: 'Bottom Left Text',
    bottomRightText: 'Bottom Right Text'
  },
  component: BannerWithText
} as ComponentMeta<typeof BannerWithText>;

export const Default: ComponentStory<typeof BannerWithText> = (args) => <BannerWithText {...args} />