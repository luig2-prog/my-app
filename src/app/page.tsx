import Image from 'next/image'
import { SideBar } from './components/sidebar/sidebar';
import { Profile } from './components/Profile/profile';
import { DashboardComponent } from './components/dashboard/dashboard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="inbox-dashboard-view">
        <div className="div">
          <DashboardComponent />
          <Profile/>
          <SideBar />
        </div>
      </div>
    </main>
  );
}
