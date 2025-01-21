# React setInterval Memory Leak

This repository demonstrates a common error in React components that use `setInterval` within the `useEffect` hook without proper cleanup.  This leads to memory leaks as the interval continues to run even after the component unmounts.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides the corrected version.

## How to reproduce the bug:
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the count increasing every second.
5. Navigate to a different page (unmounting the component).  The count will continue increasing in the background, indicating a memory leak.

## Solution:
The solution involves using the return function within `useEffect` to clear the interval using `clearInterval` when the component unmounts.