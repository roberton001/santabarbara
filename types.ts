// types.ts
export interface MenuItem {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  }
  
  export interface MenuData {
    categories: string[];
    menuItems: MenuItem[];
  }