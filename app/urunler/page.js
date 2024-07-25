"use client";
import React, { useEffect, useState, useRef } from "react";
import products from "../../components/productsData";
import Navbar from "@/components/navbar";
import "./style.css";
import Link from "next/link";


export default function Filter() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [searchValue, setSearchValue] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "Tümü" ? true : product.category === selectedCategory
    )
    .filter(
      (product) =>
        searchValue === "" ||
        product.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  const filteredCount = filteredProducts.length;

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  useEffect(() => {
    function FilterProduct() {
      this.run = function () {
        const indicator = document.querySelector(".indicator").children;
        for (let i = 0; i < indicator.length; i++) {
          indicator[i].onclick = function () {
            for (let x = 0; x < indicator.length; x++) {
              indicator[x].classList.remove("active");
            }
            this.classList.add("active");
            const displayItems = this.getAttribute("data-filter");
            setSelectedCategory(displayItems);
            setSidebarOpen(false); // Sidebar'ı kapat
          };
        }
      };
    }

    new FilterProduct().run();
  }, []);

  return (
    <>
      <main className="flex">
        <div
          ref={sidebarRef}
          className={`fixed inset-0 z-50 transition-transform transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white shadow-md text-black w-64 p-4`}
        >
          <div className="flex justify-between py-5">
            <p className="">Filter</p>
            <button
              className="text-black text-xl"
              onClick={() => setSidebarOpen(false)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul className="indicator space-y-2 scrollable-content ">
            {[
              "Tümü",
              "Mıknatıslı Kutu",
              "Çikolata Kutuları",
              "Kozmetik Kutuları",
              "Saat Kutuları",
              "Özel Tasarım Kutular",
              "Kartela Çeşitleri",
              "Katlanır Demonte Kutular",
              "Mum Kutuları",
              "Çekmeceli Bölmeli Kutular",
              "Kraft Kutular",
              "Bristol Kutular",
              "Lansman Kutuları",
              "Kargo Kutuları",
              "Karton Çanta",
              "Hediye Kutuları",
            ].map((category) => (
              <li
                key={category}
                data-filter={category}
                className={`cursor-pointer p-2 rounded hover:bg-gray-200 ${
                  selectedCategory === category ? "font-bold bg-gray-100" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSidebarOpen(false); // Sidebar'ı kapat
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 px-2 md:px-10">
        <header className="flex justify-between items-center p-4">
            <button className="text-xl" onClick={() => setSidebarOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
            </button>
            <div className="flex items-center">
              <input
                type="text"
                className="filter-input w-64 p-2 border-b-2 border-gray-400 outline-none"
                placeholder="Ara..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div>
              <span className="ml-4 text-gray-600">{filteredCount} sonuç</span>
            </div>
          </header>
          <div className="product-field py-4">
            <ul className="items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product, index) => (
                <li
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-4 flex flex-col items-center"
                >
                  <img
                    src={product.image} // Ürünün fotoğrafını buradan al
                    className="w-full h-full object-cover rounded-3xl mb-2"
                    alt="productsImage"
                  />
                  <strong className="text-center mb-1">{product.title}</strong>
                  <h4>{product.price}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
