import { Box, CardContent, Grid, Typography,Card } from '@material-ui/core';
import CountUp from 'react-countup';
import React from 'react';

import './Style.css';

const CardComponent = ({cardTitle,value,desc,lastUpdate})=>{
    return(
        <Grid component={Card} className='gridCard'  >
        <Box className='header1'>
            <Typography className='heading'>{cardTitle }</Typography>
        </Box>
        <CardContent>
            <Typography variant='h6' color=''>
              <CountUp start={0} end={value} duration={3} separator=',' />

            </Typography>
            <Typography color='textSecondary'>
                {desc}
            </Typography>
            <Typography>
                {new Date(lastUpdate).toDateString()}
            </Typography>
           
            
        </CardContent>
        </Grid>
    
    )
    

}
export default CardComponent;