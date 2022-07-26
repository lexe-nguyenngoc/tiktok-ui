import { useRoutes } from 'react-router-dom';

import routes from '~/routes';

function App() {
    return <div className="app">{useRoutes(routes)}</div>;
}

export default App;
