import { Table, ConfigProvider } from 'antd';
import COLUMNS_TABLE from '../constants/columnsTable';
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
        return {
            ...item,
            key: item['ID State'],
            'Foreign-Born Citizens % of Total': ((item['Foreign-Born Citizens'] / item['Population']) * 100).toFixed(2) + ' %',
        }
    });

    return (
        <div className="container mx-auto flex justify-center items-center flex-col">
            <h1 className="font-bold mt-6 mb-6">Population Data by State for {year}</h1>
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