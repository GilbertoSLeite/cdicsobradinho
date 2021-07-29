import Timeline from "@material-ui/icons/Timeline";
import Home from './Paginas/Home/principal';
import Meteorologia from './Paginas/Meteorologia/meteorologiaClimaTempo';
import AcUnit from "@material-ui/icons/AcUnit";
import Documentacao from './Paginas/Documentacao/documentacao';
import DescriptionOutlined from "@material-ui/icons/DescriptionOutlined";
import UpdateOutlined from '@material-ui/icons/UpdateOutlined';
import Versao from './Paginas/Versao/versao';
import AddShoppingCartOutlined from '@material-ui/icons/AddShoppingCartOutlined';
import PageVaccination from './Paginas/Vacinacao/pageVacinacao';
import ListAltOutlined from '@material-ui/icons/ListAltOutlined';
import BoletimBahia from './Paginas/Bahia/boletimBahia';
import LocationCityOutlined from '@material-ui/icons/LocationCityOutlined';
import DadosAmargosa from './Paginas/Amargosa/dadosAmargosa';
import Hospitais from './Paginas/Hospital/hospitaisBahia';
import LocalHospitalRounded from '@material-ui/icons/LocalHospitalRounded';
import AboutSinovac from './Paginas/Vacinacao/Sinovac/aboutSinovac';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import AboutVaccine from './Paginas/Vacinacao/Vacina/aboutVaccine';
import AboutButantan from './Paginas/Vacinacao/Butantan/aboutButantan';
import AboutFioCruz from './Paginas/Vacinacao/Fiocruz/aboutFioCruz';
import DadosGerais from './Paginas/Vacinacao/DadosGerais/dadosGerais';

const pageRoutes = [
    {
        path: "/cidadao/home",
        name: "Home",
        icon: Timeline,
        children: Home,
    },
    {
        path: "/cidadao/dadosvacinacao",
        name: "Dados de Vacinação",
        icon: AddShoppingCartOutlined,
        children: PageVaccination,
    },
    {
        path: "/cidadao/aboutcompany",
        name: "Dados de Vacinação",
        icon: InfoOutlined,
        children: AboutSinovac,
    },
    {
        path: "/cidadao/aboutvaccine",
        name: "Dados de Vacinação",
        icon: InfoOutlined,
        children: AboutVaccine,
    },
    {
        path: "/cidadao/aboutbutantan",
        name: "Dados de Vacinação",
        icon: InfoOutlined,
        children: AboutButantan,
    },
    {
        path: "/cidadao/aboutfiocruz",
        name: "Dados de Vacinação",
        icon: InfoOutlined,
        children: AboutFioCruz,
    },
    {
        path: "/cidadao/vacinacaodadosgerais",
        name: "Dados de Vacinação",
        icon: InfoOutlined,
        children: DadosGerais,
    },
    {
        path: "/cidadao/boletimbahia",
        name: "Bahia",
        icon: ListAltOutlined,
        children: BoletimBahia,
    },
    {
        path: "/cidadao/dadossobradinho",
        name: "Sobradinho",
        icon: LocationCityOutlined,
        children: DadosAmargosa,
    },
    {
        path: "/cidadao/hospitaiscovid19",
        name: "Hospital",
        icon: LocalHospitalRounded,
        children: Hospitais,
    },
    {
        path: "/cidadao/meteorologia",
        name: "Meteorologia",
        icon: AcUnit,
        children: Meteorologia,
    },
    {
        path: "/cidadao/documentacao",
        name: "Documentacao",
        icon: DescriptionOutlined,
        children: Documentacao,
    },
    {
        path: "/cidadao/versao",
        name: "Versão",
        icon: UpdateOutlined,
        children: Versao,
    },
];

export default pageRoutes;