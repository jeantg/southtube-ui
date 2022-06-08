import type { NextPage } from "next";
import { Sidebar } from "../components/Sidebar/sidebar";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Sidebar />
    </div>
  );
};
export default Home;
