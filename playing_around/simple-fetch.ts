{
  type productType = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
    rating: {
      rate: number;
      count: number;
    };
  };

  let productList: productType[] = [];

  const headers: Headers = new Headers();
  const baseUrl: string = "https://fakestoreapi.com/products";

  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");

  const fetchOptions = { headers, method: "GET" };

  async function getProducts(showProducts: Function) {
    console.time("Fetching products");
    await fetch(baseUrl, fetchOptions)
      .then(async (res) => await res.json())
      .then((data) => {
        productList = data;
        showProducts && showProducts(productList);
      });
    console.timeEnd("Fetching products");
  }

  getProducts((data: productType[]) => console.table(data, ["id", "category", "price"]));
}
