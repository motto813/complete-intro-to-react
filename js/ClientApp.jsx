import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  // return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title.toUpperCase()}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  // return ce(
  //   'div',
  //   { id: 'my-first-component' },
  //   ce(MyTitle, { title: 'Game of thrones', color: 'YellowGreen' }),
  //   ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
  //   ce(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
  //   ce(MyTitle, { title: 'Friends', color: 'peru' })
  // );
  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="YellowGreen" />
      <MyTitle title="Stranger Things" color="GreenYellow" />
      <MyTitle title="House of Cards" color="Peru" />
      <MyTitle title="Friends" color="burlywood" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
