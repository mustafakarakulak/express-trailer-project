import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");

    useEffect(() => {
        const fetchCategories = async () => {
            const { data } = await axios.get("http://localhost:3001/categories/", {withCredentials: true});
            console.log(data);
            setCategories(data);
        };
        fetchCategories();
    }, []);

    const handleCategoryName = (e) => {
        setCategoryName(e.target.value);
    }

    const handleCategoryDescription = (e) => {
        setCategoryDescription(e.target.value);
    }

    const handleNewCategory = async () => {
        try {
            await axios.post("http://localhost:3001/categories/addct", {
                ct_name: categoryName,
                ct_description: categoryDescription,
            }, { withCredentials: true });
        } catch (error) {
            console.error("Category creation failed: ", error);
        }
    }

    const handleDeleteCategory = async (category) => {
        try {
            console.log(category.ct_id);
            await axios.delete(`http://localhost:3001/categories/${category.ct_id}`, { withCredentials: true });
        } catch (error) {
            console.error("Category deletion failed: ", error);
        }
    }

    return (
        <div>
            <h1>Categories</h1>
            {categories.map((category) => (
                <div key={category.ct_id}>
                    <h3>{category.ct_name}</h3>
                    <p>{category.ct_description}</p>
                    <button onClick={() => handleDeleteCategory(category)} > Delete Category </button>
                </div>
            ))}
            <div>
                <input type="text" value={categoryName} placeholder="Category Name"
                onChange={handleCategoryName}/>
                <input type="text" value={categoryDescription} placeholder="Category Description"
                onChange={handleCategoryDescription}/>
                <button onClick={handleNewCategory}> ADD Category </button>
            </div>
        </div>
    );
    
}

export default Categories;