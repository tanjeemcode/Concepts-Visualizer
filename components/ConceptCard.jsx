"use client";
import {motion} from "framer-motion";
import Link from "next/link";





   export default function ConceptCard({ concept }) {
  return (
    <motion.div whileHover={{scale: 1.05}} className="bg-white shadow-md rounded-2xl p-5 text-center hover:shadow-lg transition">
       <h2 className="text-xl font-semibold mb-2 text-gray-800">{concept.title}</h2>
       <p className="text-gray-600 mb-4">{concept.description.slice(0, 80)}...</p>
       <Link href={`/concepts/${concept.id}`} className="text-green-600 font-medium hover:underline">
        Learn More →
       </Link>
    </motion.div> 
  )
}

