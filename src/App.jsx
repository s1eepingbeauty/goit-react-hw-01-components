import Profile from './components/SocialProfile/Profile';
import user from './components/DataFiles/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/DataFiles/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/DataFiles/friends.json';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// import transactions from './components/DataFiles/transactions.json';


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
        {/* <TransactionHistory /> */}
    </>
);

export default App;