import type { NextPage } from 'next';
import FilterBar from '../components/FilterBar';
import Header from '../components/Header';
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <FilterBar />
      <div className='w-full'>Home</div>
    </>
  );
};
export default Home;
