import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [response, setResponse] = useState(null);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleNoHover = () => {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;
    setNoButtonStyle({ transform: `translate(${x}px, ${y}px)` });
  };

  const handleNoTouch = (e) => {
    e.preventDefault();
    handleNoHover();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 p-6">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="box"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="perspective-1000"
          >
            <motion.div
              whileHover={{ rotateX: 10, rotateY: -10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpened(true)}
              className="w-40 h-40 bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl shadow-2xl cursor-pointer flex items-center justify-center relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 rounded-2xl bg-black/10" style={{ transform: "translateZ(-20px)" }} />
              <Heart className="w-12 h-12 text-white" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mt-6 text-gray-600"
            >
              Click the box… 💝
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-8 flex-col md:flex-row">
              {/* Tulip Bouquet */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden md:flex flex-col items-center"
              >
                <div className="relative w-24 h-40">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-28 bg-green-500" />
                  <div className="absolute bottom-4 left-6 w-1 h-24 bg-green-500 rotate-[-10deg]" />
                  <div className="absolute bottom-6 right-6 w-1 h-24 bg-green-500 rotate-[10deg]" />

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-pink-400 rounded-full" />
                  <div className="absolute top-6 left-2 w-10 h-10 bg-red-400 rounded-full" />
                  <div className="absolute top-6 right-2 w-10 h-10 bg-pink-300 rounded-full" />
                </div>
                <p className="text-xs text-gray-500 mt-2">For you 🌷</p>
              </motion.div>

              {/* Valentine Card */}
              <div className="rounded-2xl shadow-lg max-w-md w-full text-center bg-white">
                <div className="p-8 space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex justify-center"
                  >
                    <Heart className="w-16 h-16 text-pink-500" />
                  </motion.div>

                  <h1 className="text-3xl font-bold">Will you be my Valentine? 💖</h1>

                  {!response && (
                    <p className="text-base text-gray-700">
                      I have something very important to ask you… 😌
                    </p>
                  )}

                  {response === "yes" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-lg font-semibold"
                    >
                      Yay!! You just made my day ❤️🥰
                    </motion.p>
                  )}

                  {response === "no" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-lg font-semibold"
                    >
                      Oh no… but I’ll keep trying 😆💘
                    </motion.p>
                  )}

                  {!response && (
                    <div className="flex gap-4 justify-center pt-4">
                      <button
                        className="rounded-2xl px-6 py-2 bg-pink-500 text-white hover:bg-pink-600"
                        onClick={() => setResponse("yes")}
                      >
                        Yes 😍
                      </button>

                      <button
                        className="rounded-2xl px-6 py-2 border border-pink-500 text-pink-500 hover:bg-pink-100"
                        style={noButtonStyle}
                        onMouseEnter={handleNoHover}
                        onTouchStart={handleNoTouch}
                        onClick={() => setResponse("no")}
                      >
                        No 🙈
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}