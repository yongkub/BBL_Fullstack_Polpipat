import { useEffect, useState } from "react";
import { useRefetchContext } from "../context/RefetchContext";
import { useNavigate } from "react-router";

interface IItem {
  name: string;
  description: string;
}

const ItemList = () => {
  const navigate = useNavigate();
  const { reFlag } = useRefetchContext();
  const [items, setItems] = useState<IItem[]>([]);
  const fetchList = async () => {
    const url = "http://localhost:3000/items";
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      alert("Can't fetch the data");
      return;
    }
    const itemList = await response.json();
    setItems(itemList);
  };
  useEffect(() => {
    fetchList();
  }, [reFlag]);
  return (
    <div id="item-list">
      {items &&
        items.length > 0 &&
        items.map((item, ind) => (
          <div className="item" key={ind}>
            {item.name}
          </div>
        ))}
      <button onClick={() => navigate("/items/new")}>Add New Item</button>
    </div>
  );
};
export default ItemList;
