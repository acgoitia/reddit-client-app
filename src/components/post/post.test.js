import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Post from './Post';


describe('video post component', () => {

    afterEach(cleanup);
    beforeEach(() => (render(
        <Provider store={store}>
            <Post />
        </Provider>)
    ));

    it('renders title', () => {
        
        const testURL = 'https://www.reddit.com/r/nextfuckinglevel/comments/o2zx46/you_think_you_could_do_this.json';
        const testPost = {}
        
          expect(screen.getByText('You think you could do this?')).toBeVisible();


    });

    it('plays video', () => {


    });

    it('displays right number of comments', () => {


    });

    it('displays total score', () => {


    });

    it('displays subreddit title', () => {
        
          expect(screen.getByText('r/nextfuckinglevel')).toBeVisible();

    });

});
