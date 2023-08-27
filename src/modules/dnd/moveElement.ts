export const moveElement = <T>(prevElements: T[], origin: number, destination: number) => {
	const updatedElements = [...prevElements]
	const dragElement = updatedElements[origin]

	if (!dragElement) return prevElements

	updatedElements.splice(origin, 1)
	updatedElements.splice(destination, 0, dragElement)

	return updatedElements.map((element, index) => ({ ...element, position: index + 1 }))
}
