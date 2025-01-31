import PropTypes from 'prop-types';
import {Chart as ChartJS,Title,Tooltip,Legend,BarElement,LinearScale,CategoryScale} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement,LinearScale,CategoryScale,Title,Tooltip,Legend);

const Histogram = ({ data,years }) => {
    
    if(!data) return (<div>no data</div>);
    
    const dataYears = years.length > 0 ? years : data.map(item => item.Year);
    const dataChart = { 
        labels: dataYears,
        datasets: [
            {
                label: 'Population',
                data: data.map(item => item['Population']),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Foreign Citizens',
                data: data.map(item => item['Foreign-Born Citizens']),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }
        ],
    }

    const handleClick = () => {
        console.log('click');
    } 

    return (<div className="w-full h-[70vh]">
        <Bar data={dataChart} options={{responsive: true}} onClick={handleClick}/>
    </div>);
};

Histogram.propTypes = {
    data: PropTypes.array,
    years: PropTypes.array
};

export default Histogram;