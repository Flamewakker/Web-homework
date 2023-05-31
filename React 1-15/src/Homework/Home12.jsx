import React from "react";
import Product from "./For12Task/Product";
import { useState } from 'react';

function Home12() {

  const product = [
    {
      name: "Товар 100",
      description:
        "Вишня кислая — дерево или кустарник, достигает до 10 м в высоту. Листья черешковые, широкоэллиптические, заострённые, тёмно-зелёные сверху, снизу светлее, достигают в длину 8 см. Цветки белого цвета, собраны в зонтиках по 2—3 цветка. Чашелистиков и лепестков по пять, тычинок 15—20, пестик один.",
      price: 15,
    },
    {
      name: "Товар 1",
      description:
        "Вишня кислая — дерево или кустарник, достигает до 10 м в высоту. Листья черешковые, широкоэллиптические, заострённые, тёмно-зелёные сверху, снизу светлее, достигают в длину 8 см. Цветки белого цвета, собраны в зонтиках по 2—3 цветка. Чашелистиков и лепестков по пять, тычинок 15—20, пестик один.",
      price: 10,
    },
    {
      name: "Товар 2",
      description:
        "Вишня кислая — дерево или кустарник, достигает до 10 м в высоту. Листья черешковые, широкоэллиптические, заострённые, тёмно-зелёные сверху, снизу светлее, достигают в длину 8 см. Цветки белого цвета, собраны в зонтиках по 2—3 цветка. Чашелистиков и лепестков по пять, тычинок 15—20, пестик один.",
      price: 40,
    },
    {
      name: "Товар 3",
      description:
        "Вишня кислая — дерево или кустарник, достигает до 10 м в высоту. Листья черешковые, широкоэллиптические, заострённые, тёмно-зелёные сверху, снизу светлее, достигают в длину 8 см. Цветки белого цвета, собраны в зонтиках по 2—3 цветка. Чашелистиков и лепестков по пять, тычинок 15—20, пестик один.",
      price: 50,
    },
    {
      name: "Товар 4",
      description:
        "Вишня кислая — дерево или кустарник, достигает до 10 м в высоту. Листья черешковые, широкоэллиптические, заострённые, тёмно-зелёные сверху, снизу светлее, достигают в длину 8 см. Цветки белого цвета, собраны в зонтиках по 2—3 цветка. Чашелистиков и лепестков по пять, тычинок 15—20, пестик один.",
      price: 3330,
    },
    {
      name: "Товар 5",
      description:
        "Вишня кислая — дерево или кустарник, достигает до 10 м в высоту. Листья черешковые, широкоэллиптические, заострённые, тёмно-зелёные сверху, снизу светлее, достигают в длину 8 см. Цветки белого цвета, собраны в зонтиках по 2—3 цветка. Чашелистиков и лепестков по пять, тычинок 15—20, пестик один.",
      price: 2,
    },
  ];

  const [products, setProducts] = useState([...product]);

  const sortByPriceAsc = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const sortByPriceDesc = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  const sortByName = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedProducts);
  };


  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={sortByPriceAsc}>
                Сортировать по возрастанию цены
              </button>
            </li>
            <li>
              <button onClick={sortByPriceDesc}>
                Сортировать по убыванию цены
              </button>
            </li>
            <li>
              <button onClick={sortByName}>
                Сортировать по алфавиту
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => (
          <Product
            key={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default Home12;
