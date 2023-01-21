import * as React from "react"
import { mui } from "../src/mui"

export const withMuiTheme = (Story, options) => (
    <mui.CssBaseline>
        <Story />
    </mui.CssBaseline>
)