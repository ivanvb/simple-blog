import React from 'react';
import { H1, Input, Textarea } from '../components/base/index';
import { Link } from 'gatsby';
import Seo from '../components/Seo';
import { MdEmail } from 'react-icons/md';

const ContactPage = () => {
    const [isSubmitted, setSubmitted] = React.useState(false);
    async function handleSubmit(e) {
        e.preventDefault();

        const elementsArray = [...e.target.elements];
        const formData = elementsArray.reduce((acc, elem) => {
            if (elem.name) {
                acc[elem.name] = elem.value;
            }

            return acc;
        }, {});

        console.log(formData);
        setSubmitted(true);
    }
    return (
        <>
            <Seo title="Contact" />
            <div className="container pt-6 md:pt-12 text-center">
                {isSubmitted ? (
                    <>
                        <H1>Thanks for submitting!</H1>
                        <p className="text-base md:text-lg">
                            I will be getting in touch with you soon, but in the meantime you can
                            <br className="hidden md:block" /> read some of my{' '}
                            <Link to="/blog/all" className="underline">
                                recent blog posts
                            </Link>
                        </p>
                        <div className="bg-primary-text p-12 rounded-full text-primary-bg inline-block mt-0 md:mt-16 transform scale-75 md:scale-100">
                            <MdEmail size={144} className="text-current" />
                        </div>
                    </>
                ) : (
                    <>
                        <H1>Contact Me</H1>
                        <p className="text-base md:text-lg">
                            Want to collaborate, ask something or suggest an idea for a future
                            blogpost? <br className="hidden md:block" />{' '}
                            <span className="font-bold">Send me a message!</span>
                        </p>
                        <form className="my-6 space-y-4 md:px-20" onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
                                <Input
                                    name="firstname"
                                    id="firstname"
                                    label="First name"
                                    required
                                />
                                <Input name="lastname" id="lastname" label="Last name" required />
                            </div>
                            <div>
                                <Input
                                    name="email"
                                    id="email"
                                    type="email"
                                    label="Email"
                                    required
                                />
                            </div>
                            <div>
                                <Textarea name="message" id="message" label="Message" required />
                            </div>
                            <div className="flex justify-start">
                                <button className="w-full md:w-auto px-12 py-2 bg-primary-text text-primary-bg rounded-sm">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </>
    );
};

export default ContactPage;
