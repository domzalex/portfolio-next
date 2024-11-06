const Page = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <div className="flex items-center gap-6 mb-8">
                    <a href="https://omnitool.io" target="_blank" rel="noopener noreferrer" className="underline text-neutral-700 hover:text-blue-500"><h1 className="font-bold text-4xl">Omnitool.io</h1></a>
                </div>
                <p className="text-neutral-700 pb-6">
                    <b>TL;DR<br /></b>A quiz creation web application made stubbornly <b>without JavaScript</b>.
                    <br /><br />
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                    <br />
                    I need to make a clarification about the TL;DR. This website <i>does</i> use JavaScript, but <b>only</b> by way of importing <b>HTMX</b>. Aside from HTMX handling HTTP data swapping, all of the logic happens on the server.
                    <br /><br />
                    Making a basic multiple-choice quiz creator is a walk in the park with client-side JavaScript, but when you are forced to do everything on the server, <b>things get a bit tricky</b>.
                    <br /><br />
                    For the server, I used <b>Go</b>, since it has a niche audience with HTMX-enjoyers. If you wanted to make a quiz application in JavaScript, you&#39;d simply create your quiz form and maybe an HTML template or two, and then simply keep track of the values of the selected HTML elements within your client-side JavaScript code.
                    <br /><br />
                    But what about when you can&#39;t simply manipulate your DOM with JavaScript? If someone adds a lot of questions in a row, and then goes back to add answers to each question <b>out of order</b>, how does the server know which question an answer belongs to?
                    <br /><br />
                    Those were the sorts of issues I ran into with this project. It still needs work, but it&#39;s been a fun challenge to tackle. Feel free to check it out.
                    <br /><br />
                    I am well aware that this sort of thing is trivial in the grand scheme of things, but it provided a challenge for someone who almost exclusively uses JavaScript. Figuring out more elegant and ideal solutions is all part of the fun!
                    <br /><br />
                    All quizzes created are <b>URL-encloded</b> and not stored anywhere, so don&#39;t lose your URL!
                </p>
            </div>
        </div>
    )
}

export default Page