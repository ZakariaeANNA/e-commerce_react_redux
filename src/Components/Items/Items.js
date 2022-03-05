import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./Item.css"

const Items = () => {
    return (
        <div class="items">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </div>
    );
}

export default Items;