import { fetchCreatures, fetchDishes, fetchIngredients } from '../../../api/foodAdvisorApi';

const mergeIngredients = (dishes, ingredients) => dishes.map((dish) => {
  dish.ingredients = dish.ingredients.map(
    (ingredientId) => ingredients.find((ingredient) => ingredient.id === ingredientId),
  );

  return dish;
});

const calculateWeight = (dishes) => dishes.map((dish) => {
  dish.weight = dish.ingredients.reduce((sum, ingredient) => sum + ingredient.weight, 0);
  return dish;
});

const sortByKcalRatio = (dishes) => dishes.sort((a, b) => {
  const aKcalRatio = a.kcal / a.weight;
  const bKcalRatio = b.kcal / b.weight;

  return bKcalRatio - aKcalRatio;
});

const getDishes = async () => {
  let dishes = await fetchDishes();
  const ingredients = await fetchIngredients();

  dishes = mergeIngredients(dishes, ingredients);
  dishes = calculateWeight(dishes);
  dishes = sortByKcalRatio(dishes);

  return dishes;
};

const getCreatures = async () => fetchCreatures();

const findDishesByFavourite = (dishes, favouriteDishes, favourite = true) => dishes.filter(
  (dish) => favouriteDishes.includes(dish.id) === favourite,
);

const selectAvailableDishes = (dishes, previousDishOfTheDay) => {
  if (previousDishOfTheDay) {
    dishes = dishes.filter((dish) => dish.id !== previousDishOfTheDay.id);
  }

  const dishOfTheDay = dishes[Math.floor(Math.random() * dishes.length)];

  dishes = dishes.filter((dish) => dish.id !== dishOfTheDay.id);
  dishes = [dishOfTheDay, ...dishes];

  return dishes;
};

const addDishesToMenu = (dishes, menu) => {
  dishes.forEach((dish) => {
    menu[dish.name] = menu[dish.name] + 1 || 1;
  });

  return menu;
};

function selectDishesForKcal(dishes, targetKcal, partial = []) {
  const kcal = partial.reduce((sum, dish) => sum + dish.kcal, 0);

  if (kcal > targetKcal) {
    return null;
  }

  if (kcal === targetKcal) {
    return partial;
  }

  for (let i = 0; i < dishes.length; i += 1) {
    const result = selectDishesForKcal(dishes, targetKcal, [...partial, dishes[i]]);

    if (result !== null) {
      return result;
    }
  }

  return null;
}

const prepareFoodForUnexpectedJourney = async (journeyLength) => {
  const dishes = await getDishes();
  const creatures = await getCreatures();

  const menu = [];
  const previousDishOfTheDayByCreature = {};

  for (let i = 0; i < journeyLength; i += 1) {
    const dayMenu = {
      title: `Day ${i + 1}`,
      menu: {},
    };

    creatures.forEach((creature) => {
      let creatureMenu = {};

      const favouriteDishes = findDishesByFavourite(dishes, creature.favouriteDishes, true);
      const otherDishes = findDishesByFavourite(dishes, creature.favouriteDishes, false);

      creatureMenu = addDishesToMenu(favouriteDishes, creatureMenu);

      const previousDishOfTheDay = previousDishOfTheDayByCreature?.[creature.name];
      const availableDishes = selectAvailableDishes(otherDishes, previousDishOfTheDay);

      const favouriteDishesKcal = favouriteDishes.reduce((kcal, dish) => kcal + dish.kcal, 0);
      const remainingKcal = creature.requiredKcal - favouriteDishesKcal;

      const selectedDishes = selectDishesForKcal(availableDishes, remainingKcal, []);
      creatureMenu = addDishesToMenu(selectedDishes, creatureMenu);

      const [dishOfTheDay] = availableDishes;
      previousDishOfTheDayByCreature[creature.name] = dishOfTheDay;

      dayMenu.menu[creature.name] = creatureMenu;
    });

    menu.push(dayMenu);
  }

  return menu;
};

export default prepareFoodForUnexpectedJourney;
