import React from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { cn } from "@/lib/utils";

export const mdxComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "text-3xl font-bold text-zinc-100 mt-12 mb-6 font-mono",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "text-2xl font-bold text-zinc-100 mt-10 mb-4 font-mono group",
        className
      )}
      {...props}
    >
      <span className="text-emerald-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
        #
      </span>
      {props.children}
    </h2>
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "text-xl font-bold text-zinc-100 mt-8 mb-3",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "text-zinc-400 leading-relaxed mb-4",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        "list-disc list-inside text-zinc-400 space-y-2 mb-4 ml-4",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "list-decimal list-inside text-zinc-400 space-y-2 mb-4 ml-4",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn("text-zinc-400", className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("text-zinc-200 font-semibold", className)}
      {...props}
    />
  ),
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className?.includes("language-");
    
    if (isInline) {
      return (
        <code
          className={cn(
            "bg-zinc-900 px-1.5 py-0.5 rounded text-emerald-400 font-mono text-sm",
            className
          )}
          {...props}
        >
          {children}
        </code>
      );
    }
    
    return <code className={className} {...props}>{children}</code>;
  },
  pre: ({ children }: { children?: React.ReactNode }) => {
    // Safely extract code content from children
    if (!children || typeof children !== 'object') {
      return <CodeBlock code="" language="typescript" />;
    }
    
    const codeElement = children as React.ReactElement<{ 
      children?: React.ReactNode; 
      className?: string 
    }>;
    
    const code = codeElement?.props?.children 
      ? String(codeElement.props.children) 
      : "";
    const className = codeElement?.props?.className ?? "";
    const language = className.replace("language-", "") || "typescript";
    
    return <CodeBlock code={code} language={language} />;
  },
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "border-l-2 border-emerald-500 pl-4 italic text-zinc-400 my-6",
        className
      )}
      {...props}
    />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={cn("border-zinc-800 my-8", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors",
        className
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table
        className={cn(
          "w-full text-sm text-left text-zinc-400",
          className
        )}
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead
      className={cn("text-xs text-zinc-500 uppercase bg-zinc-900", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={cn("px-6 py-3 font-medium", className)}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={cn("px-6 py-4 border-b border-zinc-800", className)}
      {...props}
    />
  ),
};
