import React from 'react';
import { H1, Input, Textarea } from '../components/base/index';

const ContactPage = () => {
    return (
        <div className="container pt-4 md:pt-12 text-center">
            <H1>Contact Me</H1>
            <p className="text-base md:text-lg">
                Want to collaborate, ask something or suggest an idea for a future blogpost?{' '}
                <br className="hidden md:block" />{' '}
                <span className="font-bold">Send me a message!</span>
            </p>
            <form className="my-6 space-y-4 md:px-20">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
                    <Input name="firstname" id="firstname" label="First name" required />
                    <Input name="lastname" id="lastname" label="Last name" required />
                </div>
                <div>
                    <Input name="email" id="email" type="email" label="Email" required />
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
        </div>
    );
};

export default ContactPage;
