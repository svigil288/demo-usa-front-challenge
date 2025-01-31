import { Select } from 'antd';
import PropTypes from 'prop-types';

const SelectYear = ({ setSelectedFilters, options}) => {

const yearOptions = options.map(item => ({ label: item, value: item }));

const handleChange = (value) => {
    setSelectedFilters(value);
}

return (
 <div className='select-year w-full flex flex-row items-center mt-4 mb-4'>
    <h3 className='font-bold p-4 pl-0'>Select filters :</h3>
    <Select
    mode="multiple"
    className="min-w-2/5 h-10"
    placeholder="Please select"
    onChange={handleChange}
    options={yearOptions}
    />
</div>)
};

SelectYear.propTypes = {
    setSelectedFilters: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

export default SelectYear;