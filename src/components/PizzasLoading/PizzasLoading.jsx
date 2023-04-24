import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzasLoading = (props) => (
  <ContentLoader
    speed={3}
    width={280}
    height={477}
    viewBox="0 0 280 477"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="140" r="140" />
    <rect x="0" y="295" rx="6" ry="6" width="280" height="20" />
    <rect x="0" y="330" rx="6" ry="6" width="280" height="83" />
    <rect x="155" y="430" rx="20" ry="20" width="122" height="40" />
    <rect x="0" y="436" rx="7" ry="7" width="100" height="27" />
  </ContentLoader>
);

export default PizzasLoading;
