import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './style.css';

export const API_BASE_URL = 'https://apps.kodim.cz/daweb/leviexpress/api';

createRoot(document.querySelector('#app')).render(<App />, );
