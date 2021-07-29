import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  CssBaseline,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Hidden,
  IconButton,
  Link,
  Button
} from "@material-ui/core";
import { InfoOutlined, DynamicFeed, Close } from "@material-ui/icons";
import GrafConfirmado from "../../Graficos/Confirmados/graficosConfirmados";
import Confirmado from "../../Dados/Confirmados/dadosConfirmados";
import GrafMorte from "../../Graficos/Obitos/graficoMortes";
import DadosObitos from "../../Dados/Obitos/dadosMortes";
import GrafRecuperado from "../../Graficos/Recuperados/graficoRecuperados";
import DadosRecuperados from "../../Dados/Recuperados/dadosRecuperados";
import GrafMon from "../../Graficos/Monitorados/graficoMonitorado";
import Monitorados from "../../Dados/Monitorados/dadosMonitorados";
import GrafDesc from "../../Graficos/Descartados/graficoDescartado";
import Descartados from "../../Dados/Descartados/dadosDescartados";
import GrafAguardandoResultado from "../../Graficos/AguardandoResultado/graficoAguardandoResultado";
import DadosAguardandoResultado from "../../Dados/AguardandoResultado/dadosAguardandoResultados";
import TimeLineD from "../../Graficos/TimeLine/graficoTimeLineD";
import MediaMovelConf from "../../Dados/MediaMovelConfirmado/dadosMedMovCon";
import MediaMovelMorte from "../../Dados/MediaMovelObito/dadosMedMovMorte";
import Snack from "../../Componentes/Snackbar/snackbar";
import Tabletop from 'tabletop';
import FormatandoData from "../../Funcoes/formatandoData";
import Vacinometro from "./Vacinometro/vacinometroCDCI";
import { useSpring, animated } from "react-spring";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0",
    padding: "0",
    backgroundColor: "#0a5d5e"
  },
  grid: {
    width: "100%",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#152445",
    opacity: "85%"
  },
  CardContent: {
    backgroundColor: "#152445",
    opacity: "90%"
  },
  CardOption: {
    backgroundColor: "#152445"
  },
  tipografia: {
    color: "#ffffff"
  },
  tipografiaCabecalho: {
    color: "#ffffff"
  },
  tipografiaCel: {
    color: "#ffffff",
    fontSize: 7
  },
  tipografiaDados: {
    color: "#00a63d"
  },
  emojiPeopleRec: {
    color: "#00a63d",
    marginLeft: "24%",
    marginRight: "auto"
  },
  emojiPeopleMor: {
    color: "#fb0707",
    marginLeft: "20%",
    marginRight: "auto"
  },
  emojiPeopleMorC: {
    color: "#fb0707",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  },
  emojiPeopleCon: {
    color: "#fbfa07",
    marginLeft: "17%",
    marginRight: "auto"
  },
  emojiPeopleConC: {
    color: "#fbfa07",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  },
  emojiEyes: {
    color: "#fbfa07",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  },
  iconInfo: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    color: "#00a63d"
  },
  buttonVacinometro: {
    fontWeight: "bold",
    userSelect: "none",
    fontFamily: "roboto",
    color: "#ffff",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  divider: {
    color: "#002121"
  }
}));

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1uR3gZrd98Yx7asgZL9bmVhj4zBQyVLYWyheUeDsJBII/edit#gid=0'

