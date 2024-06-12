"use client";

import { useRouter } from "next/navigation";
import { gejala2, cf_user } from "@/data/data";
import { useAtom } from "jotai";
import { dataAtom } from "@/context/atoms";

export default function Form() {
  const [data, setData] = useAtom(dataAtom);
  const router = useRouter();

  const handleChange = (e, code) => {
    setData({
      ...data,
      [code]: e.target.value,
    });

    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/result", { data: JSON.stringify(data) });
  };

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center bg-gray-300 text-black'>
      <h1 className='text-3xl font-bold text-black mb-4'>
        Masukkan gejala yang anda rasakan
      </h1>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded shadow-md w-3/4'
      >
        {gejala2.map((rule) => (
          <div key={rule.kode_gejala} className='mb-4'>
            <label className='font-bold'>{rule.gejala}</label>
            {cf_user.map((cf) => (
              <div className='flex gap-2'>
                <input
                  type='radio'
                  name={rule.kode_gejala}
                  value={cf.kondisi}
                  required
                  onChange={(e) => handleChange(e, rule.kode_gejala)}
                />
                <label for={cf.kondisi} className='block text-black mb-2'>
                  {cf.kondisi}
                </label>
              </div>
            ))}

            {/* <select
              className="w-full p-2 border rounded text-black"
              onChange={(e) => handleChange(e, rule.kode_gejala)}
            >
              <option value="">Select a condition</option>
              {cf_user.map(cf => (
                <option key={cf.kondisi} value={cf.kondisi} className="text-black">
                  {cf.kondisi}
                </option>
              ))}
            </select> */}
          </div>
        ))}
        <button
          type='submit'
          className='px-6 py-2 bg-blue-500 text-white rounded-full'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
