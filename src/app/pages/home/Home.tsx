import Sidebar from "@/app/pages/sidebar/Sidebar";
import Main from "@/app/pages/main/Main";

export default function Home() {
  return (
    <div className="h-full flex">
      <Sidebar/>
      <Main />
    </div>
  );
}
