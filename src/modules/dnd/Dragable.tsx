import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

interface DraggableComponentPros extends React.PropsWithChildren {
	index: number
	disabled?: boolean
	id: string
}

export const DragableCompoent = ({ index, id, disabled = false, children }: DraggableComponentPros) => {
	return (
		<Draggable draggableId={`step-${id}`} index={index}>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					{children}
				</div>
			)}
		</Draggable>
	)
}
