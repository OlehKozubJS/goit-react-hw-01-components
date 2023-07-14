import css from "./FriendList.module.css";
import general from "../General.module.css";

export const FriendList = ({friends}) => {
    let friendListItems = [];
    friends.forEach(       
        friend => {
            let statusValue = css.status + " ";
            if (friend.isOnline) {
                statusValue += css.online;
            }
            else {
                statusValue += css.offline;
            }

            friendListItems.push(
                <li className={css.friendListItem + " " + general.item} key={friend.id}>
                    <span className={statusValue}></span>
                    <img className={css.avatar} src={friend.avatar} alt={friend.name} width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>
            );
        }
    );

    return (
        <ul className={css.friendList + " " + general.container}>
            {friendListItems}
        </ul>
    );
}
