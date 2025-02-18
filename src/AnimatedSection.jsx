import { motion } from 'framer-motion';
import PropTypes from "prop-types";

const AnimatedSection = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

AnimatedSection.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AnimatedSection;
