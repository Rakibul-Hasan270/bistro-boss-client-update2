import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async data => {
        const imageFile = { image: data.image[0] };

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        console.log('ata image hostiong ar clg__', res.data.success);
        if (res.data.success) {
            const itemInfo = {
                name: data.name,
                category: data.category,
                price: data.price,
                recipr: data.recipeDetails,
                image: data.image
            }
            const result = await axiosSecure.post('/menu', itemInfo);
            console.log('from post api axiosSecure', result);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 rounded-md shadow-md">
            <SectionTitle heading="ADD AN ITEM" subHeading="---What's new?---" />

            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" noValidate>
                {/* Recipe Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="text-gray-700 dark:text-gray-200 font-semibold">
                        Recipe Name
                    </label>
                    <input
                        {...register("name", { required: "Recipe name is required" })}
                        id="name"
                        type="text"
                        placeholder="Recipe name"
                        className={`w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md
              ${errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-600"}
              dark:bg-gray-800 dark:text-gray-300
              focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
              dark:focus:border-blue-300 focus:outline-none focus:ring`}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Category and Price */}
                <div className="mb-4 flex flex-col md:flex-row md:gap-4">
                    {/* Category */}
                    <div className="flex-1">
                        <label htmlFor="category" className="text-gray-700 dark:text-gray-200 font-semibold">
                            Category
                        </label>
                        <select
                            {...register("category", { required: "Category is required" })}
                            id="category"
                            className={`w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md
                ${errors.category ? "border-red-500" : "border-gray-200 dark:border-gray-600"}
                dark:bg-gray-800 dark:text-gray-300
                focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
                dark:focus:border-blue-300 focus:outline-none focus:ring`}
                        >
                            <option value="">Select Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soups</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
                        )}
                    </div>

                    {/* Price */}
                    <div className="flex-1 mt-4 md:mt-0">
                        <label htmlFor="price" className="text-gray-700 dark:text-gray-200 font-semibold">
                            Price
                        </label>
                        <input
                            {...register("price", {
                                required: "Price is required",
                                pattern: {
                                    value: /^[0-9]+(\.[0-9]{1,2})?$/,
                                    message: "Enter a valid price (e.g., 10 or 10.99)",
                                },
                            })}
                            id="price"
                            type="text"
                            placeholder="Price"
                            className={`w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md
                ${errors.price ? "border-red-500" : "border-gray-200 dark:border-gray-600"}
                dark:bg-gray-800 dark:text-gray-300
                focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
                dark:focus:border-blue-300 focus:outline-none focus:ring`}
                        />
                        {errors.price && (
                            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                        )}
                    </div>
                </div>

                {/* Recipe Details */}
                <div className="mb-6">
                    <label htmlFor="recipeDetails" className="text-gray-700 dark:text-gray-200 font-semibold">
                        Recipe Details
                    </label>
                    <textarea
                        {...register("recipeDetails", {
                            required: "Recipe details are required",
                            minLength: {
                                value: 10,
                                message: "Details must be at least 10 characters",
                            },
                        })}
                        id="recipeDetails"
                        placeholder="Recipe details"
                        className={`w-full h-24 px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md
              ${errors.recipeDetails ? "border-red-500" : "border-gray-200 dark:border-gray-600"}
              dark:bg-gray-800 dark:text-gray-300
              focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
              dark:focus:border-blue-300 focus:outline-none focus:ring`}
                    />
                    {errors.recipeDetails && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.recipeDetails.message}
                        </p>
                    )}
                </div>

                {/* File Upload */}
                <div className="mb-6">
                    <label htmlFor="image" className="text-gray-700 dark:text-gray-200 font-semibold">
                        Upload Image
                    </label>
                    <input
                        {...register("image", { required: "Image is required" })}
                        type="file"
                        id="image"
                        accept="image/*"
                        className={`file-input file-input-bordered w-full mt-2
              ${errors.image ? "border-red-500" : "border-gray-200 dark:border-gray-600"}`}
                    />
                    {errors.image && (
                        <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 px-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddItem;