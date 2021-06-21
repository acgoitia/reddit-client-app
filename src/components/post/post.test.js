import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import App from '../../App';
import { isAsyncThunkAction } from '@reduxjs/toolkit';
import { redditJson, jsonToTitle } from '../../utils';
import Post from './Post';


describe('video post component', () => {

    afterEach(cleanup);

    it('renders title', () => {
        
        const testURL = 'https://www.reddit.com/r/nextfuckinglevel/comments/o2zx46/you_think_you_could_do_this.json';
        //const post = redditJson(testURL);
        //const title = jsonToTitle(redditJson(testURL));

        render(
            <Provider store={store}>
                <Post />
            </Provider>
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
