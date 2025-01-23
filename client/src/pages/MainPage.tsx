import { useState } from "react";

const MainPage = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [mealSelections, setMealSelections] = useState({});
  const [mealQuantities, setMealQuantities] = useState({});

  // Automatické generování týdnů
  const generateWeeks = () => {
    const weeks = [];
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1); // Nastaví na začátek aktuálního týdne

    for (let i = 0; i < 52; i++) {
      // Generuje týdny na celý rok
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
    <div
      className="min-h-screen bg-white p-8 text-[#333333]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Hlavička */}
      <div className="w-full bg-[#F5A618] text-white shadow-xl p-6 mb-6 flex justify-between items-center rounded-lg">
        <button
          onClick={handlePreviousWeek}
          className="text-[#F5A618] hover:bg-[#F5A618] hover:text-white bg-white rounded-full p-4 shadow-lg transition-all duration-300"
        >
          ◀
        </button>
        <h1 className="text-3xl font-extrabold">{weeks[currentWeek].week}</h1>
        <button
          onClick={handleNextWeek}
          className="text-[#F5A618] hover:bg-[#F5A618] hover:text-white bg-white rounded-full p-4 shadow-lg transition-all duration-300"
        >
          ▶
        </button>
      </div>

      {/* Odhlášení */}
      <div className="flex justify-end mb-8">
        <button className="bg-[#F5A618] hover:bg-white text-white hover:text-[#F5A618] font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300">
          Odhlásit se
        </button>
      </div>

      {/* Dny a jídla */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {weeks[currentWeek].days.map((day, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 hover:scale-[1.025] transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-[#F5A618] mb-4 text-center">
              {day}
            </h2>
            <div className="space-y-4">
              {meals.map((meal, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row items-center justify-between bg-[#fff8e5] rounded-md p-4 shadow-inner hover:shadow-lg transition-all duration-300 gap-4"
                >
                  <span className="text-lg font-medium text-center sm:text-left">
                    {meal}
                  </span>
                  <div className="flex items-center justify-center sm:justify-end space-x-3">
                    <input
                      type="number"
                      min="0"
                      max="10"
                      value={mealQuantities[day]?.[meal] || ""}
                      onChange={(e) =>
                        handleQuantityChange(day, meal, e.target.value)
                      }
                      placeholder="0"
                      className="w-16 bg-white border border-[#F5A618] rounded-lg text-center p-2"
                    />
                    <button
                      onClick={() => handleMealSelection(day, meal, "S sebou")}
                      className={`px-4 py-2 rounded-md text-white font-bold ${
                        mealSelections[day]?.[meal] === "S sebou"
                          ? "bg-[#F5A618] shadow-lg"
                          : "bg-[#ddd] hover:bg-[#F5A618]"
                      }`}
                    >
                      S sebou
                    </button>
                    <button
                      onClick={() => handleMealSelection(day, meal, "Na místě")}
                      className={`px-4 py-2 rounded-md text-white font-bold ${
                        mealSelections[day]?.[meal] === "Na místě"
                          ? "bg-[#F5A618] shadow-lg"
                          : "bg-[#ddd] hover:bg-[#F5A618]"
                      }`}
                    >
                      Na místě
                    </button>
                  </div>
                </div>
              ))}
              <div className="bg-[#fff8e5] p-4 rounded-md shadow-inner text-center">
                Polévka dne: 🥣 Dýňová polévka
              </div>
            </div>
            <button className="mt-4 w-full bg-[#F5A618] text-white py-3 rounded-lg hover:bg-white hover:text-[#F5A618] border border-[#F5A618] shadow-lg transition-all duration-300">
              Potvrdit výběr
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
