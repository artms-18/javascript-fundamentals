const menu = {
  _courses: {'appetizers': [], 'mains': [], 'desserts': []},
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  set appetizers (appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },
  get mains () {
    return this._courses.mains;
  },
  set mains (mainIn) {
    this._courses.mains = mainIn;
  },
  get desserts () {
    return this._courses.desserts;
  },
  set desserts (dessertIn) {
    this._courses.desserts = dessertIn;
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      dish: dishName,
      price: dishPrice
    };

    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let random_index = Math.floor(Math.random*dishes.length);
    return dishes[random_index];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let total_price = appetizer['price'] + main['price'] + dessert['price']
    let names = "Appetizer: " + appetizer['dish'] + " Main dish: " + main['dish'] + " Dessert: " + dessert['dish']
    return "The total price is: " + total_price + " with the menu of: " + names
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25)
menu.addDishToCourse('mains', 'Hamburger', 5.64)
menu.addDishToCourse('desserts', 'Ice Cream', 4.30)

let meal = menu.generateRandomMeal()
