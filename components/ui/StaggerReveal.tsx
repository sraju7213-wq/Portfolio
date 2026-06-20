import { motion, type Variants } from "framer-motion";
import { viewportOnce, staggerContainer, fadeUp } from "./animations";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
  childVariants?: Variants;
  containerVariants?: Variants;
  delay?: number;
  as?: "div" | "ul" | "ol";
};

export default function StaggerReveal({
  children,
  className,
  childVariants = fadeUp,
  containerVariants = staggerContainer,
  as: Tag = "div",
}: StaggerRevealProps) {
  return (
    <Tag className={className}>
      {Array.isArray(children) ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {children.map((child, i) => (
            <motion.div key={i} variants={childVariants}>
              {child}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={childVariants}>{children}</motion.div>
        </motion.div>
      )}
    </Tag>
  );
}
