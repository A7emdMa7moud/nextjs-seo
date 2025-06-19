import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ahmed Mahmoud | MERN Stack Developer",
  description:
    "Learn more about Ahmed Mahmoud, a passionate MERN Stack developer specializing in MongoDB, Express, React, and Node.js.",
  keywords: [
    "Ahmed Mahmoud",
    "MERN Stack",
    "About",
    "Web Developer",
    "Full Stack",
  ],
};

export default function AboutPage() {
  return (
    <div className="max-w-prose m-auto space-y-3">
      <h1 className="text-3xl text-center font-bold">About Ahmed Mahmoud</h1>
      <p>
        Ahmed Mahmoud is a MERN Stack developer with a passion for building
        modern, scalable web applications using MongoDB, Express, React, and
        Node.js. On this blog, you&apos;ll find articles, tutorials, and
        resources to help you master full stack development and stay up to date
        with the latest in web technologies.
      </p>
    </div>
  );
}
