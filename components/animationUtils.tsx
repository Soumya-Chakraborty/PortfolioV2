import { motion, useAnimation, useMotionValue, useTransform, useScroll, Variants } from 'framer-motion';
import { useSpring, animated, SpringValue } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

// Framer Motion Variants
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

// React Spring Animations
export const useFadeIn = (): { opacity: SpringValue<number>; transform: SpringValue<string> } => {
  return useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 20 },
  });
};

export const useScaleIn = (): { scale: SpringValue<number>; opacity: SpringValue<number> } => {
  return useSpring({
    from: { scale: 0.8, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    config: { tension: 200, friction: 20 },
  });
};

// Scroll-based Animations
export const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Parallax Effect
export const useParallax = (offset = 50) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);
  return y;
};

// Animation Components
interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
}

export const FadeIn: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
  const style = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay,
    config: { tension: 200, friction: 20 },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

export const ScaleIn: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
  const style = useSpring({
    from: { scale: 0.8, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    delay,
    config: { tension: 200, friction: 20 },
  });

  return <animated.div style={style}>{children}</animated.div>;
};

interface ContainerProps {
  children: React.ReactNode;
}

export const StaggerContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<ContainerProps> = ({ children }) => {
  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  );
}; 