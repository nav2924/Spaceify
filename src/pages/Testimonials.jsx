import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Navbar } from "../components/index";

const testimonialList = [
  {
    author: {
      fullName: "Akshay Kumar",
      picture: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
      designation: "Founder / CEO",
    },
    rating: 3.5,
    description:
      "This is a factor in the economy of a nation, and the administration takes the major choices. This is a factor of a nation.",
  },
  {
    author: {
      fullName: "Raima Sen",
      picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
      designation: "Business Head",
    },
    rating: 3.8,
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis qui.",
  },
  {
    author: {
      fullName: "Arjun Kapur",
      picture: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
      designation: "UI Design",
    },
    rating: 4.5,
    description:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    author: {
      fullName: "Neha Sharma",
      picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
      designation: "Marketing Manager",
    },
    rating: 4.7,
    description:
      "Using this service has greatly simplified our financial planning. Highly recommend it to everyone!",
  },
  {
    author: {
      fullName: "Rahul Desai",
      picture: "https://cdn.easyfrontend.com/pictures/users/user5.jpg",
      designation: "Product Owner",
    },
    rating: 4.0,
    description:
      "A fantastic experience from start to finish. Their customer support is exceptional!",
  },
  {
    author: {
      fullName: "Priya Verma",
      picture: "https://cdn.easyfrontend.com/pictures/users/user6.jpg",
      designation: "Financial Advisor",
    },
    rating: 5.0,
    description:
      "I have seen a significant improvement in my savings and investments. Their tools are easy to use and effective.",
  },
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={classNames("mb-6", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = (
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          );
        else if (rating > i && rating < index + 1)
          content = (
            <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
          );
        else if (index > rating)
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-200 dark:text-opacity-20"
            />
          );

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
  <div className=" bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#F7CC1E_100%)] shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6">
    <div className="mt-4">
      <Rating rating={testimonial.rating} showLabel={false} />
      <p className="opacity-50 mb-6">{testimonial.description}</p>
      <div className="flex items-center">
        <div className="mr-2">
          <img
            src={testimonial.author.picture}
            alt={testimonial.author.fullName}
            className="max-w-full h-auto rounded-full border"
            width="47"
          />
        </div>
        <div>
          <h4 className="text-xl font-medium">{testimonial.author.fullName}</h4>
          <p className="text-sm">
            <i>{testimonial.author.designation}</i>
          </p>
        </div>
      </div>
    </div>
  </div>
);

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const Testimonial1 = () => {
  return (
    <div>
      <Navbar />
      <section className="ezy__testimonial1 light py-14 md:py-24 bg-amber-50 dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center md:mb-6">
            <div className="sm:max-w-lg text-center">
              <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
                What Our Customers Are Saying
              </h2>
              <p>
                Join countless satisfied customers who have transformed their
                savings journey with our trusted financial solutions. Discover
                how our services can help you achieve your financial goals!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-6 gap-6 pt-8">
            {testimonialList.map((testimonial, i) => (
              <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
                <TestimonialItem testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial1;
