const config = {
	app: {
		code: import.meta.env.VITE_APP,
		api: {
			auth: import.meta.env.VITE_AUTH_URI,
			uri: import.meta.env.VITE_API_URI,
		}
	}
}

export default config;
