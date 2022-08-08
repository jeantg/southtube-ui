import type { NextPage } from 'next';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Header />
      <FilterBar />
      <div className='flex'>
        <Sidebar />

        <div className='p-10'>
          <CardList />
        </div>


      </div>
    </div>
  );
};
export default Home;
