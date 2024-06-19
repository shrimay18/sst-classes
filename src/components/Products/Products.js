import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import { useState,useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
function Products({cart,increaseQuantity,decreaseQuantity}) {
  // console.log("Products")
  //   const products = [
  //         {
  //           id: 1,
  //           title: "Apple iPhone 14",
  //           price: "Rs. 1,00,000"
  //         },
  //         {
  //           id: 2,
  //           title: "Apple iPhone 13",
  //           price: "Rs. 70,000"
  //         },
  //         {
  //           id: 3,
  //           title: "Google Pixel 7",
  //           price: "Rs. 50,000"
  //         },
  //         {
  //           id: 4,
  //           title: "Nokia 1100",
  //           price: "Rs. 2,000"
  //         },
  //         {
  //           id: 5,
  //           title: "Samsung Galaxy S10",
  //           price: "Rs. 1,00,000"
  //         },
  //         {
  //           id: 6,
  //           title: "Sony Xperia S10",
  //           price: "Rs. 1,00,000"
  //         }
  //      ];

  let [products, setProducts] = useState([]);
  console.log(useWindowSize());
  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setProducts(res);
      });
    }, []);
    return (
      <div>
          <div><Effect /></div>
            {
                products.map(function (item,index) {
                    return (<ProductCard key={index} product={item} cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>)
                })
            }
        </div>
    )
}
export let a = 10;
export let b = 20;
export default Products;
// Javascript XML 

//ProductCard(title)
//named export 
//default export
// One default export
// multiple named exports


// oldDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ] 
// newDom = [
// <ProductCard title="Title 1" />,
// <ProductCard title="Title 4" />,
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ]

// order would be mismatched
// <ProductCard title="Title 2" />,
// <ProductCard title="Title 3" />
// ]

//custom hook which return width and the height at any given point of time
// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//    window.addEventListener('resize', handleResize);  
//     handleResize();

//     // Cleanup event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//    }, []);

//    return windowDimensions;
// }


