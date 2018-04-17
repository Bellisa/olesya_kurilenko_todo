import PropTypes from 'prop-types';

const path = require('path');

export const ComGallary = ({ imagesUrl }) => (
  <div className="clearfix">
    {
      imagesUrl.map((el, index) => (
        <img key={index} src={`${path.resolve('images/asset')}${el}`} alt="" className="rounded float-left imgGallary" />
      ))}
  </div>
);

ComGallary.prototype = {
  imagesUrl: PropTypes.array
};
ComGallary.defaultProps = {
  imagesUrl: []
};
