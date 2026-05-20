import { useState } from "react";

export default function Menu() {

    const [search, setSearch] = useState("");

    const foods = [
        {
            id: 1,
            name: "Chicken Biryani",
            price: 299,
            image: "/images/biryani.jpg",
            category: "Non-Veg",
        },
        {
            id: 2,
            name: "Veg Thali",
            price: 199,
            image: "/images/thali.jpg",
            category: "Veg",
        },
        {
            id: 3,
            name: "Paneer Pizza",
            price: 249,
            image: "/images/pizza.jpg",
            category: "Veg",
        },
        {
            id: 4,
            name: "Burger Combo",
            price: 179,
            image: "/images/burger.jpg",
            category: "Fast Food",
        },
    ];

    
    const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#f8f5f0] px-4 py-10">

            
            <div className="text-center mb-10">

                <h1 className="text-4xl md:text-5xl font-bold text-[#3b2416] mb-3">
                    Explore Our Menu
                </h1>

                <p className="text-zinc-500 text-lg">
                    Fresh taste made with love
                </p>

            </div>

            
            <div className="max-w-xl mx-auto mb-10">

                <input
                    type="text"
                    placeholder="Search food..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-4 rounded-full border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#3b2416]"
                />

            </div>

            
            <div className="flex flex-wrap justify-center gap-4 mb-12">

                <button className="px-5 py-2 rounded-full bg-[#3b2416] text-white">
                    All
                </button>

                <button className="px-5 py-2 rounded-full bg-white border border-zinc-300 hover:bg-zinc-100">
                    Veg
                </button>

                <button className="px-5 py-2 rounded-full bg-white border border-zinc-300 hover:bg-zinc-100">
                    Non-Veg
                </button>

            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {filteredFoods.map((food) => (

                    <div
                        key={food.id}
                        className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                    >

                        
                        <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-56 object-cover"
                        />

                        
                        <div className="p-5">

                            <div className="flex items-center justify-between mb-3">

                                <h2 className="text-xl font-semibold text-[#3b2416]">
                                    {food.name}
                                </h2>

                                <span className="text-sm text-zinc-500">
                                    {food.category}
                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <p className="text-lg font-bold text-[#3b2416]">
                                    ₹{food.price}
                                </p>

                                <button className="bg-[#3b2416] text-white px-4 py-2 rounded-full hover:bg-[#523423] transition duration-300">
                                    Add
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}