import React from "react";
import aboutimg from "../images/bg.jpg";
import Team from "./Team";
const About = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src={aboutimg}
              ></img>
              <div className="text-center relative z-10 w-full">
                <h2 className="text-2xl text-white font-medium title-font mb-2">
                  About us
                </h2>
                <p className="leading-relaxed">All u know about us</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-500 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              At Chaudary Law Associates, we take immense pride in our
              commitment to providing top-tier legal services in Pakistan. With
              a team of highly skilled and dedicated professionals, we have
              carved a niche for ourselves in the legal landscape of Pakistan,
              specializing in corporate consultancy, criminal law consulting,
              and civil services.
              <p className="abc"> Our Expertise</p>
              <br></br>
              <span className="abc1"> Corporate Consultancy:</span>
              In an ever-evolving business environment, navigating the complex
              web of corporate regulations and compliance requirements can be a
              daunting task. Our team of seasoned corporate consultants
              possesses a deep understanding of Pakistan's corporate laws,
              regulations, and business practices. Whether you are a start-up, a
              multinational corporation, or a local business, we provide
              tailored solutions to help you make informed decisions, manage
              risks, and optimize your business operations.
              <br></br>
              <span className="abc1"> Criminal Law Consultation:</span>
              Criminal Law Consultation: In matters of criminal law, there is no
              room for compromise. Our team of experienced criminal law
              consultants is well-versed in Pakistan's legal system and criminal
              procedures. We understand the gravity of criminal charges and are
              dedicated to safeguarding the rights and interests of our clients.
              From providing legal counsel to representing clients in court, we
              are steadfast in our pursuit of justice and fair outcomes.
              <br></br>
              <span className="abc1">Civil Services: </span>
              Civil Services: Navigating the labyrinthine bureaucracy of civil
              services in Pakistan demands a deep understanding of
              administrative procedures and regulations. Our team of civil
              service experts possesses extensive experience in handling matters
              related to public administration, government contracts, and
              administrative law. We work closely with government agencies,
              private organizations, and individuals to ensure that their
              interactions with civil services are smooth, efficient, and
              compliant with the law.
              <br></br>
              <span className="abc1">Our Approach </span>
              At Chaudary Law Associates, we believe that every legal issue is
              unique, and one size does not fit all. We approach each case with
              meticulous attention to detail, conducting thorough research and
              analysis to devise comprehensive strategies tailored to our
              clients' specific needs. We prioritize open and transparent
              communication, ensuring that our clients are informed and
              empowered throughout the legal process.
              <br></br>
              <span className="abc1">Our Commitment </span>
              We are committed to upholding the highest standards of
              professionalism, integrity, and ethics in our practice of law. Our
              reputation is built on trust, and we work diligently to maintain
              the trust our clients place in us. Whether you seek legal guidance
              for your business, require criminal defense, or need assistance
              with civil services matters, we are your steadfast partners in
              navigating the legal landscape of Pakistan.
              <p className="abc"> Why Choose Us</p>
              <b>Expertise:</b>
              Our team comprises some of the most knowledgeable and experienced
              legal professionals in Pakistan. Client-Centric: We put our
              clients' interests at the forefront of everything we do, ensuring
              their satisfaction and success. Results-Driven: We are driven by a
              passion for achieving positive outcomes for our clients, no matter
              how complex the legal challenges may be. Ethical Practice: We
              adhere to the highest ethical standards, maintaining the trust and
              confidence of our clients and the legal community. At Chaudary Law
              Associates, we are more than just lawyers; we are your legal
              partners, dedicated to securing your rights, interests, and
              success. Contact us today to discover how we can be of service to
              you in the dynamic legal landscape of Pakistan.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-white font-medium title-font tracking-wider text-sm">
              Chaudary Mehroz Advocate
            </h2>
            <p className="text-gray-500">Owner</p>
          </div>
        </div>
      </section>

      <Team></Team>
    </>
  );
};

export default About;
