
import './pagination.scss'

export const Pagination = ( props ) => {

    const { 
        pageButtons, 
        setpagesGroup, 
        pagesGroup, 
        filteredItems 
    } = props;

    const pagesNumber = () => {
        if (filteredItems) {
            const pages = filteredItems.length / 10;
            return Math.ceil(pages)
        }
    }

    const handlePrev = () => {
        setpagesGroup((prev) => prev - 10)
    }

    const handleNext = () => {
        setpagesGroup((prev) => prev + 10)
    }

    const disablePrevBtn = pagesGroup === 0 ? true : false;

    const disableNextBtn = pagesGroup / 10 === pagesNumber() - 1 ? true : false;

    return (
        
        <div className="pagination">
            <button 
                className="arrow-button"
                onClick={ handlePrev }
                disabled={ disablePrevBtn }
            >
                &lt;
            </button>
            {
                pageButtons &&
                pageButtons.map( pageButton => (
                    <button
                        className="page-button"
                        key={ pageButton }
                        onClick={ () => setpagesGroup((pageButton - 1) * 10) }
                        disabled={ pagesGroup / 10 === pageButton - 1 ? true : false }
                    >
                        { pageButton }
                    </button>
                ))
            }
            <button 
                className="arrow-button"
                onClick={ handleNext }
                disabled={ disableNextBtn }
            >
                &gt;
            </button>
        </div>
    )
}