export default function Home() {
  const classes = useStyles();

  const [textSnack, setTextSenack] = React.useState("");
  const [boletimData, setBoletimData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [vacinometro, setVacinometro] = React.useState(true);
  const [state, toggle] = React.useState(true);

  React.useEffect(() => {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: function (data, tabletop) {
                    setBoletimData(data);
                },
                simpleSheet: true,
            });
    }, []);

  let ultimoDados =
    boletimData[boletimData.length - 1] === undefined
      ? 0
      : boletimData[boletimData.length - 1];
  let ultDataAtu = ultimoDados.data_boletim;

  /*const clickImune = () => {
    setOpen(true);
    setTextSenack("Dados referente a pessoas imunizadas no município.");
  };*/

  const clickConf = () => {
    setOpen(true);
    setTextSenack(
      "Confirmados são os casos que foram efetuados exames laboratorial e encontra-se em quarentena/cuidado médico."
    );
  };

  const clickRec = () => {
    setOpen(true);
    setTextSenack(
      "Recuperados são os casos confirmados de infecção pelo novo Coronavírus(Covid-19) e estão curados."
    );
  };

  const clickAgua = () => {
    setOpen(true);
    setTextSenack(
      "Aguardando Resultado são os casos em que foram efetuado o teste laboratorial. O paciente e a Sec. de Saúde se encontram aguardando resultado."
    );
  };

  const clickMoni = () => {
    setOpen(true);
    setTextSenack(
      "Monitorados são os casos sintomáticos ou não(Assintomáticos que esteve com alguém que foi confirmado a infecção pelo novo Coronavírus.), que se encontram em isolamento domiciliar. Normalmente são pacientes com febre superior ou igual a 37.8° e/ou algum outro sintomas respiratório como Tosse, Falta de Ar, Fagida e outros sintomas que podem ser visto em nosso site."
    );
  };

  const clickDesc = () => {
    setOpen(true);
    setTextSenack(
      "Descartados são os casos testados laboratorialmente e o resultado deu negativo."
    );
  };

  const clickMorte = () => {
    setOpen(true);
    setTextSenack(
      "São os casos de óbitos confirmados pelo novo Coronavírus(Covid-19)."
    );
  };

  const clicMediaConf = () => {
    setOpen(true);
    setTextSenack(
      "Média Móvel é a soma dos últimos 7 resultados de casos confirmados e dividido por 7"
    );
  };

  const clicMediaMor = () => {
    setOpen(true);
    setTextSenack(
      "Média Móvel é a soma dos últimos 7 resultados de casos de óbitos e dividido por 7"
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const abrirLei = () => {
    var link =
      "http://pmamargosaba.imprensaoficial.org//pub/prefeituras/ba/amargosa/2021/proprio/3483.pdf";
    window.open(link, "_blank");
  };

  function CloseAlert() {
    return (
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
          setOpen(false);
        }}
      >
        <Close fontSize="inherit" />
      </IconButton>
    );
  }

  const openVacinometro = () => {
    toggle(!state);
    setTimeout(() => {
      setVacinometro(vacinometro === true ? false : true);
    }, 2100);
  };

  const { x } = useSpring({
    from: {
      x: 0
    },
    x: state ? 1 : 0,
    config: {
      duration: 2000
    }
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Vacinometro checked={vacinometro} />
        <Grid
          id="GridLine1"
          spacing={3}
          alignItems="center"
          justify="center"
          container
          className={classes.grid}
        >
          <Grid item xs={12} sm={12}>
            <Hidden smDown={true}>
              <Typography paragraph></Typography>
              <Typography
                className={classes.tipografiaCabecalho}
                variant="h5"
                align="center"
                display="block"
                paragraph={true}
              >
                Boletim Consolidado Automatizado -{" "}
                {!ultDataAtu ? "" : FormatandoData(ultDataAtu)}
              </Typography>
              <Typography paragraph></Typography>
              <Typography
                className={classes.tipografia}
                variant="caption"
                align="left"
                paragraph={true}
              >
                Legislação:{" "}
                <Link className={classes.tipografia} onClick={abrirLei}>
                  Decreto Nº 028 de 14 de março de 2021.
                </Link>
              </Typography>
              <Typography
                className={classes.tipografia}
                variant="caption"
                align="left"
                paragraph={true}
              >
                Vacinação: VACINAÇÃO COVID-19 IDOSOS DE 60 ANOS OU MAIS.
              </Typography>
              <Button
                fullWidth
                onClick={openVacinometro}
                className={classes.buttonVacinometro}
                variant="outlined"
              >
                <animated.div
                  style={{
                    opacity: x.interpolate({
                      range: [0, 1],
                      output: [0.3, 1]
                    }),
                    transform: x
                      .interpolate({
                        range: [
                          0,
                          0.15,
                          0.25,
                          0.35,
                          0.45,
                          0.55,
                          0.65,
                          0.75,
                          0.85,
                          0.95,
                          1,
                          1.5
                        ],
                        output: [
                          1,
                          0.95,
                          0.85,
                          0.75,
                          0.65,
                          1.1,
                          0.95,
                          0,
                          85,
                          1.1,
                          1.03,
                          1,
                          1.5
                        ]
                      })
                      .interpolate(x => `scale(${x})`),
                    backgroundColor: "#0a5d5e"
                  }}
                >
                  VACINÔMETRO
                </animated.div>
              </Button>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Hidden smUp={true}>
              <Typography
                className={classes.tipografiaCabecalho}
                variant="subtitle2"
                align="center"
                paragraph={true}
              >
                Boletim Consolidado Automatizado{" "}
                {!ultDataAtu ? "" : FormatandoData(ultDataAtu)}
              </Typography>
              <Typography paragraph></Typography>
              <Typography
                className={classes.tipografiaCel}
                align="left"
                paragraph={true}
              >
                Legislação:{" "}
                <Link className={classes.tipografia} onClick={abrirLei}>
                  Decreto Nº 028 de 14 de março de 2021.
                </Link>
              </Typography>
              <Typography
                className={classes.tipografiaCel}
                variant="caption"
                align="left"
                paragraph={true}
              >
                Vacinação: VACINAÇÃO COVID-19 IDOSOS DE 60 ANOS OU MAIS.
              </Typography>
              <Button
                fullWidth
                onClick={openVacinometro}
                className={classes.buttonVacinometro}
                variant="outlined"
              >
                <animated.div
                  style={{
                    opacity: x.interpolate({
                      range: [0, 1],
                      output: [0.3, 1]
                    }),
                    transform: x
                      .interpolate({
                        range: [
                          0,
                          0.15,
                          0.25,
                          0.35,
                          0.45,
                          0.55,
                          0.65,
                          0.75,
                          0.85,
                          0.95,
                          1,
                          1.5
                        ],
                        output: [
                          1,
                          0.95,
                          0.85,
                          0.75,
                          0.65,
                          1.1,
                          0.95,
                          0,
                          85,
                          1.1,
                          1.03,
                          1,
                          1.5
                        ]
                      })
                      .interpolate(x => `scale(${x})`),
                    backgroundColor: "#0a5d5e"
                  }}
                >
                  VACINÔMETRO
                </animated.div>
              </Button>
            </Hidden>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent className={classes.CardContent} id="CardRecuperado">
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  variant="h5"
                >
                  Recuperados
                </Typography>
              </CardContent>
              <CardActionArea>
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  display="initial"
                  variant="subtitle2"
                >
                  Clique para saber mais
                </Typography>
                <InfoOutlined
                  id="InfoRecuperado"
                  className={classes.iconInfo}
                  onClick={clickRec}
                />
              </CardActionArea>
              <React.Fragment>
                  <DadosRecuperados />
              </React.Fragment>
             <React.Fragment>
                <GrafRecuperado />
              </React.Fragment>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card} raised={true}>
              <CardContent id="CardConfirmado" className={classes.CardContent}>
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  variant="h5"
                >
                  Confirmado
                </Typography>
              </CardContent>
              <CardActionArea className={classes.CardOption}>
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  display="initial"
                  variant="subtitle2"
                >
                  Clique para saber mais
                </Typography>
                <InfoOutlined
                  onClick={clickConf}
                  id="InfoConfirmado"
                  className={classes.iconInfo}
                />
              </CardActionArea>
              <React.Fragment>
                <Confirmado />
              </React.Fragment>
              <React.Fragment>
                <GrafConfirmado />
              </React.Fragment>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent className={classes.CardContent} id="CardMonitorado">
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  variant="h5"
                >
                  Monitorados
                </Typography>
              </CardContent>
              <CardActionArea>
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  display="initial"
                  variant="subtitle2"
                >
                  Clique para saber mais
                </Typography>
                <InfoOutlined
                  onClick={clickMoni}
                  id="InfoMonitorado"
                  className={classes.iconInfo}
                />
              </CardActionArea>
              <React.Fragment>
                <Monitorados />
              </React.Fragment>
              <React.Fragment>
                <GrafMon />
              </React.Fragment>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent className={classes.CardContent} id="CardDescartado">
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  variant="h5"
                >
                  Descartados
                </Typography>
              </CardContent>
              <CardActionArea>
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  display="initial"
                  variant="subtitle2"
                >
                  Clique para saber mais
                </Typography>
                <InfoOutlined
                  onClick={clickDesc}
                  id="InfoDescartado"
                  className={classes.iconInfo}
                />
              </CardActionArea>
              <React.Fragment>
                <Descartados />
              </React.Fragment>
              <React.Fragment>
                <GrafDesc />
              </React.Fragment>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent className={classes.CardContent} id="CardAguardando">
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  variant="h5"
                >
                  Aguardando Resultado
                </Typography>
              </CardContent>
              <CardActionArea>
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  display="initial"
                  variant="subtitle2"
                >
                  Clique para saber mais
                </Typography>
                <InfoOutlined
                  onClick={clickAgua}
                  id="InfoAguardando"
                  className={classes.iconInfo}
                />
              </CardActionArea>
              <React.Fragment>
                <DadosAguardandoResultado />
              </React.Fragment>
              <React.Fragment>
                <GrafAguardandoResultado />
              </React.Fragment>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent className={classes.CardContent}>
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  variant="h5"
                >
                  Óbitos
                </Typography>
              </CardContent>
              <CardActionArea>
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  display="initial"
                  variant="subtitle2"
                >
                  Clique para saber mais
                </Typography>
                <InfoOutlined
                  onClick={clickMorte}
                  className={classes.iconInfo}
                />
              </CardActionArea>
              <React.Fragment>
                <DadosObitos />
              </React.Fragment>
              <React.Fragment>
                <GrafMorte />
              </React.Fragment>
            </Card>
          </Grid>
          <React.Fragment>
            {/*<TimeLine />*/}
            <TimeLineD />
          </React.Fragment>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent
                className={classes.CardContent}
                id="CardMediaMovelConf"
              >
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  variant="h5"
                >
                  Média Móvel Confirmado
                </Typography>
              </CardContent>
              <CardActionArea>
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  display="initial"
                  variant="subtitle2"
                >
                  Clique para saber mais
                </Typography>
                <InfoOutlined
                  onClick={clicMediaConf}
                  id="infoMediaMovelConf"
                  className={classes.iconInfo}
                />
              </CardActionArea>
              <React.Fragment>
                <MediaMovelConf />
              </React.Fragment>
              <DynamicFeed className={classes.emojiEyes} fontSize="small" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent
                className={classes.CardContent}
                id="CardMediaMovelMorte"
              >
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  variant="h5"
                >
                  Média Móvel de Óbitos
                </Typography>
              </CardContent>
              <CardActionArea>
                <Typography
                  gutterBottom
                  className={classes.tipografia}
                  align="center"
                  display="initial"
                  variant="subtitle2"
                >
                  Clique para saber mais
                </Typography>
                <InfoOutlined
                  id="infoMediaMovelMorte"
                  onClick={clicMediaMor}
                  className={classes.iconInfo}
                />
              </CardActionArea>
              <React.Fragment>
                <MediaMovelMorte />
              </React.Fragment>
              <DynamicFeed className={classes.emojiEyes} fontSize="small" />
            </Card>
          </Grid>
        </Grid>
        <Snack
          open={open}
          close={handleClose}
          textSnack={textSnack}
          handleClose={<CloseAlert />}
        />
      </div>
    </React.Fragment>
  );
}
