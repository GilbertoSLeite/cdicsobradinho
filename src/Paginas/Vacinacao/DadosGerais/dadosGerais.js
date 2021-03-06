import React from 'react';
import {
    CssBaseline,
    Link,
    makeStyles,
    Typography
} from '@material-ui/core';
import Tabletop from "tabletop";
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
    tipografiaDados: {
        color: '#00a63d'
    },
}))

export default function DadosGerais() {

    const classes = useStyles();

    const [dadosVacinacao, setDadosVacinacao] = React.useState([]);
    const [dadosEmpresas, setDadosEmpresas] = React.useState([]);
    const [dadosVacinacaoMundo, setDadosVacinacaoMundo] = React.useState([]);
    const [dadosVacinacaoBahia, setDadosVacinacaoBahia] = React.useState([]);

    const urlStatus = 'https://docs.google.com/spreadsheets/d/1qRN1CTiEBqQkxfOUI8_wYfXiWxoVjHKiwruslmfOqSs/edit#gid=0';
    const urlEmpresa = 'https://docs.google.com/spreadsheets/d/1qRN1CTiEBqQkxfOUI8_wYfXiWxoVjHKiwruslmfOqSs/edit#gid=478160310';
    const urlVacinacaoMundo = 'https://docs.google.com/spreadsheets/d/10HxhPxbq9VUmlF3TX6fFox7ZOVsWEAZKf1q6Bx0Bx88/edit#gid=0';
    const urlVacinacaoBahia = 'https://docs.google.com/spreadsheets/d/1-WgsvOPV_AKXpPvu3F8_ziWhaSE57pSwBUcyzPheC0A/edit#gid=0';

    React.useEffect(() => {
        googleVacinacao();
        function googleVacinacao() {
            Tabletop.init({
                key: urlStatus,
                callback: function (data, tabletop) {
                    setDadosVacinacao(data);
                },
                simpleSheet: true,
                simpleUrl: true,
                wanted: ["Status"]
            })
        };
    }, []);

    React.useEffect(() => {
        googleVacinacao();
        function googleVacinacao() {
            Tabletop.init({
                key: urlEmpresa,
                callback: function (data, tabletop) {
                    setDadosEmpresas(data);
                },
                simpleSheet: true,
                simpleUrl: true,
                wanted: ["Companies"]
            })
        };
    }, []);

    React.useEffect(() => {
        googleVacinacaoMundo();
        function googleVacinacaoMundo() {
            Tabletop.init({
                key: urlVacinacaoMundo,
                callback: function (data, tabletop) {
                    setDadosVacinacaoMundo(data);
                },
                simpleSheet: true,
            })
        };
    }, []);

    React.useEffect(() => {
        googleVacinacaoMundo();
        function googleVacinacaoMundo() {
            Tabletop.init({
                key: urlVacinacaoBahia,
                callback: function (data, tabletop) {
                    setDadosVacinacaoBahia(data);
                },
                simpleSheet: true,
            })
        };
    }, []);

    function TraduzindoTipoImunizante(value) {
        if (value === 'Inactivated') {
            return 'V??rus Inativo'
        } else if (value === 'Viral vector-based') {
            return 'Vetores Virais N??o Replicantes'
        } else if (value === 'Subunit') {
            return 'Subunidade'
        } else if (value === 'Live-attenuated') {
            return 'Vivos Atenuados'
        } else if (value === 'DNA') {
            return 'Uso do DNA'
        } else if (value === 'RNA') {
            return 'Uso do RNA'
        } else if (value === 'VLP') {
            return 'Part??culas Pseudovirais'
        } else if (value === 'Adenovirus') {
            return 'Contra Adenov??rus'
        } else if (value === 'Antibody-Based Vaccine') {
            return 'Uso de Anticorpos'
        } else if (value === 'Unknown') {
            return 'Metodologia Desconhecida'
        }
    };

    function DefinicaoFase(value) {
        var fase;
        switch (value) {
            case '1': fase = 'Pesquisa Pr?? Cl??nico';
                break;
            case '2': fase = 'Ensaios Pr?? Cl??nicos';
                break;
            case '3': fase = 'Teste de Fase 1';
                break;
            case '4': fase = 'Teste de Fase 2';
                break;
            case '5': fase = 'Teste de Fase 3';
                break;
            case '6': fase = 'Aprovado pelo Org??o Respons??vel';
                break;
            default: fase = 'Dispon??vel';
        };
        return fase;
    }

    function RetornarBandeira(value) {
        var url = 'https://www.countryflags.io/' + value + '/flat/32.png';
        return url
    };

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
                    DADOS MUNDIAL DE IMUNIZA????O AUTOMATIZADA
                </Typography>

                <MaterialTable
                    title='Dados Imuniza????o Mundial'
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
                            searchTooltip: 'Pesquise o Nome do Pa??s',
                            searchPlaceholder: 'Pesquise o Nome do Pa??s'
                        },
                        pagination: {
                            labelRowsSelect: 'Dados',
                            labelDisplayedRows: '{from}-{to} de {count}',
                            firstAriaLabel: 'In??cio',
                            firstTooltip: 'In??cio',
                            previousAriaLabel: 'P??gina Anterior',
                            previousTooltip: 'P??gina Anterior',
                            nextAriaLabel: 'Pr??xima P??gina',
                            nextTooltip: 'Pr??xima P??gina',
                            lastAriaLabel: 'Fim',
                            lastTooltip: 'Fim',
                        },
                        body: {
                            emptyDataSourceMessage: 'Nenhuma informa????o encontrada.',
                        },

                    }}
                    columns={[
                        {
                            title: 'Posi????o Absoluta',
                            field: 'identificador',
                            align: 'center',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                        },
                        {
                            title: 'Pa??s Imunizado',
                            field: 'pais',
                            align: 'center',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                        },
                        {
                            title: 'Quant. Pessoas Imunizadas',
                            render: rowData => <div>{parseFloat(rowData.doses_administradas).toLocaleString('pt-BR', { style: 'decimal' })}</div>,
                            field: 'doses_administradas',
                            type: 'numeric',
                            align: 'center',
                            cellStyle: {                                 
                                fontWeight: 'bold', 
                                color: '#fff' 
                                }
                        },
                        {
                            title: 'Popula????o',
                            render: rowData => <div>{parseFloat(rowData.quantidade_habitantes).toLocaleString('pt-BR', { style: 'decimal' })}</div>,
                            field: 'quantidade_habitantes',
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { 
                                fontWeight: 'bold', 
                                color: '#fff' 
                                }
                        },
                        {
                            title: 'Percentual de Imunizados',
                            render: rowData => <div>{parseFloat(rowData.percentual).toLocaleString('pt-BR', { style: 'decimal' }) + '%'}</div>,
                            field: 'percentual',
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { 
                                fontWeight: 'bold', 
                                color: '#fff' 
                                }
                        },
                        {
                            title: 'Vacinados Por Mil Hab.',
                            render: rowData => <div>{parseFloat(rowData.por_mil).toLocaleString('pt-BR', { style: 'decimal' })}</div>,
                            field: 'por_mil',
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { 
                                fontWeight: 'bold', 
                                color: '#fff' 
                                }
                        },
                        {
                            title: 'Atualizado',
                            field: 'atulizado',
                            type: 'date',
                            align: 'center',
                            cellStyle: { 
                                fontWeight: 'bold', 
                                color: '#fff' 
                                }
                        },

                    ]}
                    data={dadosVacinacaoMundo}
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
                <Typography paragraph></Typography>
                <MaterialTable
                    title='Dados Imuniza????o Bahia'
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
                            searchTooltip: 'Pesquise o Nome do Pa??s',
                            searchPlaceholder: 'Pesquise o Nome do Pa??s'
                        },
                        pagination: {
                            labelRowsSelect: 'Dados',
                            labelDisplayedRows: '{from}-{to} de {count}',
                            firstAriaLabel: 'In??cio',
                            firstTooltip: 'In??cio',
                            previousAriaLabel: 'P??gina Anterior',
                            previousTooltip: 'P??gina Anterior',
                            nextAriaLabel: 'Pr??xima P??gina',
                            nextTooltip: 'Pr??xima P??gina',
                            lastAriaLabel: 'Fim',
                            lastTooltip: 'Fim',
                        },
                        body: {
                            emptyDataSourceMessage: 'Nenhuma informa????o encontrada.',
                        },

                    }}
                    columns={[
                        {
                            title: 'C??digo IBGE',
                            field: 'codigo_ibge',
                            align: 'center',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                        },
                        {
                            title: 'Nome Munic??pio',
                            field: 'nome_municipio',
                            align: 'center',
                            cellStyle: {
                                fontWeight: 'bold',
                                color: '#ffffff',
                            },
                        },
                        {
                            title: 'Qtd. Pessoas Imunizadas - 1?? Dose',
                            render: rowData => <div>{
                                parseFloat(rowData.dose_aplicadas).toLocaleString('pt-BR', { style: 'decimal' })
                            }</div>,
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Qtd. Pessoas Imunizadas - 2?? Dose',
                            render: rowData => <div>{
                                parseFloat(rowData.segunda_dose_aplicada).toLocaleString('pt-BR', { style: 'decimal' })
                            }</div>,
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Qtd. Doses Entregue',
                            render: rowData => <div>{parseFloat(rowData.dose_entregue).toLocaleString('pt-BR', { style: 'decimal' })}</div>,
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: '% Aplica????o de Doses',
                            render: rowData => <div>{
                                parseFloat(((100 * rowData.dose_aplicadas) / rowData.dose_entregue)).toLocaleString('pt-BR', { style: 'decimal' }) + '%'
                            }</div>,
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Popula????o do Munic??pio',
                            render: rowData => <div>{parseFloat(rowData.populacao_ibge).toLocaleString('pt-BR', { style: 'decimal' })}</div>,
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: '% Imunizados por 100 Popula??ao',
                            render: rowData => <div>{
                                parseFloat(((100 * rowData.dose_aplicadas) / rowData.populacao_ibge)).toLocaleString('pt-BR', { style: 'decimal' }) + '%'
                            }</div>,
                            type: 'numeric',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },

                    ]}
                    data={dadosVacinacaoBahia}
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
                <Typography paragraph></Typography>
                <MaterialTable
                    title='Dados da Empresa Respons??vel pelos Imunizantes'
                    style={{ backgroundColor: '#919191', fontWeight: 'bold', color: '#ffffff' }}
                    align='center'
                    localization={{
                        toolbar: {
                            exportTitle: 'Exportar Dados',
                            showColumnsTitle: 'Mostrar as Colunas',
                            addRemoveColumns: 'Adicionar ou Remover Colunas',
                            searchTooltip: 'Digite para Pesquisar',
                            searchPlaceholder: 'Digite para Pesquisar'
                        },
                        pagination: {
                            labelRowsSelect: 'Dados',
                            labelDisplayedRows: '{from}-{to} de {count}',
                            firstAriaLabel: 'In??cio',
                            firstTooltip: 'In??cio',
                            previousAriaLabel: 'P??gina Anterior',
                            previousTooltip: 'P??gina Anterior',
                            nextAriaLabel: 'Pr??xima P??gina',
                            nextTooltip: 'Pr??xima P??gina',
                            lastAriaLabel: 'Fim',
                            lastTooltip: 'Fim',
                        },
                    }}
                    columns={[
                        {
                            title: 'Pa??s da Empresa',
                            field: 'company_country',
                            align: 'center',
                            render: rowData => <img alt='Bandeira' src={RetornarBandeira(rowData.company_countrycode)} style={{ width: 40, borderRadius: '50%' }} />,
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Nome da Empresa',
                            field: 'company_name',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Pa??s da Empresa',
                            field: 'company_country',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Site da Empresa',
                            field: 'company_link',
                            align: 'center',
                            render: rowData => <div><Link className={classes.tipografia} href={rowData.company_link}>Site da Empresa</Link></div>,
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },

                    ]}
                    data={dadosEmpresas}
                    options={{
                        headerStyle: {
                            backgroundColor: '#152445',
                            color: '#FFF'
                        },
                        sorting: true,
                        paging: true,
                        pageSize: 5,
                        pageSizeOptions: [5, 25, 50, 100],
                        showFirstLastPageButtons: true,
                        draggable: true,
                        columnsButton: true,
                        exportButton: true,
                        rowStyle: {
                            backgroundColor: '#0a5d5e',
                        }
                    }}
                />
                <Typography paragraph></Typography>
                <MaterialTable
                    title='Dados Imunizantes Mundial'
                    style={{ backgroundColor: '#919191', fontWeight: 'bold', color: '#ffffff' }}
                    localization={{
                        toolbar: {
                            exportTitle: 'Exportar Dados',
                            showColumnsTitle: 'Mostrar as Colunas',
                            addRemoveColumns: 'Adicionar ou Remover Colunas',
                            searchTooltip: 'Digite para Pesquisar',
                            searchPlaceholder: 'Digite para Pesquisar'
                        },
                        pagination: {
                            labelRowsSelect: 'Dados',
                            labelDisplayedRows: '{from}-{to} de {count}',
                            firstAriaLabel: 'In??cio',
                            firstTooltip: 'In??cio',
                            previousAriaLabel: 'P??gina Anterior',
                            previousTooltip: 'P??gina Anterior',
                            nextAriaLabel: 'Pr??xima P??gina',
                            nextTooltip: 'Pr??xima P??gina',
                            lastAriaLabel: 'Fim',
                            lastTooltip: 'Fim',
                        },
                    }}
                    body={{
                        emptyDataSourceMessage: 'Nenhuma informa????o encontrada.',
                    }}
                    align='center'
                    columns={[
                        {
                            title: 'Nome da Empresa',
                            field: 'company_name',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Nome do Imunizante',
                            field: 'vaccine_name',
                            align: 'center',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Tipo do Imunizante',
                            field: 'vaccine_type',
                            align: 'center',
                            render: rowData => <div>{TraduzindoTipoImunizante(rowData.vaccine_type)}</div>,
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Fase do Imunizante',
                            field: 'phase',
                            align: 'center',
                            render: rowData => <div>{DefinicaoFase(rowData.phase)}</div>,
                            defaultSort: 'desc',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                        {
                            title: 'Artigo do Imunizante',
                            field: 'articles',
                            align: 'center',
                            render: rowData => <div><Link className={classes.tipografia} href={rowData.articles}>Artigo</Link></div>,
                            defaultSort: 'desc',
                            cellStyle: { fontWeight: 'bold', color: '#fff' }
                        },
                    ]}
                    data={dadosVacinacao}
                    options={{
                        headerStyle: {
                            backgroundColor: '#152445',
                            color: '#FFF'
                        },
                        sorting: true,
                        paging: true,
                        pageSize: 5,
                        pageSizeOptions: [5, 25, 50, 100],
                        showFirstLastPageButtons: true,
                        draggable: true,
                        columnsButton: true,
                        exportButton: true,
                        rowStyle: {
                            backgroundColor: '#0a5d5e',
                        }
                    }}
                />
            </div>
        </React.Fragment>
    )
}