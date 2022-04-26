
import './titleFilter.scss'

export const FilterTitle = ( props ) => {

    const { 
        placeholder, 
        type, 
        items, 
        showKind, 
        filteredItems, 
        setFilteredItems, 
        setPageButtons 
    } = props;

    const handleSearch = (e) => {
        const searchValue = e.target.value;

        const isInArray = items.data.some((element) => {
            return element.title.toLowerCase().includes(searchValue.toLowerCase())
        })

        if (isInArray) {
            const filteredData = 
                items.data.filter(
                    ({ programType, title }) => 
                    programType === showKind 
                    &&
                    title.toLowerCase().includes(searchValue.toLowerCase()))
                
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
            <div className="filter-title-container">
                <i className="gg-search"></i>
                <input 
                    type={ type } 
                    onChange={ (e) => { handleSearch(e) } }
                    placeholder={ placeholder }
                />
            </div>
        </>
    )
}
