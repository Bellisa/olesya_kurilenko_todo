import { Tabs, Tab } from '../Tabs/';
import { ComUserList } from '../Components/ComUserList';
import { ComGallary } from '../Components/ComGallary';
import './usersInfo.scss';

export class UsersInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      imagesUrl: []
    };
  }

  // getImagesUrl = path => new Promise((resolve) => {
  // const massurl = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
  // fs.readdir(path, (err, items) => {
  // console.log(massurl.map(img => `${path}/${img}`));
  // const collecttions = items.filter(img => this.regFiles.test(img));
  //  resolve(massurl.map(img => `${path}/${img}`));
  // });

  getImagesUrl = (path) => {
    const massurl = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
    return (massurl.map(img => `${path}/${img}`));
  }

  getUsers = url => new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(
        result => resolve(result.map(el => ({ id: el.id, name: el.name, email: el.email })))
        ,
        (error) => {
          reject(error);
        }
      );
  });

  componentDidMount() {
    this.getUsers('https://jsonplaceholder.typicode.com/users')
      .then(text => this.setState({ users: text }))
      .catch(console.log);

    this.getImagesUrl('')
      .then(text => this.setState({ imagesUrl: text }))
      .catch(console.log);
  }

  render() {
    return (
      <Tabs>
        <Tab
          key={0}
          title="Users List"
        >
          <h1>Users List</h1>
          <ComUserList users={this.state.users} />
        </Tab>
        <Tab
          key={1}
          title="Gallery"
        ><h1>Gallery</h1>
          <ComGallary imagesUrl={this.state.imagesUrl} />

        </Tab>
      </Tabs >
    );
  }
}

