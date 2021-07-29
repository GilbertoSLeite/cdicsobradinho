import React from 'react';
import {
    CssBaseline,
} from '@material-ui/core';
import {
    Switch,
    Route,
} from "react-router-dom";
import pageRoutes from '../router';
import { BackToTop, StyledProvider } from 'components-extra';
import AppBarSys from '../Componentes/AppBar/appbar';
import Footer from '../Componentes/Footer/Footer';
import Chatbot from '../Paginas/Chatbot/principalChatBot';
import CookieBanner from '../Componentes/CookiesBanner/cookiesBanner';
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();
const pathname = hist.location.pathname;

function FilterRoutes(value) {
    if (pathname === value.path) {
        return value
    }
};

const rotas = pageRoutes.map(x => x).filter(FilterRoutes);

const Main = () => {
    return (
        <Switch>
            {rotas.map((dados, chaves) => {
                return (
                    <Route
                        key={chaves}
                        exact
                        children={<dados.children />}
                        path={dados.path}
                    />
                );
            })}
        </Switch>
    );
};

export default function Layout() {

    return (
        <React.Fragment>
            <CssBaseline />
                <CookieBanner />
                <StyledProvider injectFirst>
                    <AppBarSys />
                    <CssBaseline />
                    <Main />
                    <BackToTop size="small" />
                    <Chatbot />
                </StyledProvider>
                <Footer />
        </React.Fragment>
    );
};