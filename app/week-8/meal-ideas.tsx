import { useEffect, useState } from "react";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export default function MealIdeas(props: { ingredient: string }) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [showIngredients, setShowIngredients] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const loadMealIdeas = async () => {
    const ingredient = props.ingredient;
    const mealIdeas = await fetchMealIdeas(ingredient);
    if (mealIdeas) {
      setMeals(mealIdeas);
    }
  };

  const loadMealIngredients = async (mealId: string) => {
    const mealDetails = await fetchMealIngredients(mealId);

    if (mealId == selectedMeal?.idMeal) {
      setShowIngredients(!showIngredients);
      return;
    }

    if (mealDetails) {
      setSelectedMeal(mealDetails);
      setShowIngredients(true);
    }
  };

  useEffect(() => {
    if (props.ingredient) {
      loadMealIdeas();
    }
  }, [props.ingredient]);

  return (
    <div className="mt-10 p-6 backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl border border-slate-300 max-w-2xl transition-opacity duration-500">
      <h2 className="text-2xl font-bold mb-4">
        Meal Ideas with {props.ingredient}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <p className="p-2 text-center font-semibold text-sm">
              <strong>{meal.strMeal}</strong>
            </p>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <button
                onClick={() => loadMealIngredients(meal.idMeal)}
                className=" hover:text-blue-500 text-black text-sm font-bold px-6 rounded"
              >
                {showIngredients && selectedMeal?.idMeal === meal.idMeal
                  ? "Hide Ingredients"
                  : "Show Ingredients"}
              </button>
              {}
              {showIngredients &&
                selectedMeal &&
                selectedMeal.idMeal === meal.idMeal && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
                    <ul className="list-disc list-inside">
                      {Object.keys(selectedMeal)
                        .filter(
                          (key) =>
                            key.startsWith("strIngredient") &&
                            selectedMeal[key as keyof Meal] &&
                            selectedMeal[key as keyof Meal] !== "",
                        )
                        .map((key) => (
                          <li key={key}>{selectedMeal[key as keyof Meal]}</li>
                        ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

const fetchMealIdeas = async (ingredient: string) => {
  const apiEndPoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  try {
    const response = await fetch(apiEndPoint);
    const data = await response.json();
    return data.meals as Meal[];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
  }
};

const fetchMealIngredients = async (mealId: string) => {
  const apiEndPoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  try {
    const response = await fetch(apiEndPoint);
    const data = await response.json();
    return data.meals[0] as Meal;
  } catch (error) {
    console.error("Error fetching meal ingredients:", error);
  }
};
