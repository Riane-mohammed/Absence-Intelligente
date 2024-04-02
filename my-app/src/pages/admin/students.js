import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
// complete the import here
// replace here because we have an issue with types here
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import "./usersTable.css";

import mockData from "./studentsDb.json";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

// interface
const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.email, {
    id: "email",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Email</span>,
  }),
  columnHelper.accessor("phone", {
    header: () => "Phone",
    cell: (info) => info.renderValue(),
  }),
];

export const StudentsPage = () => {
  const [data] = React.useState(() => [...mockData]);
  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="students">
      <div className="py-4">
        <h1 className="text-2xl font-semibold italic text-center text-slate-900">
          Titre pour la partie etudiands-admin
        </h1>
        <div>
          <form class="flex flex-col justify-center p-4 sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div class="relative w-full sm:w-auto">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="w-full sm:w-80 p-4 pl-10 text-sm outline-none text-gray-900 border rounded-lg border-gray-600 placeholder-gray-400"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                class="text-white absolute top-0 right-0 mt-2 mr-2 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600"
              >
                Search
              </button>
            </div>

            <div class="relative">
              <select
                id="countries"
                class="bg-gray-50 p-4 border text-gray-900 text-sm rounded-lg w-full sm:w-80 border-gray-600 placeholder-gray-400"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div class="mx-2 end-2.5">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Purple to blue
                </span>
              </button>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Cyan to blue
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <table className="table-fixed w-full">
        <thead className="border-b-2">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b text-gray-800 uppercase"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 pr-2 py-4 font-medium text-left dark:bg-[#121212] dark:text-white"
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none flex min-w-[36px] items-center"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {({
                        asc: (
                          <span className="pl-2">
                            <IoIosArrowUp />
                          </span>
                        ),
                        desc: (
                          <span className="pl-2">
                            <IoIosArrowDown />
                          </span>
                        ),
                      }[header.column.getIsSorted()] ?? null)}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center p-4">
        <div>
          <span className="">{data.length} results</span>
        </div>
        <div className=" flex justify-center items-center">
          <button
            className=""
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <FaChevronLeft className="text-[0.8rem] cursor-pointer" />
          </button>
          <div className="mx-4 text-[0.9rem]">
            <input
              type="text"
              className="main-bg outline-none border-0 rounded w-[2rem] h-[2rem] pl-[16%] mr-[0.5rem] placeholder:text-black"
              placeholder={JSON.stringify(
                table.getState().pagination.pageIndex + 1
              )}
              onChange={(e) => {
                const page = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                table.setPageIndex(page);
              }}
            />
            <span className="">of {table.getPageCount()}</span>
          </div>
          <button
            className=""
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <FaChevronRight className="text-[0.8rem] cursor-pointer" />
          </button>
        </div>
      </div>
       
</div>
  );
};

//Loaders :

