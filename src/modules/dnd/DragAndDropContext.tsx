import React from 'react'
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd'

export const DragAndDropContext = ({
	children,
	onDragEnd
}: React.PropsWithChildren<{ onDragEnd: OnDragEndResponder }>) => (
	<DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
)
