import Todos from "@components/Todos";
import AddTodo from "@components/AddTodo";
import FilterTabs from "@components/FilterTabs";

export default function Home() {
  return (
    <main className="my-20 flex min-h-screen flex-col items-center space-y-8">
      <div className="flex items-center">
        <svg
          stroke="#17C964"
          fill="#17C964"
          strokeWidth={0}
          viewBox="0 0 24 24"
          height="40px"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H7V0H9V2H15V0H17V2ZM17 4V6H15V4H9V6H7V4H5V20H19V4H17ZM7 8H17V10H7V8ZM7 12H17V14H7V12Z" />
        </svg>
        <h2 className="text-3xl font-extrabold">TODO NEXT + TYPESCRIPT</h2>
        <svg
          stroke="#17C964"
          fill="#17C964"
          strokeWidth={0}
          viewBox="0 0 24 24"
          height="40px"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H7V0H9V2H15V0H17V2ZM17 4V6H15V4H9V6H7V4H5V20H19V4H17ZM7 8H17V10H7V8ZM7 12H17V14H7V12Z" />
        </svg>
      </div>
      <AddTodo />
      <FilterTabs />
    </main>
  );
}
