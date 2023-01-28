import type { Meta, StoryFn } from "@storybook/react"
import { mui } from "../../mui"
import { argTypes } from "./argTypes"

export default {
    title: "Typography",
    component: mui.Typography,
    parameters: {
        layout: "fullscreen"
    },
    argTypes: {
        ...argTypes,
        variant: {
            table: { disable: true },
        },
        fontWeight: {
            table: { disable: true },
        },
    },
} as Meta


const Template: StoryFn = (args: mui.TypographyProps) => (
    <mui.Stack direction={"column"} spacing={3} py={2}>
        <mui.Typography variant="h1" {...args}>
            h1. Heading
        </mui.Typography>
        <mui.Typography variant="h2" {...args}>
            h2. Heading
        </mui.Typography>
        <mui.Typography variant="h3" {...args}>
            h3. Heading
        </mui.Typography>
        <mui.Typography variant="h4" {...args}>
            h4. Heading
        </mui.Typography>
        <mui.Typography variant="h5" {...args}>
            h5. Heading
        </mui.Typography>
        <mui.Typography variant="h6" {...args}>
            h6. Heading
        </mui.Typography>
        <mui.Typography variant="subtitle1" {...args}>
            subtitle1. Mapped by default to h6
        </mui.Typography>
        <mui.Typography variant="subtitle2" {...args}>
            subtitle2. Mapped by default to h6
        </mui.Typography>
        <mui.Typography {...args}>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </mui.Typography>
        <mui.Typography variant="body2" {...args}>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </mui.Typography>
        <mui.Typography variant="button" {...args}>
            Button Text
        </mui.Typography>
        <mui.Typography variant="caption" {...args}>
            Caption
        </mui.Typography>
        <mui.Typography variant="overline" {...args}>
            Overline
        </mui.Typography>
    </mui.Stack>
)

export const All = Template.bind({})
All.args = {
    align: "inherit",
    // fontWeight: 400,
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
}