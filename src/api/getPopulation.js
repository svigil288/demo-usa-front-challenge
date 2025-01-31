import axiosClient from "./axiosClient";

const getPopulation = async (drilldowns='Nation',years=null) => {
    let url = `?drilldowns=${drilldowns}&measures=Population,`+ encodeURIComponent('Foreign-Born Citizens');
    const yearsString = years && years.join(',');
    if (yearsString) url += `&year=${yearsString}`;
    try {
    const response = await axiosClient.get((url));
    return response.data.data;
    }catch (error) {
    console.log('There was an error with the request:', error.message);
    return Promise.reject(error);
    }
}; 

export default getPopulation;