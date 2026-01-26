import NavBar from "./navBar.tsx";

function Header() {
    return <header className="flex flex-col gap-6 shadow-md items-center align-middle bg-gray-500">
  <div className="flex flex-col items-center justify-center gap-6 p-4">
    <NavBar isFooter={false} />
  </div>
</header>

}

export default Header