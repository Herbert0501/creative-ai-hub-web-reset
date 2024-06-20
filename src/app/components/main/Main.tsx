import Menu from "./Menu";
import Welcome from "./Welcome";

export default function Main() {
  return (
    <main className="relative flex flex-col flex-1 bg-white text-gray-900 dark:bg-neutral-800 dark:text-gray-100">
      <Menu />
      <div className="overflow-y-auto flex-1">
        <Welcome />
      </div>
    </main>
  );
}
