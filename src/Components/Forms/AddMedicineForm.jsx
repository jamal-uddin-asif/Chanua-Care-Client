import React from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

const AddMedicineForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Add New Medicine
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              Medicine Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="e.g., Napa Extend"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              Generic Name
            </label>
            <input
              type="text"
              {...register("genericName")}
              placeholder="e.g., Paracetamol"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* Category & Dosage */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
            {...register("category")}
              className="w-full border p-2 rounded bg-white"
              required
            >
              <option value="">Select Category</option>
              <option value="tablet">Tablet</option>
              <option value="capsule">Capsule</option>
              <option value="syrup">Syrup / Liquid</option>
              <option value="injection">Injection</option>
              <option value="ointment">Ointment / Cream</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              Dosage / Strength
            </label>
            <input
              type="text"
              {...register("dosage")}
              placeholder="e.g., 665mg, 5ml"
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* Price, Stock Quantity & Expiry Date */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Price ($)</label>
            <input
              type="number"
              step="0.01"
              {...register("price")}
              placeholder="0.00"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              Stock Quantity
            </label>
            <input
              type="number"
               {...register("quantity")}
              placeholder="e.g., 100"
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">
              Expiry Date
            </label>
            <input
              type="date"
               {...register("expiryDate")}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>

        {/* Manufacturer */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Manufacturer / Brand
          </label>
          <input
            type="text"
             {...register("manufacturer")}
            placeholder="e.g., Pfizer, Square Pharma"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Medicine Image
          </label>
          <input
            type="file"
             {...register("image")}
            accept="image/*"
            // onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Description / Instructions */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
             {...register("description")}
            rows="3"
            placeholder="Usage instructions, side effects, or notes..."
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        <Button
          type="submit"
          className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-hover transition"
        >
          Add Medicine
        </Button>
      </form>
    </div>
  );
};

export default AddMedicineForm;
