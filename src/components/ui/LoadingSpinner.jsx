import { motion } from 'framer-motion';

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <motion.div
        className="w-16 h-16 border-4 border-primary-200 rounded-full border-t-primary-600"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default LoadingSpinner;