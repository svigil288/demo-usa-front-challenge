import PropTypes from 'prop-types';
import {Chart as ChartJS,Title,Tooltip,Legend,BarElement,LinearScale,CategoryScale} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { DATA_BAR, BAR_PLUGINS } from '../constants/histogram';

ChartJS.register(BarElement,LinearScale,CategoryScale,Title,Tooltip,Legend);

const Histogram = ({ populationData=[], selectedYears=[],stateData=[],selectedState=[] }) => {
    
    const data = selectedState.length > 0 && stateData.length > 0 ? stateData : populationData;

    if (data.length === 0) return;
    
    const dataYears = selectedYears.length > 0 && stateData.length === 0 ? selectedYears : data.map(item => item.Year);
    const dataChart = { 
        labels: dataYears,
        datasets: [
            {
                label: DATA_BAR.Population.label,
                data: data.map(item => item['Population']),
                backgroundColor: DATA_BAR.Population.backgroundColor,
                borderColor: DATA_BAR.Population.borderColor,
                borderWidth: DATA_BAR.Population.borderWidth,
            },
            {
                label: DATA_BAR.Citizens.label,
                data: data.map(item => item['Foreign-Born Citizens']),
                backgroundColor: DATA_BAR.Citizens.backgroundColor,
                borderColor: DATA_BAR.Citizens.borderColor,
                borderWidth: DATA_BAR.Citizens.borderWidth,
            }
        ],
    }
    
    const headerTitle = selectedState.length > 0 ? BAR_PLUGINS.title.stateText : BAR_PLUGINS.title.nationallyText;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: BAR_PLUGINS.legend.position,
            },
            title: {
                display: BAR_PLUGINS.title.display,
                text: headerTitle,
                font:{size: 15}
            }
        },
        maintainAspectRatio: false,
        onClick: (e) => handleBarClick(e),
    }

    const handleBarClick = (e) => {
        const element = e.chart.getElementsAtEventForMode(e.native, 'nearest', { intersect: true }, false);
        if (element.length > 0) {
            const index = element[0].index;
            const year = dataYears[index];
            window.open(`/histogram/${year}`, '_blank');
        }
    } 

    return (<div className="h-[600px] w-full">
        <Bar data={dataChart} options={options}/>
    </div>);
};

Histogram.propTypes = {
    populationData: PropTypes.array,
    selectedYears: PropTypes.array,
    stateData: PropTypes.array,
    selectedState: PropTypes.array,
};

export default Histogram;