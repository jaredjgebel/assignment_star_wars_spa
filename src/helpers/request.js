const headers = new Headers()
headers.append("Content-Type", "application/json")

const getRequest = (resource, id, query) => {
	const baseUrl = `https://swapi.co/api`
	const rId = id ? `/${id}` : ''
	const rQuery = query ? `/?${query}` : ''

	// error handling in component with call
	return new Promise((resolve) => {
		fetch(`${baseUrl}/${resource}${rId}${rQuery}`)
			.then(response => {
				if (!response.ok) {
					return {
						status: response.status,
						error: response.statusText
					}
				}
				resolve(response.json())
			})
	})
}

export default getRequest