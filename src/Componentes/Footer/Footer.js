import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import {
    Facebook,
    Instagram,
    AccountCircle,
    Email,
} from '@material-ui/icons';
import { StyledProvider, Footer } from 'components-extra';
import ls from '../../Arquivos/imagens/iconspng.png';

const useStyles = makeStyles(() => ({
    imagem: {
        backgroundImage: `url(${ls})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
        backgroundSize: '18%',
        backgroundPosition: 'center',
        color: 'transparent',
    },
}));

const tema = createMuiTheme({
    palette: {
        common: {
            black: '#000201',
            white: '#ffffff'
        },
        type: 'dark',
        primary: {
            main: '#0a5d5e',
            light: 'rgba(74, 128, 153, 1)',
            dark: 'rgba(74, 128, 153, 1)',
            contrastText: 'rgba(255, 255, 255, 1)'
        },
    }
});

export default function FooterSite() {

    const classes = useStyles();

    const newTabInst = () => {
        const url = 'https://www.instagram.com/lsconsultoriasesistemas/';
        window.open(url, '_blank');
    };

    const newTabFace = () => {
        const url = 'https://www.facebook.com/lsconsultorias.srv.br';
        window.open(url, '_blank');
    };

    const newTabLS = () => {
        const url = 'https://www.lsconsultorias.srv.br/';
        window.open(url, '_blank');
    };

    const newTabPref = () => {
        const url = 'http://www.sobradinho.ba.gov.br/';
        window.open(url, '_blank');
    };

    const newTabInstPref = () => {
        const url = 'https://www.instagram.com/prefeituradesobradinhoba/';
        window.open(url, '_blank');
    };

    const newTabFacePref = () => {
        const url = 'https://www.facebook.com/sobradinhoba/';
        window.open(url, '_blank');
    };

    return (
        <StyledProvider theme={tema}>
            <Footer className={classes.imagem}>
                <Footer.Column>
                    <Footer.Item >
                        LS Consultoria & Sistemas LTDA
                    </Footer.Item>
                    <Footer.Item
                        icon={<AccountCircle />}
                        onClick={newTabLS}>
                        Institucional
                    </Footer.Item>
                    <Footer.Item
                        icon={<Instagram />}
                        onClick={newTabInst}>
                        Instagram
                    </Footer.Item>
                    <Footer.Item
                        icon={<Facebook />}
                        onClick={newTabFace}>
                        Facebook
                    </Footer.Item>
                    <Footer.Item
                        icon={<Email />}>
                        E-mail
                    </Footer.Item>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Item>
                        Prefeitura Municipal de Sobradinho
                    </Footer.Item>
                    <Footer.Item
                        icon={<AccountCircle fontSize="large" />}
                        onClick={newTabPref}>
                        Institucional
                    </Footer.Item>
                    <Footer.Item
                        icon={<Instagram />}
                        onClick={newTabInstPref}>
                        Instagram
                    </Footer.Item>
                    <Footer.Item
                        icon={<Facebook />}
                        onClick={newTabFacePref}>
                        Facebook
                    </Footer.Item>
                    <Footer.Item
                        icon={<Email />}>
                        E-mail
                    </Footer.Item>
                </Footer.Column>
            </Footer>
        </StyledProvider>
    );
};