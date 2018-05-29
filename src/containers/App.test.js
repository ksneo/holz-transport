import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has h1 className App-title', () => {
  const component = ReactTestUtils.renderIntoDocument(
    <App />
  );
  const title = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'App-title');
  expect(title).toBeInstanceOf(HTMLHeadingElement);
});
