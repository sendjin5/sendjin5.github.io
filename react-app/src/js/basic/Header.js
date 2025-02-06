import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, SkipForward } from "lucide-react";

const playList = [
  {
    title: "Promise Beneath the Starlight",
    src: "/Promise_Starlight.mp3",
  },
];

const Header = ({ setSelectedRoute }) => {
  // 배경음악 on/off
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(playList[currentSong].src);
    audioRef.current.onended = () => nextSong();

    if (isPlaying) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [currentSong]);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    let nextIndex = (currentSong + 1) % playList.length;
    setCurrentSong(nextIndex);
    setIsPlaying(true);
  };

  return (
    <div className="headerMenu">
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <nav>
          <div className="radio-container">
            <input
              defaultChecked
              id="radio-premium"
              name="radio"
              type="radio"
              value="/"
              onChange={(e) => setSelectedRoute(e.target.value)}
            />
            <label for="radio-premium">Home</label>
            <input
              id="radio-free"
              name="radio"
              type="radio"
              value="/Portfolio"
              onChange={(e) => setSelectedRoute(e.target.value)}
            />
            <label for="radio-free">Portfolio</label>
            <input
              id="radio-basic"
              name="radio"
              type="radio"
              value="/Animation"
              onChange={(e) => setSelectedRoute(e.target.value)}
            />
            <label for="radio-basic">Animation</label>
            <div className="glider-container">
              <div className="glider"></div>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <div className="fixed bottom-4 left-4 flex flex-col items-center">
          {/* 제목 */}
          {/* <p className="text-white mb-2">{playList[currentSong].title}</p> */}
          <div className="flex gap-2">
            <button
              onClick={toggleMusic}
              className="bg-gray-800 text-white p-2 rounded-full shadow-lg flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition"
            >
              {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
            <button
              onClick={nextSong}
              className="bg-gray-800 text-white p-2 rounded-full shadow-lg flex items-center justify-center w-12 h-12 hover:bg-gray-700 transition"
            >
              <SkipForward size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
