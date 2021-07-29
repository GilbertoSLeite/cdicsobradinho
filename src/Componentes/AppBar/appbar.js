import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Hidden,
    Avatar,
    Menu,
    MenuItem,
} from '@material-ui/core';
import {
    AcUnit,
    FavoriteBorderOutlined,
    FindInPageOutlined,
    HomeWorkOutlined,
    ListAltOutlined,
    LocalHospitalRounded,
    LocationCityOutlined,
    Menu as MenuIcon,
} from '@material-ui/icons';
import amargosa from '../../Arquivos/imagens/sobradinho.png';
import ClimaTempo from '../../Dados/ClimaTempo/climaTempo';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    AppBar: {
        [theme.breakpoints.up("sm")]: {
            width: "100%",
        },
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#152445",
        borderBottom: "0",
        marginBottom: "0",        
    },
    menuButton: {
        marginRight: theme.spacing(1),
        color: "#199e48",
    },
    tipografiaAppBar: {
        marginLeft: '5%'
    },
    menuAppbar: {
        color: '#ffff'
    },
    clima: {
        marginLeft: "auto",
        marginRight: -12
    },
    avatar: {
        alignItems: 'start',
        maxWidth: '200px',
        maxHeight: '150px',
        width: 'auto',
        height: 'auto',
        flexGrow: 1
    },
}));

function newTabMun() {
    const url = 'http://www.sobradinho.ba.gov.br/';
    window.open(url, '_blank');
};

