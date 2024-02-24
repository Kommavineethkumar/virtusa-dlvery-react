import { useState } from "react";
import TextField from "../ui-elements/TextField";
import "../../assets/css/product.css";
import Dropdown from "../ui-elements/Dropdown";
import Button from "../ui-elements/Button";
import { useParams } from "react-router-dom";

function ProductInfo() {
    const [productInfo, setProductInfo] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
    });

    const params = useParams();

    if (params.id) {
        // Need to call API to get product info
    }

    const defaultCategories = [
        {
            id: 1,
            name: "Electronics",
        },
        {
            id: 2,
            name: "Clothing",
        },
        {
            id: 3,
            name: "Footwear",
        },
        {
            id: 4,
            name: "Accessories",
        }
    ];

    const changeSelectedCategory = (id) => {
        setProductInfo({ ...productInfo, category: id });
    };

    const [categories, setCategories] = useState(defaultCategories);

    const onChange = (e, id) => {
        setProductInfo({ ...productInfo, [id]: e.target.value });
    };

    const saveProduct = () => {
        // Need to add product form validation

        // Need to call API to save product
    };

    return (
        <div id="static-modal" data-modal-backdrop="static" tabIndex="1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)]">
            <div className="modal-body">
                <div className="mandali-regular page-header">
                    <div className="page-title">Add/Edit Product</div>
                </div>
                <div className="product-info-container">
                    <div className="product-form">
                        <div className="product-form-entry">
                            <p className="product-label">Name</p>
                            <TextField
                                id="name"
                                type="text"
                                placeholder="Enter product name"
                                value={productInfo.name}
                                onChange={(e) => onChange(e, "name")} />
                        </div>
                        <div className="product-form-entry">
                            <p className="product-label">Description</p>
                            <TextField
                                id="description"
                                type="text"
                                placeholder="Enter product description"
                                value={productInfo.description}
                                onChange={(e) => onChange(e, "description")}
                            />
                        </div>
                        <div className="product-form-entry">
                            <p className="product-label">Category</p>
                            <Dropdown values={categories} onChange={changeSelectedCategory} id={productInfo.category} />
                        </div>
                        <div className="product-form-entry align-center">
                            <Button value="Save" onClick={saveProduct} className={"btn-primary"} />
                        </div>
                    </div>
                    <div className="product-image-upload">
                        <div className="product-image-upload-container">
                            <div className="product-image-upload-text">
                                Upload product image
                            </div>
                            <div className="product-image-upload-button">
                                <input type="file" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;