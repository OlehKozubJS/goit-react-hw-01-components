import css from "./Statistics.module.css";
import general from "../General.module.css";
import propTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    let titleString;
    if (title === undefined) {
        titleString = "";
    }
    else {
        titleString = <h2 className={css.title}>{title}</h2>;
    }

    let statListItems = [];
    stats.forEach(statsItem => {
        statListItems.push(
            <li className={css.statisticsItem + " " + general.item} key={statsItem.id}>
                <span className={css.label}>{statsItem.label}</span>
                <span className={css.percentage}>{statsItem.percentage}%</span>
            </li>
        );
    });

    return (
        <section className={css.statistics + " " + general.container}>
            {titleString}

            <ul className={css.statList}>
                {statListItems}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.arrayOf(
        propTypes.shape(
            {
                id: propTypes.string.isRequired,
                label: propTypes.string.isRequired,
                percentage: propTypes.number.isRequired,
            }
        )
    ).isRequired,
}