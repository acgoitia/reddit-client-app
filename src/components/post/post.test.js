import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { isAsyncThunkAction } from '@reduxjs/toolkit';
import { redditJson } from '../../utils';


describe('video post component', () => {

    afterEach(cleanup);

    it('renders title', () => {
        
        const testURL = 'https://www.reddit.com/r/nextfuckinglevel/comments/o2zx46/you_think_you_could_do_this.json';
        const post = redditJson(testURL);
        
        render(
            <Post post={post}/>
        );
        
          expect(screen.getByText('You think you could do this?')).toBeVisible();


    });

    it('plays video', () => {


    });

    it('displays right number of comments', () => {


    });

    it('displays total score', () => {


    });

    it('displays subreddit title', () => {


    });

});

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
