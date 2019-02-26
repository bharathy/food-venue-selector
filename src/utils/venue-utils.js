
const checkDrink = (v_drinks, u_drinks) => {
    return u_drinks.some(drink => v_drinks.includes(drink)); 
}

const checkFood = (v_food, u_food) => {
    return u_food.some(food => !v_food.includes(food)); 
}

export const getPlaceToGo = (venues, users) => {
    return venues.filter((venue) => {
        return users.every((user) => {
            let drinks = checkDrink(venue.drinks, user.drinks);
            let food = checkFood(venue.food, user.wont_eat);
            if(drinks && food) {
                return venue;
            }
        })
    }).map(venue => venue.name);
}

export const getPlaceToAvoid = (venues, users) => {
    return venues.filter((venue) => {
        return getPlaceToGo(venues, users).every((venueName) => {
            return venueName !== venue.name;
        });
    }).map(venue => venue.name);
}