import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./filterDate.scss"

export const FilterDate = ( props ) => {

    const { 
        items, 
        showKind, 
        setFilteredItems, 
        filteredItems, 
        setPageButtons 
    } = props;

    const [startDate, setStartDate] = useState(new Date());

    const handleYearFilter = (date) => {

        const isInArray = items.data.some((element) => {
            return element.releaseYear === date.getFullYear()
        })

        if (isInArray) {
            const filteredData = 
                items.data.filter(
                    ({programType, releaseYear}) => 
                    programType === showKind 
                    && 
                    releaseYear === date.getFullYear()
                );

            setFilteredItems({
                ...filteredItems,
                data : filteredData,
                noResults : false
            })

            setPageButtons( new Array(Math.ceil(filteredData.length / 10)).fill().map((_, idx) => idx + 1) )
        } else {
            setFilteredItems({
                noResults : true
            })
        }
    }


    return (
        <>
            <div className="filter-date-container">
                {/* <i className="gg-calendar"></i> */}
                <DatePicker
                    onChangeRaw={(e) => e.preventDefault()}
                    selected={ startDate }
                    onChange={(date) => setStartDate(date)}
                    showYearPicker
                    dateFormat="yyyy"
                    onSelect={(date) => handleYearFilter(date)}
                    yearItemNumber={12}
                    calendarClassName="filter-date"
                />
            </div>
        </>
    )
}
