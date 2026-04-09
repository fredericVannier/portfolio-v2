import { motion, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number; // millisecondes (même API que react-reveal)
  className?: string;
}

const directionVariants: Record<Direction, Variants> = {
  up:    { hidden: { opacity: 0, y: 30 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 30 },  visible: { opacity: 1, x: 0 } },
};

const fadeVariant: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const Reveal = ({ children, direction, delay = 0, className }: RevealProps) => {
  const variant = direction ? directionVariants[direction] : fadeVariant;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variant}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
