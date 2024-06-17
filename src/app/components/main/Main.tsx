import Menu from "./Menu";

export default function Main() {
  return (
    <main
      className={`relative flex flex-1 bg-white text-gray-900 dark:bg-neutral-800 dark:text-gray-100`}
    >
      <Menu />
      <div className="justify-center flex items-center w-full h-full text-4xl">
        Welcome to the main page!
      </div>
    </main>
  );
}
