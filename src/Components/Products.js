const Products= [

      {
        id: '1',
        productName: 'Casual Dress',
        price: '43',
        image: require('../assets/dress3.jpg'),
        subTitle:"Perfect Formal Wera",
        details:[
          'Embroided Velvet',
          'Comfortable Feel',
          'Fit for occaions',
          'EasternLook'
        ],

        size:"Available size 6,7,8,9,10",
        note:"NOTE :Lorem ipsum dolor sit amet. Et dolorem enim ut mollitia recusandae 33 quia commodi. Et labore fuga a nihil doloremque At velit culpa 33 fugit beatae in sequi asperiores in nemo rerum aut dicta repellendus.",
        productCode:"MZ154SHGD",
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
        subTitle:"Perfect Casual Wera",
        productImageList:[

          require('../assets/dress4.jpg'),
          require('../assets/dress3.jpg'),
          require('../assets/cloth.jpg')

        ],
        details:[
          'Embroided Velvet',
          'Comfortable Feel',
          'Fit for occaions',
          'EasternLook'
        ],

        size:"Available size 6,7,8,9,10",
        note:"NOTE :Lorem ipsum dolor sit amet. Et dolorem enim ut mollitia recusandae 33 quia commodi. Et labore fuga a nihil doloremque At velit culpa 33 fugit beatae in sequi asperiores in nemo rerum aut dicta repellendus.",
        productCode:"ABCSHGD",
      },

      {
        id: '3',
        productName: 'Casual Dress',
        price: '43',
        image: require('../assets/cloth.jpg'),
        subTitle:"Perfect Casual Wjs",
        productImageList:[

          require('../assets/dress4.jpg'),
          require('../assets/dress3.jpg'),
          require('../assets/cloth.jpg')

        ],
        details:[
          'Embroided Velvet',
          'Comfortable Feel',
          'Fit for occaions',
          'EasternLook'
        ],

        size:"Available size 6,7,8,9,10",
        note:"NOTE :Lorem ipsum dolor sit amet. Et dolorem enim ut mollitia recusandae 33 quia commodi. Et labore fuga a nihil doloremque At velit culpa 33 fugit beatae in sequi asperiores in nemo rerum aut dicta repellendus.",
        productCode:"AHGYGSHGD",
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

        ],
        details:[
          'Embroided Velvet',
          'Comfortable Feel',
          'Fit for occaions',
          'EasternLook'
        ],

        size:"Available size 6,7,8,9,10",
        note:"NOTE :Lorem ipsum dolor sit amet. Et dolorem enim ut mollitia recusandae 33 quia commodi. Et labore fuga a nihil doloremque At velit culpa 33 fugit beatae in sequi asperiores in nemo rerum aut dicta repellendus.",
        productCode:"AB76876876CSHGD",
        subTitle:"Perfect Casual Wjs",

      },
      
      {
        id: '6',
        productName: 'Dress',
        price: '500',
        image: require('../assets/dress5.jpg'),
        productImageList:[

          require('../assets/dress4.jpg'),
          require('../assets/dress3.jpg'),
          require('../assets/cloth.jpg')

        ],
        details:[
          'Embroided Velvet',
          'Comfortable Feel',
          'Fit for occaions',
          'EasternLook'
        ],

        size:"Available size 6,7,8,9,10",
        note:"NOTE :Lorem ipsum dolor sit amet. Et dolorem enim ut mollitia recusandae 33 quia commodi. Et labore fuga a nihil doloremque At velit culpa 33 fugit beatae in sequi asperiores in nemo rerum aut dicta repellendus.",
        productCode:"AB76876876CSHGD",
        subTitle:"Perfect Casual Wjs",

      },
  
      {
        id: '7',
        productName: 'Formal Dress',
        price: '900',
        image: require('../assets/dress2.jpg'),
        subTitle:"Perfect Casual Wjs",
        productImageList:[

          require('../assets/dress4.jpg'),
          require('../assets/dress3.jpg'),
          require('../assets/cloth.jpg')

        ],
        details:[
          'Embroided Velvet',
          'Comfortable Feel',
          'Fit for occaions',
          'EasternLook'
        ],

        size:"Available size 6,7,8,9,10",
        note:"NOTE :Lorem ipsum dolor sit amet. Et dolorem enim ut mollitia recusandae 33 quia commodi. Et labore fuga a nihil doloremque At velit culpa 33 fugit beatae in sequi asperiores in nemo rerum aut dicta repellendus.",
        productCode:"AB76876876CSHGD",
      }
]
  export default Products

export function getProducts() {
    return  Products;
}
export function getProduct(id) {
    return Products.find((product) => (product.id == id));
}