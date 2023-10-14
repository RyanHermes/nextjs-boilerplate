import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 min-h-screen">
      <div className="max-w-5xl w-full text-center font-mono text-lg mb-10">
        <p className="mb-6">
          Hello! I&apos;m Ryan Hermes, a software engineer passionate about building meaningful and impactful technology.
        </p>
        <p>
          Explore my projects and get in touch if you want to collaborate!
        </p>
      </div>

      <div className="relative flex place-items-center mb-10">
        <Image
          className="rounded-full"
          src="/ryan.jpg"  // Placeholder for an actual image of Ryan
          alt="Ryan Hermes"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-left">
        <a
          href="https://github.com/ryanhermes"  // Placeholder GitHub link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Projects
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Discover my software projects and collaborations.
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/abboudy-ryan-hermes-06a7b51b5/"  // Placeholder LinkedIn link
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            LinkedIn
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Connect with me and explore my professional journey.
          </p>
        </a>

        <a
          href="mailto:ryanhermes@example.com"  // Placeholder email
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contact
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Get in touch for collaboration or any inquiries.
          </p>
        </a>
      </div>
    </main>
  )
}
