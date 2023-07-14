import css from "./Statistics.module.css";
import general from "../General.module.css";
import propTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics + " " + general.container}>
            {title === undefined ? "" : <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {
                    stats.map(statsItem => 
                        (
                            <li className={css.statisticsItem + " " + general.item} key={statsItem.id}>
                                <span className={css.label}>{statsItem.label}</span>
                                <span className={css.percentage}>{statsItem.percentage}%</span>
                            </li>
                        )
                    )
                }
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