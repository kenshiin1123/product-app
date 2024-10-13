import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="scroll-smooth">
      <main className="max-sm:px-none py-10 sm:px-10">
        <header className="mx-auto space-y-7 max-sm:px-5 md:px-20">
          <h1 className="text-center text-4xl">About Page</h1>
          <p className="mx-auto rounded bg-white p-4 text-justify text-xl shadow-sm shadow-gray-500 outline-1 outline-gray-600 max-sm:text-center md:w-[90%] dark:bg-black dark:shadow-none dark:outline">
            Welcome to my full-featured project, Product Management, a web application created with the MERN Stack:
            MongoDB, Express.js, React, and Node.js. This web application highlights my ability to develop a modern,
            responsive, and scalable app that efficiently manages CRUD operations: Create, Read, Update, and Delete.
          </p>
        </header>
        <center className="mx-auto mt-10 space-y-7 max-sm:px-5 md:px-20">
          <h1 className="text-center text-4xl">Tech Stack</h1>
          {/* Tech stack image */}
          <div className="select-none grid-cols-2 flex-wrap gap-5 max-md:grid max-sm:flex md:grid md:w-[60%] [&>section>img]:w-[50%] [&>section]:mx-auto [&>section]:flex [&>section]:aspect-[21/9] [&>section]:w-[90%] [&>section]:items-center [&>section]:justify-center [&>section]:rounded-lg [&>section]:bg-white [&>section]:shadow-sm [&>section]:shadow-gray-400 max-sm:[&>section]:h-20">
            <section>
              <img
                draggable="false"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyRmieFYEx56pJ4SVB4N1QWY0-NNBNs1WKw&s"
                alt="Mongodb Logo"
              />
            </section>
            <section>
              <img draggable="false" src="https://cdn.buttercms.com/4XpulFfySpWyYTXuaVL2" alt="Express Logo" />
            </section>
            <section>
              <img
                draggable="false"
                src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
                alt="React Logo"
              />
            </section>
            <section>
              <img
                draggable="false"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png"
                alt="Nodejs Logo"
              />
            </section>
          </div>
          {/* Tech Stack Descriptions */}
          <ul className="flex flex-col gap-5 text-justify text-xl max-sm:[&>li>p]:text-center [&>li]:mx-auto [&>li]:rounded [&>li]:bg-white [&>li]:p-3 [&>li]:shadow-sm [&>li]:shadow-gray-500 [&>li]:outline-1 [&>li]:outline-gray-600 [&>li]:md:w-[90%] [&>li]:dark:bg-black [&>li]:dark:shadow-none [&>li]:dark:outline">
            <li>
              <p>
                <b>Frontend:</b> Built using React, leveraging advanced React Hooks and Context API for efficient state
                management. The UI is responsive, designed with CSS frameworks like TailwindCSS for a smooth experience
                across devices.
              </p>
            </li>
            <li>
              <p>
                <b>Backend:</b> Powered by Node.js and Express.js, I’ve designed RESTful APIs to manage all product
                operations, ensuring security and performance.
              </p>
            </li>
            <li>
              <p>
                <b>Database:</b> MongoDB is used for product data management, offering flexibility as a NoSQL database
                for handling dynamic application data.
              </p>
            </li>
          </ul>
        </center>
        <footer className="mx-auto mt-10 w-fit transition-transform duration-100 hover:scale-105">
          <Link
            to="/products"
            className="rounded border-gray-600 p-3 text-xl shadow-sm shadow-gray-600 transition-shadow hover:shadow-md dark:border dark:shadow-none">
            See Products Page
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
