const productData = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

  

 const sportGoods = productData.filter((item) => {
  if(item.category === "Sporting Goods") {
    return item;
  }
 });

 const electronicGoods = productData.filter((item) => {
  if(item.category === "Electronics") {
    return item;
  }
 });

  const stockedSportsProducts  = productData.filter((item) => {
    if(item.stocked === true && item.category === "Sporting Goods" ) {
      return item;
    }
  });

  const stockedElectronicProducts  = productData.filter((item) => {
    if(item.stocked === true && item.category === "Electronics" ) {
      return item;
    }
  });




  export {sportGoods, electronicGoods, stockedSportsProducts, stockedElectronicProducts};