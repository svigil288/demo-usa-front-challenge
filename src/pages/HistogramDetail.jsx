import { Table, ConfigProvider } from 'antd';
import { COLUMNS_TABLE } from '../constants/table';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getPopulation from '../api/getPopulation';

const HistogramDetail = () => {
    const [data,setData] = useState([]);
    const { year } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPopulation('State',[year]);
            setData(response);
        }
        fetchData()
    },[year]);

    const formattedData = data && data.map(item => {
        const foreignBornCitizens = item['Foreign-Born Citizens'];
        const population = item['Population'];
        const percentage = (foreignBornCitizens && population) ? (foreignBornCitizens / population ) * 100 : null;
        return {
            ...item,
            key: item['ID State'],
            'Foreign-Born Citizens % of Total': percentage !== null ? percentage.toFixed(2) + ' %' : null,
        }
    });

    return (
        <div className="container mx-auto flex justify-center items-center flex-col">
            <span className="font-bold mt-6 mb-6 text-lg md:text-xl">State Population Data for {year}</span>
            <ConfigProvider theme={{components: {
                Table:{
                    headerBg: 'rgba(255, 99, 132, 0.2)',
            }
            }}}>
            <Table dataSource={formattedData} columns={COLUMNS_TABLE}/>
            </ConfigProvider>
        </div>
    );
}

export default HistogramDetail;