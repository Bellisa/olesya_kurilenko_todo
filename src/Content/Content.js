import './content.scss';
import { ComUserList } from '../Components/ComUserList';
import { ComPostList } from '../Components/ComPostList';

export class Content extends Component {
  state = {
    posts: [],
    users: []
  };
  constructor() {
    super();
    this.getUsers();
    // this.onUserClick = this.onUserClick.bind(this);
  }

  onUserClick = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(data => data.json())
      .then(postsData => this.setState({
        posts: postsData
      }));
  }

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({
        users: users.sort((prev, next) => prev.name > next.name)
      }));
  }

  render() {
    return (
      <div className="my-3 p-3 col-md-9 bg-white rounded box-shadow min-height">
        <div className="row" >
          <div className="col-md-4">
            <ComUserList users={this.state.users} field="name" click={this.onUserClick} />
          </div>
          <div className="col-md-8">
            {
              this.state.posts.length > 0 && <ComPostList posts={this.state.posts} />
            }
          </div>
        </div>
      </div>
    );
  }
}

