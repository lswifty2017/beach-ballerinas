import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Document } from "@contentful/rich-text-types";
import type { Options } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface RichTextRendererProps {
  content: Document;
  className?: string;
}

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-4 last:mb-0">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="font-montaga text-4xl mb-6">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="font-montaga text-3xl mb-5">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="font-montaga text-2xl mb-4">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="font-montaga text-xl mb-3">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="font-montaga text-lg mb-3">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="font-montaga text-base mb-2">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="text-primary-text">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-primary-blue pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-light-grey" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { file, title, description } = node.data.target.fields;
      const url = file?.url;
      if (!url) return null;

      return (
        <div className="my-6">
          <Image
            src={`https:${url}`}
            alt={description || title || ""}
            width={800}
            height={600}
            className="rounded-lg max-w-full h-auto"
          />
          {description && (
            <p className="text-sm text-light-grey mt-2 text-center">
              {description}
            </p>
          )}
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      const isExternal = uri.startsWith("http");

      if (isExternal) {
        return (
          <a
            href={uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-blue underline hover:text-black transition-colors"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={uri}
          className="text-primary-blue underline hover:text-black transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
};

export function RichTextRenderer({ content, className }: RichTextRendererProps) {
  // Guard against undefined/null content
  if (!content || !content.content) {
    return null;
  }

  return (
    <div className={cn("text-primary-text", className)}>
      {documentToReactComponents(content, options)}
    </div>
  );
}
