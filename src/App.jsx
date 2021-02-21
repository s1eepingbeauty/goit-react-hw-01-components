import Profile from './components/SocialProfile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json'
import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';


const App = () => (
    <>
        <Profile
            name={user.name}
            avatar={user.avatar}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
        />
        <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </>
);

export default App;