import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Tabletop from 'tabletop';
import MaterialTable from 'material-table';

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

const urlUnidadeRetaguardaCovid = 'https://docs.google.com/spreadsheets/d/1__iEtuMkxoqOTuHt8ZmYx1fChygDZxfRY7sJ9sKliz0/edit#gid=0';

export default function UnidadeRetaguardaCovid() {

    const classes = useStyles();

    const [unidadeRetaguardaCovid, setUnidadeRetaguardaCovid] = React.useState([]);

    React.useEffect(() => {
        googleUnidadeReferencia();
        function googleUnidadeReferencia() {
            Tabletop.init({
                key: urlUnidadeRetaguardaCovid,
                callback: function (data, tabletop) {
                    setUnidadeRetaguardaCovid(data);
                },
                simpleSheet: true,
            })
        };
    }, []);

    return (
        <React.Fragment>
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
                    UNIDADES DE RETAGUARDA COVID-19
                </Typography>
                <Typography
                    className={classes.tipografia}
                    variant='body2'
                    align='center'
                    paragraph
                >
                    Hospitais de retaguarda para as unidades de referência. Serão acionados se os hospitais voltados para pacientes diagnosticados positivos ficarem cheios. O encaminhamento será feito exclusivamente via Central de Regulação, ou seja, não receberão pacientes por demanda espontânea.
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
                    data={unidadeRetaguardaCovid}
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
    );
};