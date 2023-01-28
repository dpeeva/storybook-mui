import { createTheme } from "@mui/material"
import { components } from "./components"

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
    typography: {
        fontFamily: "Montserrat Alternates",
        body1: {
            fontSize: "18px",
            lineHeight: 1.6,
            fontWeight: 400,
        },
        body2: {
            fontSize: "16px",
            lineHeight: 1.55,
            fontWeight: 300,
        },
        h1: {
            fontSize: "56px",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        h2: {
            fontSize: "48px",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        h3: {
            fontSize: "36px",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        h4: {
            fontSize: "28px",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        h5: {
            fontSize: "24px",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        h6: {
            fontSize: "18px",
            lineHeight: 1.5,
            fontWeight: 700,
        },
        button: {
            fontSize: "12px",
            textTransform: "none",
            lineHeight: 1.2,
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: "18px",
            lineHeight: 1.5,
            fontWeight: 600,
        },
        subtitle2: {
            fontSize: "16px",
            lineHeight: 1.5,
            fontWeight: 700,
        },
        caption: {
            fontSize: "16px",
            lineHeight: 1,
            fontWeight: 600,
        },
        overline: {
            fontSize: "14px",
            lineHeight: 1,
            fontWeight: 500,
        },
    },
    components: components,
})