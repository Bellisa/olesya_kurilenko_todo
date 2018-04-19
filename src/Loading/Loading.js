import './loading.scss';

export const Loading = ({ show }) => {
  if (show) {
    return (<div className="loader" />);
  }
  return (null);
};
