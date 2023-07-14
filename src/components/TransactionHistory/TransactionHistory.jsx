import css from "./TransactionHistory.module.css";
import general from "../General.module.css";
import propTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
    let transactionsItems = [];
    items.forEach(transaction => {
        transactionsItems.push(
            <tr key={transaction.id}>
                <td className={css.tableData + " " + general.item}>{transaction.type}</td>
                <td className={css.tableData + " " + general.item}>{transaction.amount}</td>
                <td className={css.tableData + " " + general.item}>{transaction.currency}</td>
            </tr>
        )
    });    
    
    return (
        <table className={general.container}>
            <thead>
                <tr>
                    <th className={css.tableHeadline + " " + general.item}>Type</th>
                    <th className={css.tableHeadline + " " + general.item}>Amount</th>
                    <th className={css.tableHeadline + " " + general.item}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactionsItems}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape(
            {
                id: propTypes.string.isRequired,
                type: propTypes.string.isRequired,
                amount: propTypes.string.isRequired,
                currency: propTypes.string.isRequired,
            }
        )
    ).isRequired,
}