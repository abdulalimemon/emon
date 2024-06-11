import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  EditorBubble,
  EditorBubbleItem,
  EditorCommand,
  EditorCommandItem,
  EditorContent,
  Editor,
  EditorRoot,
} from "novel";

const BlogsEditor = () => {
  return (
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
        <div>
          <EditorRoot>
            <EditorContent>
              <EditorCommand>
                <EditorCommandItem />
                <EditorCommandItem />
                <EditorCommandItem />
              </EditorCommand>
              <EditorBubble>
                <EditorBubbleItem />
                <EditorBubbleItem />
                <EditorBubbleItem />
              </EditorBubble>
            </EditorContent>
          </EditorRoot>
        </div>
      </div>
    </div>
  );
};

export default BlogsEditor;
