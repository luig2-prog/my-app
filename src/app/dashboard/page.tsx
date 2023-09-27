import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import TopCards from "@/components/TopCards";

const value = 'Client?';

export default function Home() {

  return (
    <>
      <Header name="Home" username="luis.hernandez.ji" />
      <TopCards />
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <BarChart />
      </div>

    </>
  );
}
