import SelectYear from "../components/SelectYear";
import { useEffect, useState, useMemo } from 'react';
import getPopulation from "../api/getPopulation";
import Histogram from '../components/Histogram';
import SelectState from "../components/SelectState";
import getStates from "../api/getStates";
import { notification } from 'antd';
import { Spin } from 'antd';
import {ERROR_NOTIFICATION} from "../constants/notification";

const HomePage = () => {
    const [selectedFilters,setSelectedFilters] = useState([]);
    const [populationData,setPopulationData] = useState([]);
    const [yearOptions,setYearOptions] = useState([]);
    // Bonus: State Feature
    const [stateOptions,setStateOptions] = useState([]);
    const [stateData,setStateData] = useState([]);
    const [selectedState,setSelectedState] = useState([]);
    const [loading,setLoading] = useState(false);
    
    const getYearOptions = (data) => {
        return data.map(item => item.Year);
    }

    const getStateOptions = (data) => {
        const states = data.map(item => ({key: item.id, value:item.name})).sort();
        const sortedStates = states.sort((a,b) => a.value.localeCompare(b.value));
        return sortedStates;
    }

    const clearFilters = () => { 
        setSelectedFilters([]);
        setSelectedState([]);
    }

    useEffect(() => {
        const fetchPopulationData = async () => {
            try {
                setLoading(true);
                const response = await getPopulation();
                const years = getYearOptions(response);
                setYearOptions(years);
                setPopulationData(response);
            } catch {
                notification.error({message: ERROR_NOTIFICATION.message,description: ERROR_NOTIFICATION.description});
                clearFilters();
            } finally {
                setLoading(false);
            }
        }
        fetchPopulationData();
      }, [])

      // Bonus: State Feature
    useEffect(() => {
        const fetchStateOptions = async () => {
            try {
                setLoading(true);
                const response = await getStates();
                const states = getStateOptions(response);
                setStateOptions(states);
            } catch {
                notification.error({message: ERROR_NOTIFICATION.message,description: ERROR_NOTIFICATION.description});
                clearFilters();
            } finally {
                setLoading(false);
            }
        }
        fetchStateOptions();
      }, [])

    
    const filteredData = useMemo(() => {
        if (selectedFilters.length === 0) return populationData;
        const filteredData = populationData.filter(item => selectedFilters.includes(item.Year));
        return  filteredData;
    },[selectedFilters,populationData]);

    // Bonus: State Feature
    useEffect(() => {
        const fetchStatePopulationData = async () => {
            if (selectedState.length > 0) {
                try {
                    setLoading(true);
                    const response = await getPopulation('State',selectedFilters,selectedState[0].key);
                    setStateData(response);
                } catch {
                    notification.error({message: ERROR_NOTIFICATION.message,description: ERROR_NOTIFICATION.description});
                    clearFilters();
                }
                finally {
                    setLoading(false);
                }
            }
        }
        fetchStatePopulationData();
    },[selectedState,selectedFilters])


    return (
        <div className="container mx-auto flex flex-col justify-center">
            <div className="flex flex-col w-full mt-5 lg:mt-3.5 mb-1.5">
            <SelectYear setSelectedFilters={setSelectedFilters} value= {selectedFilters} options={yearOptions} loading={loading}/>
            {/* Bonus: State Feature */}
            <SelectState setSelectedState={setSelectedState} options={stateOptions} loading={loading}/>
            </div>
            {loading ? <div className="container flex items-center justify-center relative min-h-[40vh]">
                <Spin size="large" className="transform translate-x-1/2" spinning /></div>
            : <Histogram populationData={filteredData} 
            selectedYears={selectedFilters} 
            stateData={stateData} 
            selectedState={selectedState}/>}
        </div>
    );
}

export default HomePage;