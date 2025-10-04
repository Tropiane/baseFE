import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ScrollView = ({ children } : { children: React.ReactNode }) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <motion.div
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0px)" : "translateY(100px)",
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1.0)"
            }}
            ref={ref}
        >
            {children}
        </motion.div>
    );
};

export default ScrollView;