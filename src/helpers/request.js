const headers = new Headers()
headers.append("Content-Type", "application/json")

const getRequest = (resource, id, query) => {
	const rId = id ? `/${id}` : ''
	const rQuery = query ? `/?${query}` : ''

	console.log(`https://swapi.co/api/${resource}${rId}${rQuery}`)

	return new Promise((resolve) => {
		fetch(`https://swapi.co/api/${resource}${rId}${rQuery}`)
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