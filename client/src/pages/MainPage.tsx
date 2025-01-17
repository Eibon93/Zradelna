import React, { useState } from 'react';

const MainPage = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const weeks = [
    { week: "15. - 21. ledna", days: ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek"] },
    { week: "22. - 28. ledna", days: ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek"] },
    // Přidejte další týdny podle potřeby
  ];

  const meals = [
    "Kuře s rýží",
    "Vepřo knedlo zelo",
    "Těstoviny s omáčkou",
    "Vegetariánský salát",
    "Polévka dne",
  ];

  const handlePreviousWeek = () => {
    if (currentWeek > 0) setCurrentWeek(currentWeek - 1);
  };

  const handleNextWeek = () => {
    if (currentWeek < weeks.length - 1) setCurrentWeek(currentWeek + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Hlavička */}
      <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-md mb-6">
        <button
          onClick={handlePreviousWeek}
          className="text-gray-500 hover:text-gray-800 transition"
        >
          ◀
        </button>
        <h1 className="text-lg font-bold text-gray-800">{weeks[currentWeek].week}</h1>
        <button
          onClick={handleNextWeek}
          className="text-gray-500 hover:text-gray-800 transition"
        >
          ▶
        </button>
      </div>

      {/* Dny a jídla */}
      <div className="grid grid-cols-1 gap-4">
        {weeks[currentWeek].days.map((day, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-md">
            <h2 className="text-md font-semibold text-gray-800 mb-2">{day}</h2>
            <div className="space-y-2">
              {meals.map((meal, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-gray-700">{meal}</span>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    placeholder="0"
                    className="w-16 border rounded-md text-center p-1"
                  />
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Potvrdit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
