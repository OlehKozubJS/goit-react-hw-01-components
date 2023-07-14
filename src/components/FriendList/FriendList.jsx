import css from "./FriendList.module.css";
import general from "../General.module.css";
import propTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline}) => {
    <li className={`${css.friendListItem} ${general.item}`}>
        <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
    </li>
}

export const FriendList = ({friends}) => {
    return (
        <ul className={`${css.friendList} ${general.container}`}>
            {
                friends.map(       
                    friend => (
                        <li className={`${css.friendListItem} ${general.item}`} key={friend.id}>
                            <span className={`${css.status} ${friend.isOnline ? css.online : css.offline}`}></span>
                            <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
                            <p className={css.name}>{friend.name}</p>
                        </li>
                    )
                )
            }
        </ul>
    );
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape(
            {
                avatar: propTypes.string.isRequired,
                name: propTypes.string.isRequired,
                isOnline: propTypes.bool.isRequired,
                id: propTypes.number.isRequired,
            }
        )
    ).isRequired,
}