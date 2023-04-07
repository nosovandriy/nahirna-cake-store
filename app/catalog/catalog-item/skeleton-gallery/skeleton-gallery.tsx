import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const SkeletonGallery = (props: any) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 632 640"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: '100%' }}
    uniqueKey="skeleton"

    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="632" height="465" />
    <rect x="1" y="500" rx="0" ry="0" width="184" height="135" />
    <rect x="224" y="500" rx="0" ry="0" width="184" height="135" />
    <rect x="448" y="500" rx="0" ry="0" width="184" height="135" />
  </ContentLoader>
);

export default SkeletonGallery;
