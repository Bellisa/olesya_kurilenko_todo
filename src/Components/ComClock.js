export class ComClock extends Component {
  getCurrTimeObj = () => {
    const dt = new Date();
    return {
      MM: dt.getMonth(),
      DD: dt.getDate(),
      YYYY: dt.getFullYear(),
      hh: dt.getHours(),
      mm: dt.getMinutes(),
      ss: dt.getSeconds()
    };
  }

  constructor(props) {
    super(props);
    this.state = this.getCurrTimeObj();
    this.timer = setInterval(() => this.setState(this.getCurrTimeObj()), 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  formatDateStr = str => ((str.toString().length === 1) ? `0${str}` : `${str}`);

  render() {
    return (
      <div>
        <span>{this.formatDateStr(this.state.DD)}</span>/
        <span>{this.formatDateStr(this.state.MM)}</span>/
        <span>{this.state.YYYY.toString()}</span><br />
        <span>{this.formatDateStr(this.state.hh)}</span>-
        <span>{this.formatDateStr(this.state.mm)}</span>-
        <span>{this.formatDateStr(this.state.ss)}</span><br />
      </div >
    );
  }
}
