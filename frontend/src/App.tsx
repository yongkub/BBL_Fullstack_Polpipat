import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/new" element={<ItemForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
