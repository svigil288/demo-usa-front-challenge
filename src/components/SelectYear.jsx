import { Select } from 'antd';
import PropTypes from 'prop-types';

const SelectYear = ({ setSelectedFilters, value, options,loading=false}) => {

const yearOptions = options.map(item => ({ label: item, value: item }));

const handleChange = (value) => {
    setSelectedFilters(value);
}

return (
 <div className='select-year w-full flex flex-row items-center mt-4 mb-2'>
    <h3 className='font-bold p-2 pl-0 mr-1'>Filter by year :</h3>
    <Select
    mode="multiple"
    className="min-w-2/4 md:min-w-2/5 xl:min-w-1/4 h-9"
    placeholder="Please select"
    onChange={handleChange}
    options={yearOptions}
    value= {value}
    disabled={loading}
    size=''
    />
</div>)
};

SelectYear.propTypes = {
    setSelectedFilters: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    value: PropTypes.array.isRequired,
}

export default SelectYear;