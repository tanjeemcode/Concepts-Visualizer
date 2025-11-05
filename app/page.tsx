import Image from "next/image";
import ConceptCard from '../components/ConceptCard'
import {concepts} from '@/data/concepts'
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        Macroecomics - Chapter 1 : Introduction 
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concepts.map((concept) => (
        <ConceptCard key={concept.id} concept={concept} />

        ))}
      </div>
    </main>

  );
}
