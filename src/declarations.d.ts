// Image modules
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.gif" {
  const src: string;
  export default src;
}

// Libraries without type declarations
declare module "react-reveal/Fade";
declare module "react-reveal/Slide";
declare module "react-slideshow-image";
