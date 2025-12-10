function Music() {
  return (
    <div className="px-4 md:px-8 lg:px-28 overflow-hidden">
      <div className="lg:w-[70%] mb-20">
        <h1 className="text-5xl font-bold mb-8">
          DJing
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          A collection of mixtapes and livesets. Enjoy!
        </p>
      </div>
      <div className="space-y-16 mb-16">
        <div>
          <iframe
            width="100%"
            height="300"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A1668063167%3Fsecret_token%3Ds-zqYfeT4OflK&color=%235bdefa&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            title="SoundCloud Playlist"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/pommerotti"
              title="Pommerotti"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Pommerotti
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/pommerotti/sets/favorites/s-zqYfeT4OflK"
              title="Favorites"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Favorites
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
