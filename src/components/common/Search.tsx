"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchContent = ({ name }: { name: string }) => {
  const value = useSearchParams().get("search");
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSubmit = () => {
    search !== ""
      ? router.push(`/${name}?search=${search}`)
      : router.replace(`/${name}`);
  };

  useEffect(() => {
    value !== null && value !== "" && setSearch(value);
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex gap-2 py-[10px] px-5 items-center rounded-lg bg-light-white dark:bg-dark-black border border-color">
          <FaSearch
            className="text-xl text-lightgray dark:dark-form-color"
            onClick={handleSubmit}
          />
          <input
            type="text"
            value={search}
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent focus:outline-none"
            onBlur={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

const Search = ({ name }: { name: string }) => {
  return (
    <Suspense>
      <SearchContent name={name} />
    </Suspense>
  );
};

export default Search;
