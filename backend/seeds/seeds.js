import Product from "../models/product.model.js";

export const fruits = [
  {
    name: "Apple",
    price: 1.2,
    image:
      "https://plus.unsplash.com/premium_photo-1668772704261-b11d89a92bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Banana",
    price: 0.5,
    image:
      "https://images.unsplash.com/photo-1623227774108-7ab4478f50cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fHww",
  },
  {
    name: "Orange",
    price: 0.8,
    image:
      "https://plus.unsplash.com/premium_photo-1675667408018-3b64dbc55db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3JhbmdlfGVufDB8fDB8fHww",
  },
  {
    name: "Mango",
    price: 1.5,
    image:
      "https://images.unsplash.com/photo-1685429631345-3de21cc2eb65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmdvfGVufDB8fDB8fHww",
  },
  {
    name: "Pineapple",
    price: 3.0,
    image:
      "https://images.unsplash.com/photo-1501438400798-b40ff50396c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww",
  },
  {
    name: "Strawberry",
    price: 2.5,
    image:
      "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Blueberry",
    price: 2.8,
    image:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJ5fGVufDB8fDB8fHww",
  },
  {
    name: "Watermelon",
    price: 4.0,
    image:
      "https://images.unsplash.com/photo-1530552171419-b0212487fe84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Grapes",
    price: 2.1,
    image:
      "https://images.unsplash.com/photo-1534985508850-11ca0c0af112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGVzfGVufDB8fDB8fHww",
  },
  {
    name: "Papaya",
    price: 1.7,
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFwYXlhfGVufDB8fDB8fHww",
  },
  {
    name: "Kiwi",
    price: 1.0,
    image:
      "https://images.unsplash.com/photo-1516705322007-b0586a7a92fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l3aXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Peach",
    price: 1.6,
    image:
      "https://images.unsplash.com/photo-1531171596281-8b5d26917d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVhY2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Plum",
    price: 1.3,
    image:
      "https://images.unsplash.com/photo-1518834903818-7d1557333fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGx1bXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Cherry",
    price: 3.2,
    image:
      "https://images.unsplash.com/photo-1530176611600-d05a6387d07c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlcnJ5fGVufDB8fDB8fHww",
  },
  {
    name: "Pomegranate",
    price: 2.4,
    image:
      "https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9tZWdyYW5hdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Coconut",
    price: 3.5,
    image:
      "https://images.unsplash.com/photo-1581453883350-288b2c19bea8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Lemon",
    price: 0.9,
    image:
      "https://images.unsplash.com/photo-1534531173927-aeb928d54385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVtb258ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Avocado",
    price: 2.6,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZvY2Fkb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Pear",
    price: 1.4,
    image:
      "https://images.unsplash.com/photo-1570115114436-63d3405246e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Dragonfruit",
    price: 5.0,
    image:
      "https://plus.unsplash.com/premium_photo-1667051230160-5906f5683a59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJhZ29uJTIwZnJ1aXR8ZW58MHx8MHx8fDA%3D",
  },
];

export const seedDB = async () => {
  await Product.deleteMany({});
  for (const fruit of fruits) {
    const product = new Product(fruit);
    await product.save();
  }
};
