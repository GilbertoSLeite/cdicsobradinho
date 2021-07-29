import React from 'react';
import {
    CssBaseline,
    makeStyles,
    Typography
} from '@material-ui/core';
import MaterialTable from 'material-table';
import Tabletop from 'tabletop';
import FormatandoData from '../../Funcoes/formatandoData';

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
    tipografiaDados: {
        color: '#00a63d'
    },
}));

const urlBoletimAmargosa = 'https://docs.google.com/spreadsheets/d/1uR3gZrd98Yx7asgZL9bmVhj4zBQyVLYWyheUeDsJBII/edit#gid=0'

export default function DadosAmargosa() {

    const classes = useStyles();

    const [boletimAmargosa, setBoletimAmargosa] = React.useState([]);

    React.useEffect(() => {
        try {
            Tabletop.init({
                key: urlBoletimAmargosa,
                callback: function (data, tabletop) {
                    setBoletimAmargosa(data);
                },
                simpleSheet: true,
            });
        } catch (error) {
            console.error('Ocorreu ' + error + ' em DadosAmargosa');
        }
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <div
                className={classes.root}
            >
                <Typography
                    className={classes.tipografia}
                    variant='h6'
                    align='center'
                    paragraph
                >
                    DADOS DO MUNICÍPIO DE SOBRADINHO
                </Typography>
                <MaterialTable
                    title='Dados Geral'
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
                            searchTooltip: 'Digite para Pesquisar',
                            searchPlaceholder: 'Digite para Pesquisar',
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
                            title: 'Data Registro',
                            field: 'data_boletim',
                            render: rowData => <div>{FormatandoData(rowData.data_boletim)}</div>,
                            type: 'date',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                        {
                            title: 'Monitorado',
                            field: 'monitorados',
                            type: 'numeric',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                        {
                            title: 'Descartado Acumulado',
                            field: 'descartado',
                            type: 'numeric',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                        {
                            title: 'Descartado',
                            field: 'descartado_dia',
                            type: 'numeric',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                        {
                            title: 'Confirmado Acumulado',
                            field: 'confirmado',
                            type: 'numeric',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                        {
                            title: 'Confirmado',
                            field: 'confirmado_dia',
                            type: 'numeric',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                        {
                            title: 'Recuperados Acumulados',
                            field: 'recuperados',
                            type: 'numeric',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                        {
                            title: 'Recuperados',
                            field: 'recuperado_dia',
                            type: 'numeric',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                        {
                            title: 'Óbitos Acumulados',
                            field: 'mortes',
                            type: 'numeric',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                        {
                            title: 'Óbitos',
                            field: 'mortes_dias',
                            type: 'numeric',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#fff'
                            }
                        },
                    ]}
                    data={boletimAmargosa}
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