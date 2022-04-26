import { FilterDate } from '../filterDate'
import { FilterTitle } from '../filterTitle'

import './filter.scss'

export const Filter = ( props ) => {

    const {
        items,
        showKind,
        filteredItems,
        setFilteredItems,
        setPageButtons,
        capitalize
    } = props;


    return (
        <>
            <div className="filter-container">
                <div className="container">
                    <FilterTitle 
                        placeholder={ `Search ${capitalize(showKind)}` }
                        type="text"
                        items={ items }
                        showKind={ showKind }
                        setFilteredItems={ setFilteredItems }
                        filteredItems={ filteredItems }
                        setPageButtons={ setPageButtons }
                    />
                    <FilterDate 
                        items={ items }
                        showKind={ showKind }
                        setFilteredItems={ setFilteredItems }
                        filteredItems={ filteredItems }
                        setPageButtons={ setPageButtons }
                    />
                </div>
            </div>
        </>
    )
}
