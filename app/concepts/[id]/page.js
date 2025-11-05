"use client"
import { concepts } from "@/data/concepts";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function ConceptPage() {
    const params = useParams();
  const concept = concepts.find((c) => c.id === params.id);

  if (!concept) {
    return <p className="text-center mt-10">Concept not found</p>;
  }

  return (
    <main className="min-h-screen bg-white p-10">
      <Link href="/" className="text-green-600 font-medium mb-6 inline-block">
        ← Back to all concepts
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{concept.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">{concept.description}</p>
    </main>
  );
}
