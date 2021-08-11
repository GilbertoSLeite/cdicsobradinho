import React from 'react';
import { StyledProvider, CookiesBanner } from 'components-extra';
import { createTheme } from '@material-ui/core/styles';

const tema = createTheme({
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

export default function CookieBanner() {

    const [open, setOpen] = React.useState(null);

    const existe = window.localStorage.getItem('@cidadao/cdci');

    if (existe === null) {
        window.localStorage.setItem('@cidadao/cdci', Boolean(true));
        setOpen(true);
    };

    const closeCookies = () => {
        window.localStorage.setItem('@cidadao/cdci', Boolean(false))
        setOpen(false);
    };

    setInterval(() => {
        window.localStorage.removeItem('@cidadao/cdci');
    }, 25000);

    return (
        <React.Fragment>
            {((open) && (existe)) ?
                <StyledProvider theme={tema}>
                    <CookiesBanner
                        text='Our website uses your cookies because we use Google Analytics. The cookie is used to calculate visitor, session, campaign data and keep track of site usage for the sites analytics report. The cookies store information anonymously and assign a randomly generated number to identify unique visitors.'>
                        <CookiesBanner.Button
                            onClick={closeCookies}
                        >
                            Ok
                </CookiesBanner.Button>
                    </CookiesBanner>
                    <CookiesBanner
                        text='O nosso site utiliza o seus Cookies pois usamos o Google Analytics. O cookie é usado para calcular o visitante, a sessão, os dados da campanha e acompanhar o uso do site para o relatório de análise do site. Os cookies armazenam informações anonimamente e atribuem um número gerado aleatoriamente para identificar visitantes únicos.'>
                        <CookiesBanner.Button
                            variant='outlined'
                            onClick={closeCookies}
                        >
                            Ok
                </CookiesBanner.Button>
                    </CookiesBanner>
                </StyledProvider>
                :
                null}
        </React.Fragment>
    );
};