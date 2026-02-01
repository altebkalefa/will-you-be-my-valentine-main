"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Wrong Button Zahra",
      "What are you doing",
      "Hayati No",
      "Woah there, WE'RE Planning a WEDDING",
      "I met your dad :(",
      "I asked for your hand in marriage",
      "But :*(",
      "I very sad now",
      "favorito will be sad",
      "HI there, please reconsider",
      "please bb",
      "be my Fiona please",
      "PLEASE",
      "RIP Hawaii trip :(",
      "I hppe you liked this :)",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://64.media.tumblr.com/49787a94469aa76e4fec618766ad9bd4/a2bd115015265ae1-c5/s540x810/7ec94fe40810ba3819fa3d81762860b5a247635c.gif" />
          <div className="my-4 text-4xl font-bold">HAYATI I LOVE YOU, MY VALENTINE</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://tenor.com/view/shrek-shrek-meme-shrek-staring-shrek-smiling-gif-14430015749099037012.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
