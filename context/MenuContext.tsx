/**
 * This file includes open-source libraries and patterns referenced below:
 * - React Native (Meta Platforms, Inc., 2025)
 * - React Navigation (React Navigation contributors, 2025)
 * - Expo Vector Icons (Expo contributors, 2025)
 * - Reanimated Carousel (Dohooo, 2025)
 * 
 * All references follow Harvard style and are listed in the README.
 */
import React, { createContext, useState, ReactNode } from 'react';

// ✅ Define the MenuItem type
export interface MenuItem {
  name: string;
  description: string;
  price: string;
  course: string;
  image: string;
}

// ✅ Define the context type
interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  removeMenuItem: (index: number) => void;
}

// ✅ Create the context
export const MenuContext = createContext<MenuContextType | undefined>(undefined);

// ✅ Provider component
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
  {
  name: "Bruschetta Trio",
  description: "Toasted baguette topped with tomato basil, mushroom pesto, and smoked salmon.",
  price: "55",
  course: "Starters",
  image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
  },
{
  name: "Stuffed Mushrooms",
  description: "Button mushrooms filled with herbed cream cheese and baked to perfection.",
  price: "65",
  course: "Starters",
  image: "https://images.pexels.com/photos/5950441/pexels-photo-5950441.jpeg"
},
{
  name: "Mini Caprese Cups",
  description: "Cherry tomatoes, mozzarella pearls, and basil in balsamic reduction.",
  price: "50",
  course: "Starters",
  image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gimmesomeoven.com%2Fcaprese-phyllo-cups%2F&psig=AOvVaw12omNKrWjUrmMNknisQV2-&ust=1761230286489000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLD74aeEuJADFQAAAAAdAAAAABAE"
},
    {
      name: "Steak",
      description: "Grilled steak with garlic butter.",
      price: "120",
      course: "Mains",
      image: "https://images.pexels.com/photos/12015291/pexels-photo-12015291.jpeg"
    },
    {
      name: "Chicken Alfredo",
      description: "Creamy pasta with grilled chicken.",
      price: "110",
      course: "Mains",
      image: "https://images.pexels.com/photos/29935439/pexels-photo-29935439.jpeg"
    },
    {
  name: "Beef Wellington",
  description: "Tenderloin wrapped in mushroom duxelles and puff pastry, served with red wine jus.",
  price: "180",
  course: "Mains",
  image: "https://images.pexels.com/photos/20095444/pexels-photo-20095444.jpeg"
},
{
  name: "Lamb Shank",
  description: "Slow-braised lamb in rosemary gravy, served with garlic mash.",
  price: "150",
  course: "Mains",
  image: "https://images.pexels.com/photos/17650168/pexels-photo-17650168.jpeg"
},
{
  name: "Truffle Risotto",
  description: "Creamy arborio rice infused with truffle oil and parmesan.",
  price: "130",
  course: "Mains",
  image: "https://images.pexels.com/photos/7491887/pexels-photo-7491887.jpeg"
},
    {
      name: "Chocolate Lava Cake",
      description: "Warm cake with molten chocolate center.",
      price: "65",
      course: "Desserts",
      image: "https://images.pexels.com/photos/33674416/pexels-photo-33674416.jpeg"
    },
    {
      name: "Berry Cheesecake",
      description: "Cheesecake topped with fresh berries.",
      price: "70",
      course: "Desserts",
      image: "https://images.pexels.com/photos/30885196/pexels-photo-30885196.jpeg"
    },
    {
  name: "Tiramisu",
  description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream.",
  price: "75",
  course: "Desserts",
  image: "https://images.pexels.com/photos/18955555/pexels-photo-18955555.jpeg"
},
{
  name: "Lemon Meringue Tart",
  description: "Tangy lemon curd in a buttery crust topped with toasted meringue.",
  price: "70",
  course: "Desserts",
  image: "https://images.pexels.com/photos/6607429/pexels-photo-6607429.jpeg"
},
{
  name: "Salted Caramel Brownie",
  description: "Rich chocolate brownie drizzled with warm salted caramel.",
  price: "65",
  course: "Desserts",
  image: "https://images.pexels.com/photos/10400270/pexels-photo-10400270.jpeg"
}
  ]);

  const addMenuItem = (item: MenuItem) => {
    setMenuItems([...menuItems, item]);
  };

  const removeMenuItem = (index: number) => {
    const updated = menuItems.filter((_, i) => i !== index);
    setMenuItems(updated);
  };

  return (
    <MenuContext.Provider value={{ menuItems, addMenuItem, removeMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};
