import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const medicines = [
  { name: "acetaminofen" },
  { name: "loratadina" },
  { name: "vitamina C" },
  { name: "Calcio" },
  { name: "sildenafilo" },
];

function Medicine() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-2 bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl ">Pastillas registradas</h2>
        <button>
          <PlusIcon className="w-12 text-primary" />
        </button>
      </div>
      <input
        onChange={(ev) => setSearch(ev.target.value)}
        defaultValue=""
        value={search}
        name="search-bar"
        placeholder="Busccar partillas"
        className="p-1  rounded-md w-full text-center"
      />
      <div className="">
        {medicines.map(({ name }) => {
          <li>{name}</li>;
        })}
      </div>
    </div>
  );
}

export default Medicine;
