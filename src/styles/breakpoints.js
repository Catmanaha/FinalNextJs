export const breakpoints = {
    mobile: "375px",
    tablet: "1024px",
    desktop: "1440px",
};

export const devices = {
    mobile: `@media (max-width: ${breakpoints.mobile})`,
    tablet: `@media (max-width: ${breakpoints.tablet})`,
    desktop: `@media (max-width: ${breakpoints.desktop})`,
};
