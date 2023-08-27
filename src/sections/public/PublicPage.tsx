import React from 'react'
import { DropResult } from 'react-beautiful-dnd'
import { ProfileAvatar } from '../../design-system/molecules/ProfileAvatar'
import { RowItemCard } from '../../design-system/molecules/RowItemCard/RowItemCard'
import { colors } from '../../design-system/shared'
import { DragAndDropContext, DragableCompoent, DropableBox, moveElement } from '../../modules/dnd'
import styles from './PublicPage.module.scss'

export const PublicPage = () => {
	const [elements, setElements] = React.useState([
		{
			id: '1',
			title: 'First',
			url: '',
			position: 1,
			hide: false
		},
		{
			id: '2',
			title: 'Second',
			url: '',
			position: 2,
			hide: false
		}
	])

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return

		const destination = result.destination
		const origin = result.source

		if (destination.index === origin.index) return

		setElements((prev) => moveElement(prev, origin.index, destination.index))
	}

	const handleChangeElementTitle = (index: number, value: string) => {
		const newElements = [...elements]
		newElements[index].title = value
		setElements(newElements)
	}

	const handleToggleElementHide = (index: number) => {
		const newElements = [...elements]
		newElements[index].hide = !newElements[index].hide
		setElements(newElements)
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '2rem'
			}}
			className={styles.container}
		>
			<ProfileAvatar
				name="John Doe"
				src="https://robohash.org/468355c6815fe2c112e0de6724ca5c0a?set=set5&bgset=&size=400x400"
				tagline="This is a tagline"
			/>
			<DragAndDropContext onDragEnd={onDragEnd}>
				<DropableBox type="step" droppableId="steps">
					<section className={styles.section}>
						{elements.map((element, index) => (
							<DragableCompoent key={element.id} index={index} id={element.id}>
								<RowItemCard
									dragable
									mode={colors.green}
									id={element.id}
									initialValue={element.title}
									initialState={element.hide}
									onChange={(e) => handleChangeElementTitle(index, e.target.value)}
									onToggleChange={() => handleToggleElementHide(index)}
								/>
							</DragableCompoent>
						))}
					</section>
				</DropableBox>
			</DragAndDropContext>
		</div>
	)
}
