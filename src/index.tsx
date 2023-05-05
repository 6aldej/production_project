import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'shared/configs/i18n/i18n';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
  <StoreProvider>
    <Router>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </Router>
  </StoreProvider>,
  document.getElementById('root'),
);
