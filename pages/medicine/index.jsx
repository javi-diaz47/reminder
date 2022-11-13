import { PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

const medicines = [
  { id: 1, name: "acetaminofen" },
  { id: 2, name: "loratadina" },
  { id: 3, name: "vitamina C" },
  { id: 4, name: "Calcio" },
  { id: 5, name: "sildenafilo" },
];

function Medicine() {
  const [currentSearch, setCurrentSearch] = useState(medicines);
  const [search, setSearch] = useState("");

  const onSearch = (ev) => {
    setSearch(ev.target.value);

    if (ev.target.value === "") {
      setCurrentSearch(medicines);
    } else {
      const newCurrentSearch = currentSearch.filter(({ name }) =>
        name.toLowerCase().includes(ev.target.value.toLowerCase())
      );
      console.log(newCurrentSearch);
      setCurrentSearch(newCurrentSearch);
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl ">Pastillas registradas</h2>
        <button>
          <PlusIcon className="w-12 text-primary" />
        </button>
      </div>
      <input
        onChange={onSearch}
        defaultValue=""
        value={search}
        name="search-bar"
        placeholder="Busccar partillas"
        className="p-1 py-2 bg-gray rounded-md w-full text-center"
      />

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          {currentSearch.map(({ id, name }) => (
            <tr
              key={id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className=" text-slate-600 capitalize text-red py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                {name}
              </th>
              <td className="py-4 px-6">
                <Link href={`/medicine/${id}`} className="text-primary">
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Medicine;
