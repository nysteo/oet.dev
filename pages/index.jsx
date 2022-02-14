import React from 'react';
import Link from 'next/link';

import {ArrowRight} from 'react-feather';

import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 mx-auto pb-16">
        <div className="flex flex-col sm:flex-row items-start mt-12">
          <div className="flex flex-col pr-8 gap-2">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white ">
              Teo Nys 
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Computer Scientist & Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 ">
              Passionate about solving problems, and building/desisning tools and software that make people's lives easier.
            </p>
          </div>
        </div>
        <h3 className="font-bold text-lg md:text-xl tracking-tight  text-black dark:text-white mt-16">
          TLDR;
        </h3>
        <div className="w-full flex items-center justify-between mt-4 mb-8">
          <div className="">
            <h2 className="text-sm text-gray-400">Software Engineer at:</h2>
            <h1 className="text-lg text-gray-200">EPAM Systems</h1>
          </div>
          <div className="">
            <h2 className="text-sm text-gray-400">Located In:</h2>
            <h1 className="text-lg text-gray-200">New York City</h1>
          </div>
          <div className="">
            <h2 className="text-sm text-gray-400">Studying at</h2>
            <h1 className="text-lg text-gray-200">New York University</h1>
          </div>
        </div>

        <h3 className="font-bold text-lg md:text-xl tracking-tight mb-6 mt-6 text-black dark:text-white">
          Recent Projects
        </h3>
        <div className="w-full flex gap-3 flex-col md:flex-row">
          <ProjectCard
            title="Anubis LMS"
            description="A Distributed Learning Management System"
            link="https://www.google.com"
            stars={90}
          />
          <ProjectCard
            title="Davinci"
            description="AI inline completions for vscode"
            link="https://www.google.com"
            stars={3}
          />
          <ProjectCard
            title="Filestore"
            description="store files in dynamodb, with serverless"
            link="https://www.google.com"
            stars={1}
          />
        </div>

        <Link href="/blog">
          <a className="flex mt-8 text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6 items-center">
            See All Projects
            <ArrowRight size={16} className="ml-2"/>
          </a>
        </Link>
        <h3 className="font-bold text-lg md:text-xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Recent Articles
        </h3>
        <div className="w-full flex flex-col gap-4">
          <ArticleCard
            index="01"
            href="https://www.google.com"
            title="Hello World"
            length={10}
          />
          <ArticleCard
            index="02"
            href="https://www.google.com"
            title="Intro to Docker"
            length={10}
          />
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6 items-center">
            See All Articles
            <ArrowRight size={16} className="ml-2"/>
          </a>
        </Link>
      </div>
    </Layout>
  )
}
