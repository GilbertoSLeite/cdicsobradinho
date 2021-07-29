import { CssBaseline, makeStyles, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import React from 'react';
import Tabletop from "tabletop";

const useStyles = makeStyles(() => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '0',
        backgroundColor: '#0a5d5e',
    },
    tipografia: {
        color: "#ffffff"
    },
    tipografiaAtencao: {
        color: '#000201',
        fontWeight: 'bold'
    }
}))

const urlUnidadeReferencia = 'https://docs.google.com/spreadsheets/d/1GrbcWtHhnnILpOvsinYajExDK6HEbpJhoOxW8V-B_zw/edit#gid=0';

export default function HospitalReferencia() {

    const classes = useStyles();

    const [unidadeReferencia, setUnidadeReferencia] = React.useState([]);

    React.useEffect(() => {
        googleUnidadeReferencia();
        function googleUnidadeReferencia() {
            Tabletop.init({
                key: urlUnidadeReferencia,
                callback: function (data, tabletop) {
                    setUnidadeReferencia(data);
                },
                simpleSheet: true,
            })
        };
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <div
                className={classes.root}
            >
                <Typography paragraph></Typography>
                <Typography
                    className={classes.tipografia}
                    variant='h6'
                    align='center'
                    paragraph
                >
                    UNIDADES DE REFERÊNCIA COVID-19
                </Typography>
                <Typography
                    className={classes.tipografia}
                    variant='body2'
                    align='center'
                    paragraph
                >
                    Hospitais com leitos clínicos e de UTI voltados para pacientes diagnosticados positivos para a Covid-19. Algumas das unidades listadas serão abertas somente quando houver necessidade de ampliação de leitos na rede de assistência.
                </Typography>
                <Typography
                    className={classes.tipografiaAtencao}
                    variant='body2'
                    align='center'
                    paragraph
                >
                    ATENÇÃO: O encaminhamento é feito exclusivamente via Central de Regulação, ou seja, estas unidades não recebem pacientes por demanda espontânea.
                </Typography>
                <MaterialTable
                    title='Dados Hospitais Bahia'
                    style={{
                        backgroundColor: '#919191',
                        fontWeight: 'bold',
                        color: '#ffffff'
                    }}
                    align='center'
                    localization={{
                        toolbar: {
                            exportTitle: 'Exportar Dados',
                            showColumnsTitle: 'Mostrar as Colunas',
                            addRemoveColumns: 'Adicionar ou Remover Colunas',
                            searchTooltip: 'Pesquise o Hospital',
                            searchPlaceholder: 'Pesquise o Hospital'
                        },
                        pagination: {
                            labelRowsSelect: 'Dados',
                            labelDisplayedRows: '{from}-{to} de {count}',
                            firstAriaLabel: 'Início',
                            firstTooltip: 'Início',
                            previousAriaLabel: 'Página Anterior',
                            previousTooltip: 'Página Anterior',
                            nextAriaLabel: 'Próxima Página',
                            nextTooltip: 'Próxima Página',
                            lastAriaLabel: 'Fim',
                            lastTooltip: 'Fim',
                        },
                        body: {
                            emptyDataSourceMessage: 'Nenhuma informação encontrada.',
                        },

                    }}
                    columns={[
                        {
                            title: 'Nome da Unidade',
                            field: 'nome_unidade',
                            align: 'center',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                        },
                        {
                            title: 'Endereço da Unidade',
                            field: 'endereco_unidade',
                            align: 'center',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                        },
                        {
                            title: 'Município',
                            field: 'municipio_unidade',
                            align: 'center',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                        },
                        {
                            title: 'Macroregião',
                            field: 'macroregiao',
                            align: 'center',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                        },
                        {
                            title: 'Contato  do Serviço Social',
                            field: 'contato_serv_social',
                            align: 'center',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                        },
                    ]}
                    data={unidadeReferencia}
                    options={{
                        headerStyle: {
                            backgroundColor: '#152445',
                            color: '#ffffff'
                        },
                        sorting: true,
                        paging: true,
                        pageSize: 5,
                        pageSizeOptions: [5, 25, 50, 100],
                        showFirstLastPageButtons: true,
                        draggable: true,
                        exportButton: true,
                        rowStyle: {
                            backgroundColor: '#0a5d5e',
                        },
                        columnsButton: true,
                        search: true,
                        searchAutoFocus: true,
                        actionsCellStyle: {
                            backgroundColor: '#152445',
                            color: '#000201',

                        }
                    }}
                />
            </div>
        </React.Fragment>
    )
}