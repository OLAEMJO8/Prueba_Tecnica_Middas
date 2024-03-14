
export function Navbar() {


  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/" className="flex items-center">
          <img src="/middas_app_logo.png" to="/" alt="Logo" className="h-12 w-auto mr-2" />
        </a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full flex justify-end lg:flex lg:items-center lg:w-auto">
        <a href="/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-teal-900 mt-4 lg:mt-0 mr-4">Home</a>
        <a href="/add" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-teal-900 mt-4 lg:mt-0 mr-4">Nuevo</a>
        <a href="/fav" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-teal-900 mt-4 lg:mt-0">Favoritos</a>
      </div>
    </nav>
  );


}