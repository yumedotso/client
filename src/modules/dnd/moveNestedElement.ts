/**
 * Moves a nested element within a list of steps. This function is used for reordering
 * elements within nested steps, where each step contains an array of items with positions.
 *
 * @template T - The type of the input steps.
 * @param {T[]} prevSteps - The previous list of steps.
 * @param {number} dragIndex - The index of the dragged element.
 * @param {number} hoverIndex - The index where the element is being dropped.
 * @param {number|undefined} originPosition - The original position of the dragged element (which step).
 * @param {number|undefined} dropPosition - The position where the element is being dropped (which step).
 * @returns {T[]} - A new array of steps with the element moved.
 */
export const moveNestedElement = <T extends { items: { position: number }[] }>(
	prevSteps: T[],
	dragIndex: number,
	hoverIndex: number,
	originPosition?: number,
	dropPosition?: number
): T[] => {
	// If the positions are undefined, return the original steps.
	if (originPosition === undefined || dropPosition === undefined) return prevSteps

	// Clone the previous steps to make modifications.
	const updatedSteps = [...prevSteps]

	// Get the destinaton step
	const hoverStep = updatedSteps[dropPosition]

	// Get the source/original step
	const dragStep = updatedSteps[originPosition]

	// If there's no step at the original position, return the original steps.
	if (!dragStep) return prevSteps

	// Clone the items within the dragged step.
	const updatedDragStepItems = [...dragStep.items]

	// Remove the dragged item from the original step
	const dragItem = updatedDragStepItems.splice(dragIndex, 1)[0]

	// If there's no item to drag, return the updated steps.
	if (!dragItem) return updatedSteps

	// This solves the case where the movement is whitn the same step
	if (originPosition === dropPosition) {
		updatedDragStepItems.splice(hoverIndex, 0, dragItem)
	} else if (hoverStep) {
		// If the drag and drop positions are different and there's a hover step, insert the item.
		const updatedHoverStepItems = [...hoverStep.items]
		updatedHoverStepItems.splice(hoverIndex, 0, dragItem)

		// Update the destiantion step with new item positions.
		updatedSteps[dropPosition] = {
			...hoverStep,
			items: updatedHoverStepItems.map((item, index) => ({ ...item, position: index + 1 }))
		}
	}

	// Updates the original step with new item positions.
	updatedSteps[originPosition] = {
		...dragStep,
		items: updatedDragStepItems.map((item, index) => ({ ...item, position: index + 1 }))
	}

	return updatedSteps
}
