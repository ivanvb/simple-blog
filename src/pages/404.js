import React from 'react';
import NotFound from '../components/icons/NotFound';
import Seo from '../components/Seo';

const NotFoundPage = () => {
    return (
        <>
            <Seo title="404" />
            <div className="container flex justify-center items-center flex-1">
                <div className="flex items-center flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
                    <NotFound className="h-48 md:h-64" />!
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold mb-1 md:mb-4">
                            Oh No! Error 404
                        </h1>
                        <p className="text-lg">Sorry, there is nothing at this URL.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
