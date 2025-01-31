import SelectYear from "../components/SelectYear";
import { useEffect, useState, useMemo } from 'react';
import getPopulation from "../api/getPopulation";
import Histogram from '../components/Histogram';

const HomePage = () => {
    const [selectedFilters,setSelectedFilters] = useState([]);
    const [populationData,setPopulationData] = useState([]);
    const [yearOptions,setYearOptions] = useState([]);

    const getYearOptions = (data) => {
        return data.map(item => item.Year);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPopulation();
            const years = getYearOptions(response);
            setYearOptions(years);
            setPopulationData(response);            
        }
        fetchData();
      }, [])

    
    const filteredData = useMemo(() => {
        if (selectedFilters.length === 0) return populationData;
        const filteredData = populationData.filter(item => selectedFilters.includes(item.Year));
        return  filteredData;
    },[selectedFilters,populationData]);

    return (
        <div className="container mx-auto flex flex-col justify-center">
            <SelectYear setSelectedFilters={setSelectedFilters} options={yearOptions}/>
            <Histogram data={filteredData} years={selectedFilters}/>
        </div>
    );
}

export default HomePage;