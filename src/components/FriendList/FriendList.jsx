import css from "./FriendList.module.css";
import general from "../General.module.css";
import propTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul className={`${css.friendList} ${general.container}`}>
            {
                friends.map(       
                    friend => (
                        <FriendListItem 
                            avatar = {friend.avatar}
                            name = {friend.name}
                            isOnline={friend.isOnline}
                            key={friend.id}
                        />
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