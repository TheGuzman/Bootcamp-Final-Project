import { Typography } from "@mui/material"
import { Stack } from "@mui/material"
import { useTranslation } from "react-i18next"

export default function HomePage() {
    const [t] = useTranslation("global")

    return (
        <Stack direction="row" spacing={2} sx={{ alignItems: 'baseline' }}>
            <Typography variant="h1">{t("header.fishbowl")}</Typography>
            <Typography variant="h2">{t("header.welcomeMsg")}</Typography>
        </Stack>
    )
}

