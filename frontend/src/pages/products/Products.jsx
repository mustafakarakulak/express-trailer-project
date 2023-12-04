import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Products = () => {
    const [allproducts, setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productName, setProductName] = useState("");
    const [productStock, setProductStock] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get("http://localhost:3001/products/allpr", {withCredentials: true});
            console.log(data);
            setAllProducts(data);
        };
        const fetchCategories = async () => {
            const { data } = await axios.get("http://localhost:3001/categories/", {withCredentials: true});
            console.log(data);
            setCategories(data);
        }
        fetchProducts();
        fetchCategories();
    }, []);

    const handleSetProduct = (e) => {
        setProductName(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    const handleSetStock = (e) => {
        setProductStock(e.target.value);
    }

    const handleSubmit = async () => {
        try {
            const newProduct = {
                pr_name: productName,
                pr_stock: productStock,
                pr_category: selectedCategory // Seçilen kategori burada kullanılıyor
            };
            if (newProduct.pr_name === "" || newProduct.pr_stock === "" || newProduct.pr_category === "") {
                console.error("Please fill all fields!");
                return;
            }

            const response = await axios.post("http://localhost:3001/products/addpr", newProduct, { withCredentials: true });

            console.log("Product added:", response.data);

            // Başarılı olursa, state'leri sıfırla veya isteğe göre işlem yap
            setProductName("");
            setProductStock("");
            setSelectedCategory("");
        } catch (error) {
            console.error("Error adding product:", error);
        }
    }

    const handleDelete = async (pr_id) => {
        try {
            console.log("Deleting product:", pr_id);
            const response = await axios.delete(`http://localhost:3001/products/delpr/${pr_id}`, { withCredentials: true });
            console.log("Product deleted:", response.data);
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    }

    return (
        <div>
            <h2>All Products</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {allproducts.map((product) => (
                    <div key={product.pr_id} style={{ width: "10%", padding: "10px" }}>
                        <h3>{product.pr_name}</h3>
                        <p>{product.pr_stock}</p>
                        <p>{product.pr_category.ct_name}</p>
                        <button onClick={() => handleDelete(product.pr_id)}> Delete </button>
                    </div>
                ))}
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
                <h2>Add Product</h2>
                <form style={{display:"flex", flexDirection:"column", textAlign:"center", alignItems:"center"}}>
                    <input onChange={handleSetProduct} type="text" placeholder="Product Name" value={productName} />
                    <input onChange={handleSetStock} type="number" placeholder="Product Stock" value={productStock} />
                    <select name="category" onChange={handleCategoryChange} value={selectedCategory}>
                        <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.ct_id} value={category.ct_name}>
                            {category.ct_name}
                        </option>
                    ))}
                    </select>
                </form>
                    <button onClick={handleSubmit} >Add Product</button>
            </div>
        </div>
    );
    
};

export default Products;