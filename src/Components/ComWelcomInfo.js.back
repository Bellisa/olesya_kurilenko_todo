export const ComWelcomInfo = ({ time = new Date().getHours(), name }) => {
  if (time >= 22 || time < 3) return (<span>Good night{name && `, ${name}`}!</span>);
  if (time > 3 || time < 12) return (<span>Good morning{name && `, ${name}`}!</span>);
  if (time >= 12 || time < 18) return (<span>Good afternoon{name && `, ${name}`}!</span>);
  if (time >= 18 || time < 22) return (<span>Good evening{name && `, ${name}`}!</span>);
  return null;
};
