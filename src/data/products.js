export const products = [
  {
    id: 1,
    name: "product name",
    price: 1900,
    regular_price: 2000,
    description: "This is the description for this particular product",
    images: [
      {
        id: 1,
        src: "/assets/images/1.jpg",
      },
    ],
    on_sale: true,
    rating_count: 0,
    stock_quantity: 12,
    store: {
      vendor_id: 2,
      vendor_shop_name: "مواد بناء",
      vendor_shop_logo: "/assets/images/mod.png",
    },
  },
  {
    id: 2,
    name: "product two",
    price: 2900,
    regular_price: 3000,
    description: "This is the description for this particular product",
    images: [
      {
        id: 1,
        src: "/assets/images/2.jpg",
      },
    ],
    on_sale: true,
    rating_count: 0,
    stock_quantity: 12,
    store: {
      vendor_id: 1,
      vendor_shop_name: "متجر مدى",
      vendor_shop_logo: "/assets/images/mada.png",
    },
  },
];
