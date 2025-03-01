import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Buttons from './Button2.jsx'
import ProfilePicture  from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'

function App() {

  const fruits = [{id: 1, name: "apple", calories: 100},
    {id: 2, name: "orange", calories: 89},
    {id: 3, name:"papaya", calories: 88},
    {id: 4, name: "coconut", calories: 59}
];

    const vegetables = [{id: 5, name: "cauliflower", calories: 100},
    {id: 6, name: "carrot", calories: 89},
    {id: 7, name:"brocoli", calories: 88},
    {id: 8, name: "cucumber", calories: 30}
  ];

  return(
    <>
    <Header/>
    <Food />
    <Card/>
    <Card/>
    <Button/>
    <ProfilePicture/>
    <Buttons/>
    <Student name="Adina" age= {23} isStudent= "true"/>
    <Student name="Krisa" age= {23} isStudent= "false"/>
    <Student name="Arya" age= {20} isStudent= "true"/>
    <Student />
    <UserGreeting isLoggedIn={true} username="Ranju"/>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/> }
    <MyComponent/>
    <Counter/>
    <Footer />

    </>
  );

}

export default App
