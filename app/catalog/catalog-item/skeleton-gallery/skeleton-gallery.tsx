import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const SkeletonGallery = (props: React.FC<IContentLoaderProps>) => (
  <ContentLoader
    speed={2}
    width={632}
    height={640}
    viewBox="0 0 632 640"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="632" height="465" />
    <rect x="1" y="500" rx="0" ry="0" width="184" height="135" />
    <rect x="430" y="500" rx="0" ry="0" width="184" height="135" />
    <rect x="215" y="500" rx="0" ry="0" width="184" height="135" />
  </ContentLoader>
);

export default SkeletonGallery;
