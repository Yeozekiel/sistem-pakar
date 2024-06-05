"use client";

import Link from "next/link";
import { useAtom } from "jotai";

import { dataAtom } from "@/context/atoms";

// Import your expert system logic here
import { diagnose } from "@/data/data"; // Adjust the import path as necessary

export default function Result() {
  const formData = useAtom(dataAtom);

  console.log(formData);

  const diagnosis = diagnose(formData);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-300'>
      <h1 className='text-3xl font-bold mb-4 text-black'>Diagnosis Result</h1>
      <div className='bg-white p-10 rounded shadow-md w-96 text-black'>
        {diagnosis.length > 0 ? (
          diagnosis.map((result, index) => (
            <div key={index} className='mb-6'>
              <h2 className='text-xl font-bold'>{result.depresi}</h2>
              <p>Confidence: {(result.cf * 100).toFixed(2)}%</p>
            </div>
          ))
        ) : (
          <p>No diagnosis available. Please fill the form correctly.</p>
        )}
        <Link
          href='/'
          className='px-6 py-2 bg-blue-500 text-white rounded-full mt-10'
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
