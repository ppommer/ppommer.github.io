function Music() {
  return (
    <div className="px-4 md:px-14 lg:px-28 overflow-hidden">
      <div className="lg:w-[70%] mb-10">
        <h1 className="text-5xl font-bold mb-8 text-zinc-800 dark:text-zinc-100">
          Pommerotti
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          A collection of mixtapes and livesets. Enjoy!
        </p>
      </div>
      <div className="space-y-16 mb-16">
        <div>
          <iframe
            width="100%"
            height="400"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A1668063167%3Fsecret_token%3Ds-zqYfeT4OflK&color=%235bdefa"
            title="Pommerotti"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Music;
