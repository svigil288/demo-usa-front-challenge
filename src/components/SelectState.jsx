import { AutoComplete } from "antd";
import PropTypes from "prop-types";

const SelectState = ({ setSelectedState, options, loading=false }) => {
    
    const handleSelect = (value) => {
        const geoOption = options.filter(item => item.value === value);
        setSelectedState(geoOption);
    };

    const handleChange = (e) => {
        if (e.length === 0) {
            setSelectedState([]);
        }
    };
    
    return (
        <div className="select-year w-full flex flex-row items-center mt-2 mb-2">
        <h3 className="font-bold p-2 pl-0">Filter by state :</h3>
        <AutoComplete
            mode="multiple"
            className="min-w-2/4 min-h-10 md:min-w-2/5 xl:min-w-1/4"
            placeholder="Please select"
            onSelect={handleSelect}
            onChange={handleChange}
            options={options}
            allowClear={true}
            onClear = {() => setSelectedState([])}
            filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
            disabled={loading}
        />
        </div>
    );
}

SelectState.propTypes = {
    setSelectedState: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default SelectState;
