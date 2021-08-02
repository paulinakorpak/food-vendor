const fetchResource = (resource) => fetch(`${process.env.REACT_APP_FOOD_ADVISOR_API_URL}/${resource}`)
  .then((response) => response.json());

export const fetchDishes = () => fetchResource('dishes');
export const fetchIngredients = () => fetchResource('ingredients');
export const fetchCreatures = () => fetchResource('creatures');
