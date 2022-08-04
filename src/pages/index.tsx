import type { NextPage } from 'next';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
import { Sidebar } from "../components/Sidebar/sidebar";

const Home: NextPage = () => {
  return (
    <div className="w-full">
    <Header />
      <FilterBar />
      <Sidebar />
    </div>
  );
};
export default Home;
