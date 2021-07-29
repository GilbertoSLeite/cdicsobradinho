import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'; 
import Banner from 'react-js-banner';
import CepaCovid from  '../../Arquivos/imagens/cepa_covid.png';
import './Imagem.css';

const useStyles = makeStyles(() => ({
    grid:{
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
}))

export default function BannerInfo(){    
    const classes = useStyles();

    return(
        <React.Fragment>                
            <Grid
                id='gridBanner'
                container
                spacing={1}
                direction="row"
                justify='center'
                alignItems='center'
                className={classes.grid}
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                >
                    <Banner 
	                    title=' '
                        css={{
                            backgroundColor: "#152445",
                        }}
                        image={CepaCovid}
                        imageClass='Imagem'
                        visibleTime={20000}
                    /> 
                </Grid>
            </Grid>       
        </React.Fragment>
    );
};
