import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import {
    Grid,
    Typography,
} from '@material-ui/core';
import GraficoComorbidade from './dadosGraficosCom';
import DadosFaixaEtaria from './dadosFaixaEtaria';

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
    grid: {
        width: "100%",
        alignItems: 'center',
    },
}));

//const urlBolGeral = "https://brasil.io/api/v1/dataset/covid19/caso/data/";

const token = 'e206d2034867769cece045e7453eacd2ce24eed6';
const datasetSlug = "covid19";
const tableName = "caso_full";
const filters = { state: "BA", is_last: "True" };

const urlBolGeral = `https://api.brasil.io/v1/dataset/${datasetSlug}/${tableName}/data?state=${filters.state}&is_last=${filters.is_last}`


var myHeaders = new Headers();
myHeaders.append("Authorization", `Token ${token}`);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
};

function dataQuadro(value) {
    let valor = ('' + value + '');

    let dia = valor.substring(8, 10);
    let mes = valor.substring(5, 7);
    let ano = valor.substring(0, 4);

    return [dia, mes, ano].join('/');

};

export default function BoletimBahia() {

    const classes = useStyles();
    const [boletimBahia, setBoletimBahia] = React.useState([]);

    React.useEffect(() => {
        boletimDados()
        async function boletimDados() {
            try {
                const response = await fetch(urlBolGeral, requestOptions);
                const boletimDados = await response.json();
                setBoletimBahia(boletimDados.results);
            } catch (error) {
                console.log('Meu amiguinho Hacker, ocorreu o erro : ' + error + ' avalie para que a gente não passe mas por ele.')
            }
        };
    }, []);

    function CidadeNull(value) {
        if ((value.city) && (value.city !== 'Importados/Indefinidos') && (value.state === 'BA')) {
            return value
        };
    };

    return (
        <React.Fragment>
            <div
                className={classes.root}
            >
                <MaterialTable
                    title='Dados Informativos da Bahia'
                    isLoading={!boletimBahia ? true : false}
                    style={{
                        backgroundColor: '#919191',
                        fontWeight: 'bold',
                        color: '#ffffff'
                    }}
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
                            title: 'Atualização',
                            field: 'date',
                            type: 'date',
                            align: 'center',
                            render: rowData => <div>{dataQuadro(rowData.date)}</div>,
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Sem. Epidemiológica',
                            field: 'epidemiological_week',
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Cidade',
                            field: 'city',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Confirmado',
                            field: 'last_available_confirmed',
                            align: 'center',
                            render: rowData => <div>{!rowData.last_available_confirmed ? '' : rowData.last_available_confirmed.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 })}</div>,
                            type: 'numeric',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Conf. por 100 Mil Hab.',
                            field: 'last_available_confirmed_per_100k_inhabitants',
                            align: 'center',
                            render: rowData => <div>{!rowData.last_available_confirmed_per_100k_inhabitants ? '' : rowData.last_available_confirmed_per_100k_inhabitants.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>,
                            type: 'numeric',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'População',
                            field: 'estimated_population',
                            render: rowData => <div>{!rowData.estimated_population ? '' : rowData.estimated_population.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 })}</div>,
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Óbitos',
                            field: 'last_available_deaths',
                            render: rowData => <div>{rowData.last_available_deaths.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 })}</div>,
                            type: 'numeric',
                            align: 'center',
                            cellStyle: last_available_deaths => {
                                if (last_available_deaths > 0) {
                                    return {
                                        color: '#ff0202',
                                        fontWeight: "bold",
                                    }
                                } else {
                                    return {
                                        color: '#199e48',
                                        fontWeight: "bold",
                                    }
                                }
                            },
                        },
                        {
                            title: 'Taxa Letalidade',
                            field: 'last_available_death_rate',
                            align: 'center',
                            render: rowData => <div>{rowData.last_available_death_rate.toLocaleString('pt-BR', { style: 'percent', minimumFractionDigits: 2 })}</div>,
                            type: 'numeric',
                            cellStyle: last_available_death_rate => {
                                if (last_available_death_rate > 0) {
                                    return {
                                        color: '#ff0202',
                                        fontWeight: "bold",
                                    }
                                } else {
                                    return {
                                        color: '#199e48',
                                        fontWeight: "bold",
                                    }
                                }
                            },
                        }
                    ]}
                    data={boletimBahia.filter(CidadeNull)}
                    options={{
                        headerStyle: {
                            backgroundColor: '#152445',
                            color: '#FFF'
                        },
                        search: true,
                        sorting: true,
                        paging: true,
                        pageSize: 5,
                        pageSizeOptions: [5, 25, 50, 100],
                        searchAutoFocus: true,
                        showFirstLastPageButtons: true,
                        draggable: true,
                        exportButton: true,
                        rowStyle: {
                            backgroundColor: '#0a5d5e',
                        },
                        columnsButton: true,
                        actionsCellStyle: {
                            backgroundColor: '#152445',
                            color: '#000201',

                        }
                    }}
                />
                <Typography paragraph></Typography>
                <Grid
                    spacing={1}
                    alignItems="center"
                    justify="center"
                    container
                    className={classes.grid}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <Typography
                            gutterBottom
                            variant='body1'
                            align='center'
                            className={classes.tipografia}
                        >
                            Óbitos por Comorbidade
                        </Typography>
                        <GraficoComorbidade />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <Typography
                            gutterBottom
                            variant='body1'
                            align='center'
                            className={classes.tipografia}
                        >
                            Confirmado por Faixa Etária
                    </Typography>
                        <DadosFaixaEtaria />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};