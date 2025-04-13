import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

import { motion } from "framer-motion";

const courses = [
  {
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript and React for free.",
  },
  {
    title: "Data Science",
    description: "Explore Python, Pandas, NumPy, and machine learning basics.",
  },
  {
    title: "UI/UX Design",
    description: "Master design principles, Figma, and user research methods.",
  },
  {
    title: "Embedded Systems",
    description: "Understand microcontrollers, sensors, and real-time systems.",
  },
  {
    title: "Total PCB Designing",
    description: "Learn schematic capture, layout, and manufacturing techniques.",
  },
  {
    title: "VLSI",
    description: "Get into digital design, HDL, and semiconductor fundamentals.",
  },
  {
    title: "Robotics",
    description: "Build intelligent machines using programming and hardware integration.",
  },
  {
    title: "ChatGPT Expert",
    description: "Master prompt engineering and build AI applications with ChatGPT.",
  },
];

export default function FreeCoursesSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Electro School</h1>
        <p className="text-lg text-gray-600">
          Access quality education without any cost.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-flow-col auto-cols-[280px] overflow-x-auto gap-6 pb-4"
      >
        {courses.map((course, idx) => (
          <Card key={idx} className="rounded-2xl shadow-md p-4 min-w-[260px]">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <Button className="w-full">Start Learning</Button>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <section className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-2">Subscribe for Updates</h3>
        <p className="text-gray-600 mb-4">Get notified about new courses.</p>
        <div className="flex justify-center gap-2">
          <Input placeholder="Enter your email" className="w-64" />
          <Button>Subscribe</Button>
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        &copy; 2025 Electro School. All rights reserved.
      </footer>
    </div>
  );
}
