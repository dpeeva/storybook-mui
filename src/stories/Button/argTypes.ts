export const argTypes = {
    variant: {
        options: ["contained", "outlined", "text"],
        control: { type: "radio" },
    },
    color: {
        options: ["primary", "secondary", "info", "warning", "error", "success"],
        control: { type: "select" },
    },
    size: {
        options: ["small", "medium", "large"],
        control: { type: "radio" },
    },
    disabled: {
        control: { type: "boolean" },
    }
}