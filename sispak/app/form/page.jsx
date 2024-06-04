"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { gejala2, cf_user } from "@/data/data";

export default function Form() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = (e, code) => {
    setFormData({
      ...formData,
      [code]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/result',
      query: { data: JSON.stringify(formData) }
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-black mb-4">Fill the Symptoms Form</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-3/4">
        {gejala2.map(rule => (
          <div key={rule.kode_gejala} className="mb-4">
            <label className="block text-black mb-2">{rule.gejala}</label>
            <select
              className="w-full p-2 border rounded text-black"
              onChange={(e) => handleChange(e, rule.kode_gejala)}
            >
              <option value="">Select a condition</option>
              {cf_user.map((index, cf) => (
                <option key={index} value={cf.kondisi} className="text-black">
                  {cf.kondisi}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
}
