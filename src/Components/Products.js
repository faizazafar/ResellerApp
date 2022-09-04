const Products= [

      {
        id: '1',
        productName: 'Casual Dress',
        price: '43',
        image: require('../assets/dress3.jpg'),
        productImageList:[

          require('../assets/dress4.jpg'),
          require('../assets/dress3.jpg'),
          require('../assets/cloth.jpg')

        ]
      },
  
      {
        id: '2',
        productName: 'Formal Dress',
        price: '60',
        image: require('../assets/dress4.jpg'),
        productImageList:[

          require('../assets/dress4.jpg'),
          require('../assets/dress3.jpg'),
          require('../assets/cloth.jpg')

        ]
      },

      {
        id: '3',
        productName: 'Casual Dress',
        price: '43',
        image: require('../assets/cloth.jpg'),
        productImageList:[

          require('../assets/dress4.jpg'),
          require('../assets/dress3.jpg'),
          require('../assets/cloth.jpg')

        ]
      },
  
      {
        id: '4',
        productName: 'Formal Dress',
        price: '60',
        image: require('../assets/dress2.jpg'),
        productImageList:[

          require('../assets/dress4.jpg'),
          require('../assets/dress3.jpg'),
          require('../assets/cloth.jpg')

        ]
      },
      
      {
        id: '6',
        productName: 'Dress',
        price: '500',
        image: require('../assets/dress5.jpg'),
      },
  
      {
        id: '7',
        productName: 'Formal Dress',
        price: '900',
        image: require('../assets/dress2.jpg'),
        productImageList:[

          require('../assets/dress4.jpg'),
          require('../assets/dress3.jpg'),
          require('../assets/cloth.jpg')

        ]
      }
]
  export default Products

export function getProducts() {
    return  Products;
}
export function getProduct(id) {
    return Products.find((product) => (product.id == id));
}