import { useProductsContext } from "../../context/productsContex";
import { monthsData } from "../../data";
import './index.css'


export default function Form() {
    const { month, searchValue, updateSearchValue, updateMonth } = useProductsContext()

    return (
        <form className='form'>
            <input type='search' className='search-input' value={searchValue} placeholder='Search Transaction' onChange={updateSearchValue} />
            <label htmlFor="select-month">Select a month:
                <select onChange={updateMonth} value={month} id="select-month">
                    {monthsData.map((each, i) => (
                        <option key={each} value={i + 1}>{each}</option>
                    ))}
                </select></label>
        </form>
    )
}
