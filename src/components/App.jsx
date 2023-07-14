import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics.jsx";
import { FriendList } from "./FriendList/FriendList.jsx";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory.jsx";

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};