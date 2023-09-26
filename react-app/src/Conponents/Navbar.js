export default function Navbar() {
  return (
    <>
      <nav className="h-16  border bg-gray-100">
        <div className="ml-10 h-16 flex justify-center items-center border float-left">
          <img src="" alt="Not found" />
        </div>
        <div className="float-right">
          <div className="flex justify-center items-center h-16 float-right">
            <div className="rounded-full h-8 bg-red-400 w-8 mr-4"></div>
          </div>
          <div className="flex justify-center items-center h-16 float-right mr-4 bell ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}
