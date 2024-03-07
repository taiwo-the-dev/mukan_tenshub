"use client";
import { motion } from "framer-motion";

const Layout = ({ children , variant }: { children: React.ReactNode  , variant : any}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={
      variant
    }
  >
    {children}
  </motion.div>
);
export default Layout;