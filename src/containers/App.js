import './App.css'
import React, { useEffect, useState } from "react";
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import ErrorBoundary from '../components/ErrorBoundary'

const App = () => {
    const [searchValue, setSearchValue] = useState('')
    const [robots, setRobots] = useState([])
    useEffect(() => {
        getRobotsApiData();
    }, []);

    const getRobotsApiData = async () => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()
        ).then(users => setRobots(users))
    }

    const filteredRobots = robots?.filter((robot) => robot.name.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <div className="tc">
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            {!filteredRobots.length ? <h1>Loading</h1> : <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>}
        </div>
    )

}

export default App 