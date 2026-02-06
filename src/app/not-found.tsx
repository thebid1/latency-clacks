import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Terminal, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32">
      <Container size="sm" className="text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 mb-6">
            <Terminal className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-6xl font-bold text-zinc-100 mb-4 font-mono">
            404
          </h1>
          <p className="text-xl text-zinc-400 mb-2">
            Page not found
          </p>
          <p className="text-sm text-zinc-500 font-mono">
            $ curl https://thebid.dev/this-page
            <br />
            <span className="text-red-400">Error: Resource not found (404)</span>
          </p>
        </div>

        <Link href="/">
          <Button variant="terminal" size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            $ cd /home
          </Button>
        </Link>
      </Container>
    </div>
  );
}
