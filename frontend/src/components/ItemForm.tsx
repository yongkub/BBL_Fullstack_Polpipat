import { useState } from "react";
import { useNavigate } from "react-router";
import { useRefetchContext } from "../context/RefetchContext";
const ItemForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const { triggerRefetch } = useRefetchContext();
  const handleCancel = () => {
    navigate("/");
  };
  const handleSubmit = async () => {
    if (!name) {
      alert("Name is required");
      return;
    }

    const url = "http://localhost:3000/items";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description: desc }),
    });

    if (!response.ok) {
      alert("Something went wrong.");
      return;
    }
    await response.json();
    triggerRefetch();
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrap">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          required
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-wrap">
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          id="desc"
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="btn-wrap">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ItemForm;
