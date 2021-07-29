import React from 'react';
import {
    Typography
} from '@material-ui/core';
import { MoodBad } from '@material-ui/icons';
import { Link } from '@material-ui/core';

export default function ConversaIncial() {

    return (
        <div>
            <Typography
                align='justify'
                variant='body1'
            >
                Olá, eu sou Amanda, sou atendende virtual!
            </Typography>
            <Typography
                align='justify'
                variant='body1'
            >
                A partir do dia 30 de julho de 2021, irei descansar e não estarei mas aqui. <MoodBad  />
            </Typography>
            <Typography
                align='center'
            >
                Indicamos o consumo das informação através do 
                <Link
                    onClick={() => window.open('https://www.instagram.com/prefamargosa/', '_blank')}
                    to='https://www.instagram.com/prefamargosa/'
                    > 
                    instragram do município</Link>, do 
                    <Link
                    onClick={() => window.open('https://play.google.com/store/apps/details?id=com.cidadedigital.amargosa&hl=pt', '_blank')}
                    to='https://play.google.com/store/apps/details?id=com.cidadedigital.amargosa&hl=pt'
                    > 
                    aplicativo ofical do município via Android, </Link> 
                    <Link
                    onClick={() => window.open('https://apps.apple.com/br/app/amargosa-digital/id1482671115', '_blank')}
                    to='https://apps.apple.com/br/app/amargosa-digital/id1482671115'
                    > 
                    aplicativo ofical do município via IOS(App Store)</Link> e/ou 
                    <Link
                    onClick={() => window.open('https://amargosa.ba.gov.br/', '_blank')}
                    to='https://amargosa.ba.gov.br/'
                    > 
                    site oficial</Link>.
            </Typography>
        </div>
    )
}