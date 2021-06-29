import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  // // constructor () {
  //   super()
  //   this.setState = {
  //     robots: [],
  //     searchField: ''
  //   }
  // }

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []); //the array so the useEffect won't be rendering infinity

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  //using destructuring to avoid repeting this.state.. it would be this.state.robots| this.state.searchField

  if (!Array.isArray(robots) || !robots.length) return <h1>Loading</h1>;

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />;
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
