import { BellIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "../../components/Icon";
import { Input } from "../../components/Input";
import { getMedicine } from "../../utils/getMedicine";
import { getUserIdFromToken } from "../../utils/getUserIdFromToken";

function Medicine({ medicines }) {
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
    <div className="flex flex-col gap-10 bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl align-middle">Mis Medicamentos</h2>
        <Link href="add-medicine">
          <PlusIcon className="w-12 text-primary hover:rotate-180 duration-300" />
        </Link>
      </div>

      <Input onChange={onSearch} value={search} name="search-bar" placeholder="Busccar partillas" />

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody className="flex flex-col gap-8">
          {currentSearch.map(({ id, name }) => (
            <tr
              key={id}
              className="flex py-2 justify-between items-center bg-white border-b hover:bg-gray-50 border-primary duration-150"
            >
              <th scope="row" className=" text-lg capitalize text-red  font-medium text-gray-900 whitespace-nowrap ">
                {name}
              </th>
              <td className="  flex justify-center items-center gap-4">
                <Link href={`/reminder/${id}`}>
                  <Icon className="w-6">
                    <BellIcon />
                  </Icon>
                </Link>
                <Link href="edit-medicine">
                  <Icon className="w-6">
                    <PencilIcon />
                  </Icon>
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

export async function getServerSideProps(context) {
  const id = await getUserIdFromToken(context);
  const medicines = await getMedicine(id);

  return {
    props: {
      medicines,
    },
  };
}
