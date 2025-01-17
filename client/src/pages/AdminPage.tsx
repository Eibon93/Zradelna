const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-96">
        <div className="mx-auto flex">
        <h1 className="text-2xl mx-auto font-bold mb-4 text-gray-700">Formulář</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="food1" className="block text-sm font-medium text-gray-600 mb-2">Jídlo 1</label>
          <input
            type="text"
            id="food1"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Zadejte text"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="food2" className="block text-sm font-medium text-gray-600 mb-2">Jídlo 2</label>
          <input
            type="text"
            id="food2"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Zadejte text"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#F5A618] text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
        >
          Odeslat
        </button>
      </form>
    </div>
  );
};

export default App;