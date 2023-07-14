import css from "./css modules/TransactionHistory.module.css";
import general from "./css modules/General.module.css";

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