import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Login />,
		},
		{
			path: '/browse',
			element: <Browse />,
		},
	]);

	return (
		<div className="m-0 p-0">
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
