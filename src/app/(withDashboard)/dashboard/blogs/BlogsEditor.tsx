"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

const BlogsEditor = () => {
  const editor = useCreateBlockNote();
  return (
    <>
      <div className="flex py-10 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col gap-1 w-full px-5">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-semibold tracking-tight">
              Add a new blog
            </h3>
            <Link href="/dashboard/blogs">
              <Button className="dark:text-black">
                <FaExternalLinkAlt className="size-4 mr-3" /> View all blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex py-10 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col gap-1 w-full px-5">
          <div>
            <BlockNoteView editor={editor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsEditor;
