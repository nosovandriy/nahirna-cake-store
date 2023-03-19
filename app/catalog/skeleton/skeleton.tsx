import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCard = (props: any) => (
  <ContentLoader
    speed={2}
    width={408}
    height={389}
    viewBox="0 0 408 389"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="408" height="300" />
    <rect x="1" y="310" rx="20" ry="20" width="408" height="34" />
    <rect x="2" y="351" rx="20" ry="20" width="224" height="34" />
  </ContentLoader>
);

export default SkeletonCard;
