type RootStackParamList = {
  Home: undefined;
  Restaurant: {
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: any[];
    long: number;
    lat: number;
  };
  Basket: undefined;
};

interface IDish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export { RootStackParamList, IDish };
