import { AnimatePresence, motion } from 'framer-motion'
const BlurBackground = ({ visible }) => {
  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ".2" }}
            className="overlay-blur"
          />
        )}
      </AnimatePresence>

      <style jsx>{`
        :global(.overlay-blur) {
          top: 0;
          left: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          position: fixed;
          -webkit-backdrop-filter: blur(3px);
          backdrop-filter: blur(3px);
          z-index: 2;
        }
      `}</style>
    </>
  )
}

export default BlurBackground
