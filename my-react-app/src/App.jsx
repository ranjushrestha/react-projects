import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
function App() {
  return(
    <>
    <Header/>
    <Food />
    <Card/>
    <Card/>
    <Button/>
    <Student name="Anuj" age= {23} isStudent= "true"/>
    <Student name="Gautam" age= {23} isStudent= "false"/>
    <Student name="Sudip" age= {20} isStudent= "true"/>
    <Student />
    <Footer />
    </>
  );

}

export default App
