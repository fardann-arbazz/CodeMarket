const CodePreview = () => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="px-4 py-2 bg-gray-700 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm text-gray-400">example.js</div>
      </div>
      <pre className="p-4 text-gray-200 overflow-x-auto">
        <code className="font-mono text-sm">
          {`import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Components
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

// Styles
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

/**
 * Custom hook for fetching data
 */
function useFetch(url, options) {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { response, error, loading };
}`}
        </code>
      </pre>
    </div>
  );
};

export default CodePreview;
