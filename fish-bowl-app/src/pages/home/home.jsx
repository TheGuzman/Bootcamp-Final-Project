import { Typography } from "@mui/material"
import { Stack } from "@mui/material"
import { useTranslation } from "react-i18next"

export default function HomePage() {
    const [t] = useTranslation("global")

    return (
        <Stack direction="column" sx={{ margin:'0em 1em', alignItems: 'baseline' }}>
            <Typography variant="h1">{t("header.fishbowl")}</Typography>
            <Typography variant="h2">{t("header.welcomeMsg")}</Typography>
        </Stack>
    )
}

