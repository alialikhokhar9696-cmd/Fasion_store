export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  subCategory?: string;
}

export const products = [
  // -------------------- MEN FASHION (12 products) --------------------
  {
    id: 1,
    name: "Classic Navy Blazer",
    price: 8999,
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Blazers"
  },
  {
    id: 2,
    name: "White Formal Shirt",
    price: 2499,
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Shirts"
  },
  {
    id: 3,
    name: "Slim Fit Denim Jeans",
    price: 3999,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Jeans"
  },
  {
    id: 4,
    name: "Brown Leather Shoes",
    price: 6999,
    image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Shoes"
  },
  {
    id: 5,
    name: "Wool Crewneck Sweater",
    price: 4999,
    image: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Sweaters"
  },
  {
    id: 6,
    name: "Black Leather Jacket",
    price: 12999,
    image: "https://images.pexels.com/photos/3485175/pexels-photo-3485175.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Jackets"
  },
  {
    id: 7,
    name: "Formal Trousers",
    price: 3499,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Trousers"
  },
  {
    id: 8,
    name: "Designer Watch",
    price: 8999,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Accessories"
  },
  {
    id: 9,
    name: "Casual T-Shirt",
    price: 1499,
    image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Shirts"
  },
  {
    id: 10,
    name: "Black Formal Shoes",
    price: 7499,
    image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Shoes"
  },
  {
    id: 11,
    name: "Leather Belt",
    price: 1999,
    image: "https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Accessories"
  },
  {
    id: 12,
    name: "Summer Shorts",
    price: 1299,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&w=400",
    category: "Men",
    subCategory: "Trousers"
  },

  // -------------------- WOMEN FASHION (12 products) --------------------
  {
    id: 13,
    name: "Elegant Floral Dress",
    price: 5999,
    image: "https://images.pexels.com/photos/1535684/pexels-photo-1535684.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Dresses"
  },
  {
    id: 14,
    name: "Designer Handbag",
    price: 8999,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Bags"
  },
  {
    id: 15,
    name: "Leather Ankle Boots",
    price: 7999,
    image: "https://images.pexels.com/photos/1468377/pexels-photo-1468377.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Shoes"
  },
  {
    id: 16,
    name: "Silk Blouse",
    price: 3499,
    image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Tops"
  },
  {
    id: 17,
    name: "High-Waist Jeans",
    price: 3999,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Jeans"
  },
  {
    id: 18,
    name: "Gold Plated Necklace",
    price: 12999,
    image: "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Jewelry"
  },
  {
    id: 19,
    name: "Summer Maxi Dress",
    price: 4499,
    image: "https://images.pexels.com/photos/1276721/pexels-photo-1276721.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Dresses"
  },
  {
    id: 20,
    name: "White Sneakers",
    price: 5499,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Shoes"
  },
  {
    id: 21,
    name: "Cashmere Sweater",
    price: 7999,
    image: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Sweaters"
  },
  {
    id: 22,
    name: "Stylish Sunglasses",
    price: 2999,
    image: "https://images.pexels.com/photos/258293/pexels-photo-258293.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Accessories"
  },
  {
    id: 23,
    name: "Crossbody Bag",
    price: 4999,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Bags"
  },
  {
    id: 24,
    name: "Silk Scarf",
    price: 999,
    image: "https://images.pexels.com/photos/1604670/pexels-photo-1604670.jpeg?auto=compress&w=400",
    category: "Women",
    subCategory: "Accessories"
  },

  // -------------------- KIDS COLLECTION (8 products) --------------------
  {
    id: 25,
    name: "Baby Girl Floral Dress",
    price: 2499,
    image: "https://images.pexels.com/photos/2973382/pexels-photo-2973382.jpeg?auto=compress&w=400",
    category: "Kids",
    subCategory: "Baby Girls"
  },
  {
    id: 26,
    name: "Baby Boy Romper",
    price: 1899,
    image: "https://images.pexels.com/photos/3926128/pexels-photo-3926128.jpeg?auto=compress&w=400",
    category: "Kids",
    subCategory: "Baby Boys"
  },
  {
    id: 27,
    name: "Girls Party Dress",
    price: 3999,
    image: "https://images.pexels.com/photos/3617803/pexels-photo-3617803.jpeg?auto=compress&w=400",
    category: "Kids",
    subCategory: "Girls"
  },
  {
    id: 28,
    name: "Boys Casual Shirt",
    price: 1899,
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&w=400",
    category: "Kids",
    subCategory: "Boys"
  },
  {
    id: 29,
    name: "Kids Sneakers",
    price: 1999,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&w=400",
    category: "Kids",
    subCategory: "Shoes"
  },
  {
    id: 30,
    name: "Soft Teddy Bear",
    price: 1999,
    image: "https://images.pexels.com/photos/4500531/pexels-photo-4500531.jpeg?auto=compress&w=400",
    category: "Kids",
    subCategory: "Toys"
  },
  {
    id: 31,
    name: "Kids Denim Jeans",
    price: 1999,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&w=400",
    category: "Kids",
    subCategory: "Boys"
  },
  {
    id: 32,
    name: "Baby Girl Romper",
    price: 1899,
    image: "https://images.pexels.com/photos/2973382/pexels-photo-2973382.jpeg?auto=compress&w=400",
    category: "Kids",
    subCategory: "Baby Girls"
  },

  // -------------------- ACCESSORIES (8 products) --------------------
  {
    id: 33,
    name: "Designer Watch",
    price: 8999,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&w=400",
    category: "Accessories",
    subCategory: "Watches"
  },
  {
    id: 34,
    name: "Stylish Sunglasses",
    price: 2999,
    image: "https://images.pexels.com/photos/258293/pexels-photo-258293.jpeg?auto=compress&w=400",
    category: "Accessories",
    subCategory: "Sunglasses"
  },
  {
    id: 35,
    name: "Leather Belt",
    price: 1999,
    image: "https://images.pexels.com/photos/1598506/pexels-photo-1598506.jpeg?auto=compress&w=400",
    category: "Accessories",
    subCategory: "Belts"
  },
  {
    id: 36,
    name: "Leather Wallet",
    price: 1499,
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&w=400",
    category: "Accessories",
    subCategory: "Wallets"
  },
  {
    id: 37,
    name: "Gold Necklace",
    price: 12999,
    image: "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&w=400",
    category: "Accessories",
    subCategory: "Jewelry"
  },
  {
    id: 38,
    name: "Silk Scarf",
    price: 999,
    image: "https://images.pexels.com/photos/1604670/pexels-photo-1604670.jpeg?auto=compress&w=400",
    category: "Accessories",
    subCategory: "Scarves"
  },
  {
    id: 39,
    name: "Pearl Earrings",
    price: 3999,
    image: "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&w=400",
    category: "Accessories",
    subCategory: "Jewelry"
  },
  {
    id: 40,
    name: "Travel Backpack",
    price: 6499,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&w=400",
    category: "Accessories",
    subCategory: "Bags"
  }
];