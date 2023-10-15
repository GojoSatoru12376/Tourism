import Attraction from '../../components/attraction/Attraction';
import Attraction1 from '../../components/attraction/Attraction1';
import Attraction2 from '../../components/attraction/Attraction2';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import './touristPlace.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="homeContainer">
        <Attraction />
        <Attraction1 />
        <Attraction2 />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
