import React, {useState, useEffect} from 'react';

function MainImage ({children, indexOfPicture, setIndexOfPicture, thumbnailClicked, setThumbnailClicked}) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(children.length)

  useEffect(() => {
    setLength(children.length)
  }, [children])

  if (thumbnailClicked) {
    if (index < indexOfPicture) {
      setIndex(prevState => prevState + 1)
    }
    if (index > indexOfPicture) {
      setIndex(prevState => prevState - 1)
    }
    setThumbnailClicked(false)
  }

  const previousImage = (event) => {
    event.preventDefault();
    if (index > 0) {
      setIndex(prevState => prevState - 1)
    }
  }

  const nextImage = (event) => {
    event.preventDefault();
    if (index < (length - 1)) {
      setIndex(prevState => prevState + 1)
    }
  }

  const expandImage = (event) => {
    event.preventDefault();
    console.log ('image is clicked!')
  }

  return (
    <div>
      <div>---------------Main Image--------------</div>
      <div className = 'carousel-container'>
        <div className = 'carousel-wrapper' >
          {(index > 0) && <button className = 'left-arrow' onClick = {previousImage}>&lt;</button>}
          <div className = 'carousel-content-wrapper'>
          {(index < (length - 1)) && <button className="right-arrow" onClick = {nextImage}>&gt;</button>}
            <div className = 'carousel-content' style={{ transform: `translateX(-${index * 100}%)`}}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainImage;