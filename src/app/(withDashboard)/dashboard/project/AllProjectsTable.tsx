import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin4Line } from "react-icons/ri";
import { TiDocumentAdd } from "react-icons/ti";
import Link from "next/link";

const projects = [
  {
    title: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  },
  {
    title: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
  },
  {
    title: "React JS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    title: "Redux",
    image:
      "https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png",
  },
  {
    title: "Node JS",
    image:
      "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
  },
  {
    title: "Express JS",
    image:
      "https://www.rapidbrains.com/assets/img/services/rapidbrains-expressjs.webp",
  },
  {
    title: "Next JS",
    image:
      "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
  },
  {
    title: "MongoDB",
    image:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
  },
];

const AllProjectsTable = () => {
  return (
    <div className="flex py-10 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col gap-1 w-full px-5">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-xl font-semibold tracking-tight">All Projects</h3>
          <Link href="/dashboard/project/add">
            <Button className="dark:text-black">
              <TiDocumentAdd className="size-5 mr-3" /> Add Project
            </Button>
          </Link>
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Serial</TableHead>
                <TableHead className="w-1/4">Image</TableHead>
                <TableHead className="w-1/4">Title</TableHead>
                <TableHead className="w-1/4 hidden md:block">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell className="font-medium">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="size-10"
                    />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell className="hidden md:block">
                    <div className="flex gap-5">
                      <Button className="dark:text-black">
                        <FaRegEdit className="size-5" />
                      </Button>
                      <Button className=" bg-red-500 hover:bg-red-800">
                        <RiDeleteBin4Line className="size-5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AllProjectsTable;
