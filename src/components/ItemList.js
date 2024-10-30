import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2">
              <span className="font-bold text-xm">{item.card.info.name}</span>
              <span className="font-bold">- ₹ {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}</span>
            </div>
            <p className="text-xm">{item.card.info.description}</p>
          </div>
          <div className="w-40 p-4">
            <div className="absolute">
            <button className="p-2 mx-12 bg-white shadow-lg">Add +</button>
                </div>
                <div>
            <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
