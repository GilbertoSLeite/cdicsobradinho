import React from 'react';
import {
    CssBaseline,
    makeStyles,
    Typography
} from '@material-ui/core';
import MaterialTable from 'material-table';
import Tabletop from "tabletop";

const useStyles = makeStyles(() => ({
    tipografia: {
        color: "#ffffff"
    },
    tipografiaDados: {
        color: '#00a63d'
    },
}));

const urlUnidadeTriagem = 'https://docs.google.com/spreadsheets/d/11r8K7SKfYKZ6f0FwY3HSrJBZdBMmQitgTkh-B2hWIpc/edit#gid=0';

export default function UnidadeTriagem() {

    const classes = useStyles();

    const [unidadeTriagem, setDadosUnidadeTriagem] = React.useState([]);

    React.useEffect(() => {
        googleUnidadeTriagem();
        function googleUnidadeTriagem() {
            Tabletop.init({
                key: urlUnidadeTriagem,
                callback: function (data, tabletop) {
                    setDadosUnidadeTriagem(data);
                },
                simpleSheet: true,
            })
        };
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Typography
                className={classes.tipografia}
                variant='h6'
                align='center'
                paragraph
            >
                UPAs 24h E CENTROS DE ATENDIMENTO COVID-19
            </Typography>
            <Typography
                className={classes.tipografia}
                variant='body2'
                align='center'
                paragraph
            >
                Unidades que farão a triagem, classificação e estabilização dos pacientes para, depois, caso seja necessário, estes serem regulados para outras unidades, a depender do perfil.
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
                        title: 'Município',
                        field: 'MUNICÍPIO',
                        align: 'center',
                        cellStyle: {
                            fontWeight: 'bold',
                            color: '#ffffff',
                        },
                    },
                    {
                        title: 'Unidade de Atendimento',
                        field: 'UNIDADE',
                        align: 'center',
                        cellStyle: {
                            fontWeight: 'bold',
                            color: '#ffffff',
                        },
                    },
                    {
                        title: 'Endereço da Unidade de Atendimento',
                        field: 'ENDEREÇO',
                        align: 'center',
                        cellStyle: {
                            fontWeight: 'bold',
                            color: '#ffffff',
                        },
                    },
                    {
                        title: 'Tipo da Unidade',
                        field: 'TIPO',
                        align: 'center',
                        cellStyle: {
                            fontWeight: 'bold',
                            color: '#ffffff',
                        },
                    },
                ]}
                data={unidadeTriagem}
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
        </React.Fragment>
    );
}