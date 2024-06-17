import Sidebar from "@/app/components/sidebar/Sidebar";
import Main from "@/app/components/main/Main";

export default function Home() {
  return (
    <div className="h-full flex">
      <Sidebar />
      <Main />
    </div>
  );
}
