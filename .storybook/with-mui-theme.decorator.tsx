import * as React from "react"
import { mui } from "../src/mui"

export const withMuiTheme = (Story, options) => (
    <mui.CssBaseline>
        <mui.Box sx={{ padding: "20px", color: "red" }}>
            <Story />
        </mui.Box>
    </mui.CssBaseline>
)