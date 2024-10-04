import React from "react";
import { useQuery } from "react-query";

const url = "https://fakestoreapi.com/products";

// Fetch products from the API
const fetchProducts = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json(); // Don't forget to call the method to convert to JSON
};

const Datafetching = () => {
  // Use the useQuery hook to fetch data
  const {
    isLoading,
    error,
    data: products,
  } = useQuery("products", fetchProducts);

  // Display a loading message while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Display an error message if something went wrong
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="h-screen ">
      <h1>Datas</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products?.map((mydata) => (
          <div
            key={mydata.id}
            className="border-2 bg-amber-300 rounded-2xl flex flex-col gap-2 p-4 items-center"
          >
            <img
              src={mydata.image}
              alt="myimage"
              className="h-[300px] w-[300px]"
            />
            <h1>{mydata.title}</h1>
            <h1>${mydata.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Datafetching;
