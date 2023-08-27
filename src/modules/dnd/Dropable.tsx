import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

export const DropableBox = ({
	children,
	type,
	droppableId
}: React.PropsWithChildren<{ droppableId: string; type: string }>) => {
	return (
		<Droppable  droppableId={droppableId} type={type}>
			{(provided, snapshot) => (
				<div ref={provided.innerRef} {...provided.droppableProps}>
					{children}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}
