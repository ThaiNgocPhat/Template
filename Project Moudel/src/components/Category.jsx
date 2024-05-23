import React from "react";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <>
      <div id="category">
        <h1>Category</h1>
        <div className="category-item">
          <img src="/public/iphone.webp" alt="Iphone" />
          <Link to="/iphone">Iphone</Link>
        </div>
        <div className="category-item">
          <img src="/public/s24-plus-tim.webp" alt="Samsung" />
          <Link to="/samsung">Samsung</Link>
        </div>
        <div className="category-item">
          <img src="/public/redmi_note_13_gold.webp" alt="Xiaomi" />
          <Link to="/xiaomi">Xiaomi</Link>
        </div>
        <div className="category-item">
          <img src="/public/Adater.png" alt="Accessory" />
          <Link to="/accessory">Accessory</Link>
        </div>
      </div>
    </>
  );
}
