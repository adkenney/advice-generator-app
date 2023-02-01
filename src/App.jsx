import { useState, useEffect, useCallback } from 'react';
import Advice from './component/Advice';

function App() {
  const [advice, setAdvice] = useState([]);

  const fetchAdviceHandler = useCallback(async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    fetchAdviceHandler();
  }, [fetchAdviceHandler]);

  return (
    <>
      <main>
        <Advice advice={advice} fetchAdviceHandler={fetchAdviceHandler} />
      </main>
    </>
  );
}

export default App;
