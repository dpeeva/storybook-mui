import { createTheme } from "@mui/material"

export const joy = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ED6286",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#55374B",
            dark: "#260e1e",
        },
        info: {
            main: "#6EC2CB",
            contrastText: "#fff",
        },
        error: {
            main: "#e93a30",
        },
        success: {
            main: "#689419",
        },
        warning: {
            main: "#ee7348",
            contrastText: "#fff",
        },
    },
})