import React, { useState } from 'react';

const MainPage = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [mealSelections, setMealSelections] = useState({});
  const [mealQuantities, setMealQuantities] = useState({});

  // Automatické generování týdnů
  const generateWeeks = () => {
    const weeks = [];
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1); // Nastaví na začátek aktuálního týdne

    for (let i = 0; i < 10; i++) {
      const startOfWeek = new Date(currentDate);
      const endOfWeek = new Date(currentDate);
      endOfWeek.setDate(endOfWeek.getDate() + 4); // Konec týdne (pátek)

      weeks.push({
        week: `${startOfWeek.getDate()}. ${startOfWeek.getMonth() + 1}. - ${endOfWeek.getDate()}. ${endOfWeek.getMonth() + 1}.`,
        days: ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek"],
      });

      currentDate.setDate(currentDate.getDate() + 7); // Posun na další týden
    }
    return weeks;
  };

  const weeks = generateWeeks();
  const meals = ["Kuře s rýží", "Vepřo knedlo zelo"];

  const handlePreviousWeek = () => {
    if (currentWeek > 0) setCurrentWeek(currentWeek - 1);
  };

  const handleNextWeek = () => {
    if (currentWeek < weeks.length - 1) setCurrentWeek(currentWeek + 1);
  };

  const handleMealSelection = (day, meal, option) => {
    setMealSelections((prev) => ({
      ...prev,
      [day]: { ...prev[day], [meal]: option },
    }));
  };

  const handleQuantityChange = (day, meal, quantity) => {
    setMealQuantities((prev) => ({
      ...prev,
      [day]: { ...prev[day], [meal]: quantity },
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fef2e0] to-[#F5A618] p-8">
      {/* Hlavička */}
      <div className="flex items-center justify-between bg-white shadow-xl p-5 rounded-2xl mb-6 transform hover:scale-105 transition-transform duration-300">
        <button
          onClick={handlePreviousWeek}
          className="text-[#F5A618] hover:text-white bg-[#fef2e0] hover:bg-[#F5A618] rounded-full p-3 shadow-md transition-all duration-300"
        >
          ◀
        </button>
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
          {weeks[currentWeek].week}
        </h1>
        <button
          onClick={handleNextWeek}
          className="text-[#F5A618] hover:text-white bg-[#fef2e0] hover:bg-[#F5A618] rounded-full p-3 shadow-md transition-all duration-300"
        >
          ▶
        </button>
      </div>

      {/* Dny a jídla */}
      <div className="grid grid-cols-1 gap-4">
        {weeks[currentWeek].days.map((day, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl p-4 rounded-xl transform hover:translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-[#F5A618] mb-4">{day}</h2>
            <div className="space-y-3">
              {meals.map((meal, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-[#fef2e0] rounded-lg p-3 shadow-inner"
                >
                  <span className="text-gray-800 font-semibold">{meal}</span>
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={mealQuantities[day]?.[meal] || ""}
                      onChange={(e) => handleQuantityChange(day, meal, e.target.value)}
                      placeholder="0"
                      className="w-12 border border-[#F5A618] rounded-lg text-center p-1 text-gray-800"
                    />
                    <button
                      onClick={() => handleMealSelection(day, meal, "S sebou")}
                      className={`px-3 py-1 rounded-lg text-white font-bold transition-all duration-300 ${
                        mealSelections[day]?.[meal] === "S sebou"
                          ? "bg-[#F5A618] shadow-lg"
                          : "bg-gray-300 hover:bg-[#F5A618]"
                      }`}
                    >
                      S sebou
                    </button>
                    <button
                      onClick={() => handleMealSelection(day, meal, "Na místě")}
                      className={`px-3 py-1 rounded-lg text-white font-bold transition-all duration-300 ${
                        mealSelections[day]?.[meal] === "Na místě"
                          ? "bg-[#F5A618] shadow-lg"
                          : "bg-gray-300 hover:bg-[#F5A618]"
                      }`}
                    >
                      Na místě
                    </button>
                  </div>
                </div>
              ))}
              <div className="bg-[#fef2e0] p-3 rounded-lg text-gray-800 font-medium">
                Polévka dne: 🍣 Dýňová polévka
              </div>
            </div>
            <button className="mt-4 w-full bg-[#F5A618] text-white py-2 px-4 rounded-xl font-bold hover:bg-white hover:text-[#F5A618] border border-[#F5A618] transition-all duration-300">
              Potvrdit výběr
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
