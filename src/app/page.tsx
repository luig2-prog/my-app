'use client'
import BarChart from "./components/BarChart";
import Header from "./components/Header";
import RecentOrders from "./components/RecentOrders";
import TopCards from "./components/TopCards";

const value = 'Client?';

export default function Home() {
  
  console.log("🚀 ~ file: page.tsx:7 ~ value:", value)
  return (
    <> 
    <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>

    </>
  );
}
