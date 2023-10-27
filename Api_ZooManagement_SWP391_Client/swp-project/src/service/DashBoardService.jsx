export const getOrders = () => {
    return fetch("https://65369b10bb226bb85dd267ab.mockapi.io/ticket/sumary").then((res) => res.json());
  };
  
  export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
  };
  
  export const getAnimails = () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  };
  
  export const getEmployee = () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
  };
  export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
  };