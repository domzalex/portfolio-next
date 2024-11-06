const Page = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <div className="flex items-center gap-6 mb-8">
                    <h1 className="font-bold text-4xl">Flashcard Mobile Application</h1>
                </div>
                <p className="text-neutral-700 pb-6">
                    <b>TL;DR<br /></b>A flashcard application for mobile devices built with <b>Expo</b> and <b>SQLite</b>.
                    <br /><br />
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                    <br />
                    This project spawned from a desire to have my own mobile flashcard application, similar to <b>Anki</b>.
                    <br /><br />
                    Anki is an excellent flashcard tool and is very higly regarded. They have a mobile application, though I&#39;ve not used it since it is a <b>paid product</b>.
                    <br /><br />
                    The problem I&#39;m solving with my own flashcard app largely revolves around the <b>UX side of things</b>. One of my main complaints about Anki was its UX/UI design.
                    <br /><br />
                    Core features of my flashcard application are:
                    <br />
                </p>
                <ul className="list-disc list-inside text-neutral-700">
                    <li>Customizable cards</li>
                    <li>Robust card organization</li>
                    <li>Customizable UI colors/images</li>
                    <li>Online database of user-made card decks</li>
                </ul>
                <p>
                    <br />
                    This app is still being <b>actively worked on</b>, and is not a public-facing product at the current time.
                </p>
            </div>
        </div>
    )
}

export default Page