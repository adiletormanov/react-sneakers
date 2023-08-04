import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <div className='card'>
    <ContentLoader
      speed={2}
      width={210}
      height={260}
      viewBox="0 0 210 260"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
			<rect x="6" y="4" rx="8" ry="8" width="28" height="28" />
      <rect x="6" y="36" rx="10" ry="10" width="150" height="95" />
      <rect x="6" y="143" rx="3" ry="3" width="150" height="15" />
      <rect x="6" y="162" rx="3" ry="3" width="93" height="15" />
      <rect x="6" y="199" rx="8" ry="8" width="80" height="34" />
      <rect x="124" y="199" rx="8" ry="8" width="32" height="32" />
    </ContentLoader>
  </div>
);

export default Skeleton;
