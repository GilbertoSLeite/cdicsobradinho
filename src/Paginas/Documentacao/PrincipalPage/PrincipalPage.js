import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography
} from '@material-ui/core';
import {
    HomeOutlined
} from '@material-ui/icons';
import TipoDoenca from '../../../Arquivos/imagens/documentacao/escolhaTipoDoenca.png'
import Lei from '../../../Arquivos/imagens/documentacao/legislacao_dcdi.png';

const useStyles = makeStyles(() => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '0',
        backgroundColor: '#0a5d5e',
    },
    textMedia: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    tipografia: {
        color: "#152445",
        fontWeight: 'bold'
    },
    tipografiaText: {
        color: '#ffff'
    },
    link: {
        color: '#ffff',
        fontWeight: 'bold',
    }
}));


export default function PrincipalPage() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div
                className={classes.root}
            >
                <Typography
                    align='center'
                    variant='h5'
                    className={classes.tipografia}
                >
                    Tela Principal - Home <HomeOutlined />
                </Typography>
                <Typography
                    paragraph
                    align='justify'
                    variant='body1'
                    className={classes.tipografiaText}
                >
                    Na tela principal do sistema é possível identificar a informação referente a data corrente ao qual o Boletim Diário se refere.
            </Typography>
                <Typography
                    paragraph
                    align='justify'
                    variant='body1'
                    className={classes.tipografiaText}
                >
                    <i>Obs.: A Data exibida na tela, não é a data do registro do boletim e, sim, a data que o Boletim faz referência. Imagine que o último boletim foi registrado a dois dias, sendo assim, vai aparecer a data de hoje, fazendo referência a este último boletim cadastrado(Que foi a dois dias).</i>
                </Typography>
                <Typography
                    paragraph
                    align='justify'
                    variant='body1'
                    className={classes.tipografiaText}
                >
                    A depender da versão em que o sistema esteja funcionando em seu município, é possível que você veja a opção de escolha do tipo de doença que deseja visualizar as informações, conforme imagem abaixo.
            </Typography>
                <Typography
                    align='center'
                    variant='body1'
                    className={classes.tipografia}
                >
                    Imagem: Escolha de Exibição dos Dados por Tipo de Doença
            </Typography>
                <img alt='Tipo Doença' src={TipoDoenca} className={classes.textMedia} />
                <Typography
                    paragraph
                    align='justify'
                    variant='body1'
                    className={classes.tipografiaText}
                >
                    Caso sua versão ainda não tenha essa funcionalidade será exibido a informação referente a última lei emitida no combate a doença infectocontagiosa que está sendo exibida na tela no momento, conforme imagem abaixo.
            </Typography>
                <Typography
                    align='center'
                    variant='body1'
                    className={classes.tipografia}
                >
                    Imagem: Lei de Ações Efetivadas pelo Município
            </Typography>
                <img alt='Lei Doença' src={Lei} className={classes.textMedia} />
                <Typography
                    paragraph
                    align='justify'
                    variant='body1'
                    className={classes.tipografiaText}
                >
                    Ao clicar sobre a informação de legislação, o sistema irá redirecionar para uma nova aba do seu navegador, a lei informada em tela.
            </Typography>
            </div>
        </React.Fragment>
    );
};