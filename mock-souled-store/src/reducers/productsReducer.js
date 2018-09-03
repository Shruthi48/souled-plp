
import Product1 from '../images/product-images/1517577837_DC_Batman_ClassicLogo_T-shirt_Mockup.webp';
import Product1Zoomed from '../images/product-images/1517577837_DC_JusticeLegue_ClassicBatmanLogo_SqrImg_Sangram.webp';
import Product2 from '../images/product-images/1517577845_PoweredByCaffeine_Tshirt_Mockup.webp';
import Product2Zoomed from '../images/product-images/1517577845_PoweredByCaffeine_Tshirt_SqImg_NiyatiS.webp';
import Product3 from '../images/product-images/1517577853_Coder_Tshirt_Mockup.webp';
import Product3Zoomed from '../images/product-images/1517577853_Coder_Tshirt_SqImg_MaheshP.webp';
import Product4 from '../images/product-images/1517577857_Marvel_Deadpool_YourCrazy_MockUp.webp';
import Product4Zoomed from '../images/product-images/1517577857_Marvel_Deadpool_YourCrazyMatchesMyCrazy_Tshirt.webp';
import Product5Zoomed from '../images/product-images/1517577871_Gandhi_Tshirt_SqImg.webp';
import Product5 from '../images/product-images/1517577871_PeaceOutBro_Tshirt_Mockup.webp';
import Product6 from '../images/product-images/1517577889_HP_GryffindorSigil_Tshirt_Mockup_DInkleM.webp';
import Product6Zoomed from '../images/product-images/1517577889_HP_Gryfindor_T-Shirt_SquareImage.webp';
let products = [
    {
        id: 'prod-1',
        productName: 'Batman',
        productImage: Product1,
        productImageZoomed: Product1Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Batman'
    },
    {
        id: 'prod-2',
        productName: 'Spiderman',
        productImage: Product2,
        productImageZoomed: Product2Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Spiderman'
    },
    {
        id: 'prod-3',
        productName: 'Flash',
        productImage: Product3,
        productImageZoomed: Product3Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Flash'
    },
    {
        id: 'prod-4',
        productName: 'Wonder Woman',
        productImage: Product4,
        productImageZoomed: Product4Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Wonder Woman'
    },
    {
        id: 'prod-5',
        productName: 'F.R.I.E.N.D.S',
        productImage: Product5,
        productImageZoomed: Product5Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'F.R.I.E.N.D.S'
    },
    {
        id: 'prod-6',
        productName: 'Big Bang Theory',
        productImage: Product6,
        productImageZoomed: Product6Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Big Bang Theory'
    },
    {
        id: 'prod-7',
        productName: 'Harry Potter',
        productImage: Product1,
        productImageZoomed: Product1Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Harry Potter'
    },
    {
        id: 'prod-8',
        productName: 'Star Wars',
        productImage: Product2,
        productImageZoomed: Product2Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Star Wars'
    },
    {
        id: 'prod-9',
        productName: 'Scooby Doo',
        productImage: Product3,
        productImageZoomed: Product3Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Scooby Doo'
    },
    {
        id: 'prod-10',
        productName: 'Peanuts',
        productImage: Product4,
        productImageZoomed: Product4Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Peanuts'
    },
    {
        id: 'prod-11',
        productName: 'Looney Tunes',
        productImage: Product5,
        productImageZoomed: Product5Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Looney Tunes'
    },
    {
        id: 'prod-12',
        productName: 'The Powerpuff Girls',
        productImage: Product6,
        productImageZoomed: Product6Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'The Powerpuff Girls'
    },
    {
        id: 'prod-13',
        productName: 'Peanuts',
        productImage: Product1,
        productImageZoomed: Product1Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Peanuts'
    },
    {
        id: 'prod-14',
        productName: 'Harry Potter',
        productImage: Product2,
        productImageZoomed: Product2Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Harry Potter'
    },
    {
        id: 'prod-15',
        productName: 'Wonder Woman',
        productImage: Product3,
        productImageZoomed: Product3Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Wonder Woman'
    },
    {
        id: 'prod-16',
        productName: 'Batman',
        productImage: Product4,
        productImageZoomed: Product4Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Batman'
    },
    {
        id: 'prod-17',
        productName: 'Flash',
        productImage: Product5,
        productImageZoomed: Product5Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Flash'
    },
    {
        id: 'prod-18',
        productName: 'Spiderman',
        productImage: Product6,
        productImageZoomed: Product6Zoomed,
        productPrice: '449',
        productCategory: 'T-Shirts',
        productSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        productTheme: 'Spiderman'
    }
];


export default function(state=products, action) {
    switch(action.type){
        case "getProducts": 
          return state;
        case "filterProducts":
          let filteredProducts = action.payload.theme.length > 0 ? products.filter( item => action.payload.theme.includes(item.productTheme)): products;
          return { ...filteredProducts };
        default:
        return state;
    }
}