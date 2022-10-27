import React from 'react';

const Faq = () => {
    return (
        <div className="bg-gray-200 text-black">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl mb-4">Cheack Out Some Common Questions</h2>
		<div className="space-y-4">
			<details className="w-full border border-black rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What job is given at the end of this course??</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-orange-800">No we do not guarantee to get any job or you have to get it on your own merit..We will help you learn and you will have to do the rest.. </p>
			</details>
			<details className="w-full border border-black rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How much time do I have to spend daily on this course??</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-orange-800">We say 6 to 7 hours then more if required.... </p>
			</details>
			<details className="w-full border border-black rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How long will we have access to this course??</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-orange-800">Access to the course will be lifetime but our support will be for 1 year. </p>
			</details>
		</div>
	</div>
</div>
    );
};

export default Faq;