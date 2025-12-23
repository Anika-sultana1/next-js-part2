"use client";

import { useRouter, useSearchParams } from "next/navigation";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value; 

    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);

    router.push(`?${newParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        name="search"   
        className="px-3 py-2 border rounded w-72"
        type="text"
        placeholder="Enter food name"
      />
      <button className="px-4 py-2 bg-yellow-500 rounded">
        Search
      </button>
    </form>
  );
};

export default InputSearch;
