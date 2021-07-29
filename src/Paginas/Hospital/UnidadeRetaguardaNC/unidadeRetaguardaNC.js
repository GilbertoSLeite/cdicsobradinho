import React from 'react';
import { CssBaseline, makeStyles, Typography } from '@material-ui/core';
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

const urlUnidadeRetaNaoCovid = 'https://docs.google.com/spreadsheets/d/1P6klxnCK7Kbj-NdPFsEPIFCS3vewR8_WeWnp3DQBKc0/edit#gid=0';

export default function UnidadeRetaguardaNaoCovid() {

    const classes = useStyles();

    const [unidadeRetaNaoCovid, setUnidadeRetaNaoCovid] = React.useState([]);

    React.useEffect(() => {
        googleUnidadeRetaNaoCovid();
        function googleUnidadeRetaNaoCovid() {
            Tabletop.init({
                key: urlUnidadeRetaNaoCovid,
                callback: function (data, tabletop) {
                    setUnidadeRetaNaoCovid(data);
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
                    UNIDADES DE RETAGUARDA NÃO-COVID-19
                </Typography>
                <Typography
                    className={classes.tipografia}
                    variant='body2'
                    align='center'
                    paragraph
                >
                    Unidades voltadas para atender pacientes de baixa complexidade que não tenham o novo coronavírus. Estas unidades só receberão pacientes encaminhados via Central de Regulação.
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
                    ]}
                    data={unidadeRetaNaoCovid}
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