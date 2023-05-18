import {Component} from 'react'
import {v4} from 'uuid'

import Slide from '../Slide'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
    slideNumber: 1,
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
    slideNumber: 2,
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
    slideNumber: 3,
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
    slideNumber: 4,
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
    slideNumber: 5,
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
    slideNumber: 6,
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
    slideNumber: 7,
  },
]

class Slides extends Component {
  state = {
    slidesList: initialSlidesList,
    activeSlide: initialSlidesList[0].id,
    activeList: initialSlidesList[0],
    head: false,
    description: false,
  }

  addNewItem = () => {
    const {slidesList} = this.state
    const len = slidesList.length + 1
    const newSlide = {
      id: v4(),
      heading: 'Heading',
      description: 'Description',
      slideNumber: len,
    }
    this.setState(prevState => ({
      slidesList: [...prevState.slidesList, newSlide],
    }))
  }

  changeHead = () => {
    this.setState({head: true})
  }

  changePara = () => {
    this.setState({description: true})
  }

  changeHeading = e => {}

  render() {
    const {activeSlide, slidesList, activeList, head, description} = this.state
    console.log(activeList.heading)
    return (
      <div className="container">
        <button onClick={this.addNewItem} className="addButton">
          <img
            className="plus"
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
          />
          New
        </button>
        <div className="cards">
          <ol>
            {slidesList.map(each => (
              <Slide
                activeSlide={activeSlide}
                key={each.id}
                slide={each}
                slidesList={slidesList}
              />
            ))}
          </ol>
        </div>
        <div className="activeCard">
          {head ? (
            <input value={activeList.heading} onChange={this.changeHeading} />
          ) : (
            <h1 onClick={this.changeHead}>{activeList.heading}</h1>
          )}
          {description ? (
            <input value={activeList.description} onChange={this.changePara} />
          ) : (
            <p onClick={this.changePara}>{activeList.description}</p>
          )}
        </div>
      </div>
    )
  }
}

export default Slides
