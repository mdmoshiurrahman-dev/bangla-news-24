"use client";
import { ICategory, ICategoryRes } from "@/types/category";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

export interface NavigationProps {
  prop: Promise<ICategoryRes>;
}

const NavigationItems = ({ prop }: NavigationProps) => {
  const data = use(prop);
  const category = data.data as ICategory[];
  const pathName = usePathname();


  return (
    <>
      <ul className="flex gap-3 justify-center text-sm">
        {category.map((c, index) => (
          <li key={index}>
            <Link
              className={`flex gap-3 items-center my-2 ${
                pathName === `/category/${c.slug}` ? "text-red-700" : ""
              }`}
              href={c.slug === "/bengali" ? "/bengali" : `/category/${c.slug}`}
            >
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavigationItems;
