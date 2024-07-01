import ContentCreatorCard from '../components/ContentCreatorCard';
import { useRef, forwardRef, useImperativeHandle } from 'react';

function ShowCreators({ contentCreators, isLoading, handleCurrentCreator, handleEditCreator, refToScroll }) {
  if (!isLoading && (!contentCreators || contentCreators.length === 0)) {
    return (
      <div className="grid" ref={refToScroll}>
        <div className='ShowCreators'>
          No creator to display here!
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid" ref={refToScroll}>
        <div className='ShowCreators'>
          <div className="creators-cards">
            {contentCreators && contentCreators.map((creator) => (
              <ContentCreatorCard
                key={creator.id}
                contentCreator={creator}
                handleCurrentCreator={() => handleCurrentCreator(creator)}
                handleEditCreator={() => handleEditCreator(creator)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCreators;
