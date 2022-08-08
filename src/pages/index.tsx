import type { NextPage } from 'next';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList";

const Home: NextPage = () => {
  return (
    <div className="w-full flex">
      <Sidebar />

      <div className='flex-col'>
        <Header />
        <FilterBar />

        
          <CardList />
 

      </div>
    </div>
  );
};
export default Home;
