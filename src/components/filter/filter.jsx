import { Icon } from "@iconify/react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { useTranslation } from "react-i18next";

export default function Filter(props) {
  function handleChange(e) {
    const filterInfo = e.target.value.toLowerCase();
    props.onFilter(filterInfo);
  }

  const [t] = useTranslation("global");

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        border: 2,
        borderColor: "primary.main",
        "@media (max-width:320px)": { width: "90%" },
        width: "50%",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <Icon icon="vs:fish" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={t("filter.placeholder")}
        inputProps={{ "aria-label": "Find a cool discussion" }}
        name="input"
        onChange={handleChange}
      />
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <Icon icon="vs:fish" />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