export default function AppBarSys() {

    const classes = useStyles();

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const mobileMenuId = 'primary-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            id={mobileMenuId}
            keepMounted
            transformOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    className={classes.menuButton}
                    aria-label="Home"
                    color="inherit"
                    href="/cidadao/home"
                >
                    <HomeWorkOutlined fontSize='small' />
                    <Typography
                        align='center'
                        variant='button'
                        gutterBottom
                        display='inline'
                    >
                        Home
                    </Typography>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    className={classes.menuButton}
                    aria-label="Register"
                    color="inherit"
                    href="/cidadao/vacinacaodadosgerais"
                >
                    <FavoriteBorderOutlined fontSize='small' />
                    <Typography
                        align='center'
                        variant='button'
                        gutterBottom
                        display='inline'
                        className={classes.tipografiaAppBar}
                    >
                        Vacinação
                    </Typography>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    className={classes.menuButton}
                    aria-label="Register"
                    color="inherit"
                    href='/cidadao/boletimbahia'
                >
                    <ListAltOutlined fontSize='small' />
                    <Typography
                        align='center'
                        variant='button'
                        gutterBottom
                        display='inline'
                        className={classes.tipografiaAppBar}
                    >
                        Bahia
                    </Typography>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    className={classes.menuButton}
                    aria-label="Users"
                    color="inherit"
                    href='/cidadao/dadossobradinho'
                >
                    <LocationCityOutlined fontSize='small' />
                    <Typography
                        align='center'
                        variant='button'
                        gutterBottom
                        display='inline'
                        className={classes.tipografiaAppBar}
                    >
                        Sobradinho
                    </Typography>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    className={classes.menuButton}
                    aria-label="Users"
                    color="inherit"
                    href='/cidadao/hospitaiscovid19'
                >
                    <LocalHospitalRounded fontSize='small' />
                    <Typography
                        align='center'
                        variant='button'
                        gutterBottom
                        display='inline'
                        className={classes.tipografiaAppBar}
                    >
                        Hospitais
                    </Typography>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    className={classes.menuButton}
                    aria-label="Users"
                    color="inherit"
                    href='/cidadao/meteorologia'
                >
                    <AcUnit fontSize='small' />
                    <Typography
                        align='center'
                        variant='button'
                        gutterBottom
                        display='inline'
                        className={classes.tipografiaAppBar}
                    >
                        Meteorologia
                    </Typography>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton
                    className={classes.menuButton}
                    aria-label="Users"
                    color="inherit"
                    href='/cidadao/documentacao'
                >
                    <FindInPageOutlined />
                    <Typography
                        align='center'
                        variant='button'
                        gutterBottom
                        display='inline'
                        className={classes.tipografiaAppBar}
                    >
                        Documentação
                    </Typography>
                </IconButton>
            </MenuItem>
            <ClimaTempo />
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar
                className={classes.AppBar}
                position="static"
            >
                <Toolbar>
                    <Hidden
                        smUp={true}
                    >
                        <IconButton
                            arial-label='show menu'
                            arial-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            className={classes.menuAppbar}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Hidden
                        smDown={true}
                    >
                        <IconButton
                            onClick={newTabMun}
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <Avatar
                                variant="rounded"
                                src={amargosa}
                                className={classes.avatar}
                            />
                        </IconButton>
                    </Hidden>
                    <Hidden
                        smUp={true}
                    >
                        <IconButton
                            onClick={newTabMun}
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <Avatar
                                variant="rounded"
                                src={amargosa}
                                className={classes.avatar}
                            />
                        </IconButton>
                    </Hidden>
                    {/* */}
                    <section className={classes.clima}>
                        <Hidden
                            xsDown={true}
                        >
                            <IconButton
                                className={classes.menuButton}
                                aria-label="Home"
                                color="inherit"
                                href="/cidadao/home"
                            >
                                <HomeWorkOutlined fontSize='small' />
                                <Typography
                                    align='center'
                                    variant='button'
                                    gutterBottom
                                    display='inline'
                                    className={classes.tipografiaAppBar}
                                >
                                    Home
                            </Typography>
                            </IconButton>
                            <IconButton
                                className={classes.menuButton}
                                aria-label="Register"
                                color="inherit"
                                href="/cidadao/vacinacaodadosgerais"
                            >
                                <FavoriteBorderOutlined fontSize='small' />
                                <Typography
                                    align='center'
                                    variant='button'
                                    gutterBottom
                                    display='inline'
                                    className={classes.tipografiaAppBar}
                                >
                                    Vacinação
                            </Typography>
                            </IconButton>
                            <IconButton
                                className={classes.menuButton}
                                aria-label="Register"
                                color="inherit"
                                href='/cidadao/boletimbahia'
                            >
                                <ListAltOutlined fontSize='small' />
                                <Typography
                                    align='center'
                                    variant='button'
                                    gutterBottom
                                    display='inline'
                                    className={classes.tipografiaAppBar}
                                >
                                    Bahia
                            </Typography>
                            </IconButton>
                            <IconButton
                                className={classes.menuButton}
                                aria-label="Users"
                                color="inherit"
                                href='/cidadao/dadossobradinho'
                            >
                                <LocationCityOutlined />
                                <Typography
                                    align='center'
                                    variant='button'
                                    gutterBottom
                                    display='inline'
                                    className={classes.tipografiaAppBar}
                                >
                                    Sobradinho
                            </Typography>
                            </IconButton>
                            <IconButton
                                className={classes.menuButton}
                                aria-label="Users"
                                color="inherit"
                                href='/cidadao/hospitaiscovid19'
                            >
                                <LocalHospitalRounded />
                                <Typography
                                    align='center'
                                    variant='button'
                                    gutterBottom
                                    display='inline'
                                    className={classes.tipografiaAppBar}
                                >
                                    Hospitais
                            </Typography>
                            </IconButton>
                            <IconButton
                                className={classes.menuButton}
                                aria-label="Users"
                                color="inherit"
                                href='/cidadao/meteorologia'
                            >
                                <AcUnit />
                                <Typography
                                    align='center'
                                    variant='button'
                                    gutterBottom
                                    display='inline'
                                    className={classes.tipografiaAppBar}
                                >
                                    Meteorologia
                            </Typography>
                            </IconButton>
                            <IconButton
                                className={classes.menuButton}
                                aria-label="Users"
                                color="inherit"
                                href='/cidadao/documentacao'
                            >
                                <FindInPageOutlined />
                                <Typography
                                    align='center'
                                    variant='button'
                                    gutterBottom
                                    display='inline'
                                    className={classes.tipografiaAppBar}
                                >
                                    Documentação
                            </Typography>
                            </IconButton>
                        </Hidden>
                    </section>
                    <ClimaTempo />
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
};
