import React from "react";

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
];

export default function FreeCoursesSite() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Free Courses for Students</h1>
        <p style={{ color: '#6b7280' }}>
          Access quality education without any cost.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {courses.map((course, idx) => (
          <div key={idx} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1rem', backgroundColor: '#fff' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{course.title}</h2>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>{course.description}</p>
            <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '6px', width: '100%' }}>
              Start Learning
            </button>
          </div>
        ))}
      </div>

      <section style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Subscribe for Updates</h3>
        <p style={{ color: '#6b7280', marginBottom: '1rem' }}>Get notified about new courses.</p>
        <input placeholder="Enter your email" style={{ padding: '0.5rem', width: '250px', marginRight: '0.5rem' }} />
        <button style={{ backgroundColor: '#2563eb', color: 'white', padding: '0.5rem 1rem', borderRadius: '6px' }}>
          Subscribe
        </button>
      </section>

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.875rem' }}>
        &copy; 2025 FreeCourses. All rights reserved.
      </footer>
    </div>
  );
}
