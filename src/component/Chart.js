import { Box } from '@material-ui/core'
import {Bar} from 'react-chartjs-2'
const Chart = ({data:{confirmed,recovered,deaths}})=>{
    return(
        <Box className='chartContainer'>
            {confirmed?
            <Bar
                
             data= {{
        labels: ['confirmed', 'recovered', 'deaths'],
        datasets: [{
            label: '# of Votes',
            data: [confirmed.value,recovered.value,deaths.value],
            backgroundColor: [
                'rgba(0, 9, 255, 0.5)',
                'rgba(0, 255,0, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              
            ],
      
        
        }]
    }}
    options= {{
        scales: {
            y: {
                beginAtZero: true
            }
        }
        
    }}
            /> :''}
        </Box>
    )


}
export default Chart;