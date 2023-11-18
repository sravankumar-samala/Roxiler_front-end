import formatDateOfSale from "../../../helpers/formatDateOfSale"
// import formatTitleString from "../../../helpers/formatTitleString"

export default function RenderTransaction({ productObj }) {
    const { title, price, category, sold, dateOfSale, image } = productObj
    const { formattedDate, formattedTime } = formatDateOfSale(dateOfSale)

    return (
        <tr className="data-row">
            <td><img src={image} alt='product pic' className="data-img" /></td>
            {/* <td className="title">{formatTitleString(title, 8)}</td> */}
            <td className="title">{title}</td>
            <td>{category}</td>
            <td>{+price.toFixed(2)}</td>
            <td>{sold}</td>
            <td className="date-of-sale">
                <p>{formattedDate}</p>
                <p>{formattedTime}</p>
            </td>
        </tr>
    )
}