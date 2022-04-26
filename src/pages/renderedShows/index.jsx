import { useEffect, useState } from 'react'

import { Filter } from '../../components/filter'
import { Item } from '../../components/item'
import { Pagination } from '../../components/pagination'

import { getData } from '../../helpers/getData'

import './renderedShows.scss'

export const RenderedShows = ( props ) => {

    const { showKind, showFilter } = props.props

    const [items, setItems] = useState({
        isLoading : true,
        data : null
    })

    const [ filteredItems, setFilteredItems ] = useState({
        isLoading : true,
        data : null
    })

    const [ pagesGroup, setpagesGroup ] = useState(0)

    const [ pageButtons, setPageButtons ] = useState([])

    

    useEffect(() => {

        const setData = async () => {
            const data = await getData();

            setItems({
                isLoading : false,
                data : data.entries
            })
             
            const filteredData = data.entries.filter(({programType}) => programType === showKind);

            setFilteredItems({
                isLoading : false,
                data : filteredData
            })

            setPageButtons( new Array(Math.ceil(filteredData.length / 10)).fill().map((_, idx) => idx + 1) )
        }

        setData()

    }, [ showKind ])

    const capitalize = ([first, ...rest]) => {
        return first.toUpperCase() + rest.join('').toLowerCase();
    }

    return (
        <>
            <div className="rendered-shows">
                {
                    showFilter &&
                    <Filter 
                    items={ items }
                    showKind={ showKind }
                    setFilteredItems={ setFilteredItems }
                    filteredItems={ filteredItems }
                    setPageButtons={ setPageButtons }
                    capitalize={ capitalize }
                    />
                }
                <div 
                    className={`loading-container ${ !items.isLoading && 'loaded' }`}
                    >
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                <div className="container">
                    <div className="title">
                        <h3>Popular { capitalize(showKind) }</h3>
                    {
                        filteredItems.noResults && 
                        <div className="no-results">
                            <h1>No results</h1>
                        </div>
                    }
                    </div>
                    <div className="items-container">
                        {
                            filteredItems.data &&
                            filteredItems.data
                                .slice( pagesGroup, pagesGroup + 10)
                                .map(({ images, title, releaseYear, description}, idx) =>  (
                                    
                                    <Item 
                                        key={ idx }
                                        images={ images }
                                        title={ title }
                                        releaseYear={ releaseYear }
                                        description={ description }
                                    />
                                ))
                        }
                    </div>
                    {
                        !filteredItems.noResults &&
                        <Pagination
                            filteredItems={ filteredItems.data }
                            pagesGroup={ pagesGroup }
                            pageButtons={ pageButtons }
                            setpagesGroup={ setpagesGroup }
                        />
                    }
                </div>
            </div>
        </>
    )
}
