```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. It's missing a cleanup function to prevent memory leaks.
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Missing return statement to clear the interval
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```