import { mui } from "../../mui"

export const withMuiTheme = (Story, options) => (
    <mui.StylesReset>
        <Story />
    </mui.StylesReset>
)