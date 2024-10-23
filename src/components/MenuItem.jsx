/* eslint-disable react/prop-types */


export default function MenuItem({ item, addItem }) {
    return (
        <button 
            className="border-2 border-teal-800 bg-white hover:bg-teal-200 w-full p-3 flex justify-between"
            onClick={() => addItem(item)}
        >
            <div>
                <img className="w-24 h-24 object-cover" src={`/img/${item.image}.jpg`} alt={item.name} />
            </div>
            
            <div className="flex flex-col justify-center items-center flex-grow text-center pt-4">
                <p className="font-black text-3xl">{item.name}</p>
                <p className="font-black text-2xl text-gray-500">{item.price} €</p>
            </div>
        </button>
    );
}


