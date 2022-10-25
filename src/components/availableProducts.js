import stormtrooperTShirt from '../assets/stormtrooperTShirt.jpg';
import totoroHoop from '../assets/totoroHoop.jpg';
import portraitHoop from '../assets/portraitHoop.jpeg';
import siaHoop from '../assets/siaHoop.jpg';


const AVAILABLE_PRODUCTS = [
  {
    id: 1,
    name: "Totoro Hoop",
    description: "Diameter: 14 cm",
    image: totoroHoop,
    price: 100,
  },

  {
    id: 2,
    name: "Portrait Hoop",
    description: "Diameter: 16cm",
    image: portraitHoop,
    price: 200,
  },

  {
    id: 3,
    name: "Stormtrooper T-shirt",
    description: "White t-shirt, black threads",
    image: stormtrooperTShirt,
    price: 150,
  },

  {
    id: 4,
    name: "Sia: Unstoppable Hoop",
    description: "Diameter: 14cm",
    image: siaHoop,
    price: 50,
  },
];

export default AVAILABLE_PRODUCTS;
