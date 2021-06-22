import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import PostList from './PostList';


describe('post list', () => {

    afterEach(cleanup);
    
    it('cleans up state', () => {
        
        //const testURL = 'https://www.reddit.com/r/nextfuckinglevel/comments/o2zx46/you_think_you_could_do_this.json';
        //const testPost = {}
        
        //  expect(screen.getByText('You think you could do this?')).toBeVisible();


    });

    it('adds post', () => {


    });

    it('delete post', () => {


    });