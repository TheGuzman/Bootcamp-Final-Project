import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Fishes from "../../assets/imgs/Fische.freigestellt.png";
import CircularColor from "../../components/circular-progress/circular-progress.jsx";
import Filter from "../../components/filter/filter.jsx";
import FishbowlCard from "../../components/fishbowl-card/fishbowl-card.jsx";
import ProfileAvatar from "../../components/profile-avatar/profile-avatar.jsx";

export default function BecomeaFishPage() {
  const url = process.env.REACT_APP_URL;

  const [t] = useTranslation("global");

  const [fishbowlsDDBB, setFishbowlsFromDDBB] = useState([]);
  const [allFishbowls, setAllFishbowls] = useState(fishbowlsDDBB); //Need a copy of the original fishbowks from the DDBB
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // let token;
    // const tokenInLocalStorage = localStorage.getItem('sesion')

    // if(tokenInLocalStorage!==null){
    //     token = tokenInLocalStorage
    // }
    // else{
    //     token = sessionStorage.getItem('sesion')
    // }

    fetch(`${url}/user`, {
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("sesion"),
      },
    })
      .then((r) => r.json())
      .then((d) => {
        setUserName(d.name);
        fetch(`${url}/user/becomeafish/getallfishbowls`, {
          method: "GET",
          headers: {
            Authorization: sessionStorage.getItem("sesion"),
          },
        })
          .then((r) => r.json())
          .then((d) => {
            setFishbowlsFromDDBB(d);
            setAllFishbowls(d);
            setLoading(false);
          });
      });
  }, []);

  const onFilter = (filter) => {
    const filtered = fishbowlsDDBB.filter(
      (f) => f.name.toLowerCase().includes(filter) || f.description.toLowerCase().includes(filter)
    );
    setAllFishbowls(filtered);
  };

  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", margin: "1em 0em" }}>
        <Stack
          direction="row"
          sx={{
            "@media (min-width:320px)": { flexDirection: "column" },
            "@media (min-width:768px)": { flexDirection: "row" },
          }}
        >
          <Typography sx={{ margin: "0em 0.5em 0em 1em" }} variant="h5">
            {t("becomeaFishPage.welcome")}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              "@media (min-width:320px)": { marginLeft: "1em" },
              "@media (min-width:768px)": { marginLeft: "0em" },
            }}
          >
            {userName}
          </Typography>
        </Stack>
        <ProfileAvatar></ProfileAvatar>
      </Stack>
      <Box>
        <Stack direction="column" sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ margin: "0em 1em" }} variant="h6">
            {t("becomeaFishPage.info")}
          </Typography>
          <Filter onFilter={onFilter}></Filter>

          <Box
            border={2}
            sx={{
              borderColor: "primary.main",
              backgroundImage: `url(${Fishes})`,
              backgroundSize: "contain",
              padding: "0.5em",
              borderRadius: "10px",
              alignItems: "center",
              margin: "1em",
              width: "90%",
              minHeight: 370,
            }}
          >
            <Stack
              direction="row"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2em",
                margin: "1em",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {loading !== false ? (
                <CircularColor></CircularColor>
              ) : (
                allFishbowls?.map((e, i) => <FishbowlCard fishbowlCreator={true} info={e} key={i}></FishbowlCard>)
              )}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
