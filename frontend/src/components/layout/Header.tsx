export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome to Divine Corporation HRMS
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700">
          + Add Employee
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
          A
        </div>
      </div>
    </header>
  );
}