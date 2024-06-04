import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex items-center justify-center w-full h-screen'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold mb-4'>
          Diagnosa Tingkat Depresi pada Mahasiswa
        </h1>
        <p className='mb-6'>Mulai dengan diagnosa gejala</p>
        <Link href='/form'>
          <p className='px-6 py-2 bg-blue-500 text-white rounded-full'>
            Get Started
          </p>
        </Link>
      </div>
    </main>
  );
}
