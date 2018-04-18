import PropTypes from 'prop-types';

export const ComGallary = ({ imagesUrl }) => (
  <div className="clearfix">
    {
      imagesUrl.map((el, index) => (
        <img
          key={index}
          src={el}
          alt=""
          className="rounded float-left imgGallary"
        />
      ))}
  </div>
);

ComGallary.prototype = {
  imagesUrl: PropTypes.array
};
ComGallary.defaultProps = {
  imagesUrl: []
};
