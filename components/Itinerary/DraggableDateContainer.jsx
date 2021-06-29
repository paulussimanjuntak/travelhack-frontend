import { memo } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import DateButton from 'components/Itinerary/DateButton'

const DateButtonMemo = memo(DateButton)

const getItemDateStyle = (_, draggableStyle) => ({
  userSelect: 'none',
  ...draggableStyle,
});

const getListDateStyle = (_, length) => ({
  gap: '8px',
  display: 'flex',
  justifyContent: length > 4 ? 'unset' : 'flex-end'
})

const DraggableDateContainer = ({ data, selectedTime, setSelectedTime }) => {
  return (
    <>
      <Droppable droppableId="droppableDate" type="droppableItemDate" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListDateStyle(snapshot.isDraggingOver, data.length)}
            {...provided.droppableProps}
          >
            {data.map((item, index) => (
              <Draggable
                key={item.time}
                draggableId={item.time}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={getItemDateStyle(snapshot.isDragging, provided.draggableProps.style)}
                  >
                    <DateButtonMemo
                      date={item.time} 
                      active={selectedTime === item.time}
                      changeDateHandler={() => setSelectedTime(item.time)}
                      {...provided.dragHandleProps}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  )
}

export default DraggableDateContainer
