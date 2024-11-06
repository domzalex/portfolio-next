const Page = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <div className="flex items-center gap-6 mb-8">
                    <h1 className="font-bold text-4xl">2D Role-Playing Game</h1>
                </div>
                <p className="text-neutral-700 pb-6">
                    <b>TL;DR</b><br />I&#39;m working on a 2D turn-based action RPG.
                    <br /><br />
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                    <br />
                    My very first JavaScript project ever was a turn-based <a href="https://domzalex.github.io/skeleton-gauntlet/" target="blank" rel="noopener noreferrer" className="text-blue-500 underline"><b><i>&#34;game battle thingy&#34;</i></b></a>
                    <br /><br />
                    The code is horrendous, the gameplay is repetitive and boring, but <i>I like it!</i>
                    <br /><br />
                    Fast-forward years later and I began creating a spiritual successor (in some vague, not really related way) to this pile of junk. The goal was to, again, use plain JavaScript <b>without any JavaScript libraries</b> or anything like that and see what sort of game I could make.
                    <br /><br />
                    Functionally quite similar to the <b>Pokémon games</b>, you control a character and walk around an environment, and when you walk through &#34;tall grass&#34; or whatever, you have a chance to encounter an enemy, beginning a <b>turn-based combat loop</b>.
                    <br /><br />
                    The graphics are far nicer, the gameplay is smoother and more fleshed out, and there are other factors added to the combat such as <b>physical/magic damage</b> and <b>elemental attack</b> &#34;types.&#34;
                    <br /><br />
                    To this point, there still is nothing to do aside from walk around and encounter enemies, but that fact that the code is much cleaner and the systems in place are more fleshed out and scalable, this is an excellent <b>starting point</b>. 
                </p>
            </div>
        </div>
    )
}

export default Page