export const getCategoriesFromData = (data: any) => {
  const categoryCounts = data.reduce((acc: any, item: any) => {
    acc[item.name] = (acc[item.name] || 0) + 1;
    return acc;
  }, {});

  return ["All", ...Object.keys(categoryCounts)];
};

  
 export const getCoffeeList = (category: string, data: any) => {
    if (category == "All") {
      return data;
    } else {
      let coffeelist = data.filter((item: any) => item.name == category);
      return coffeelist;
    }
  };