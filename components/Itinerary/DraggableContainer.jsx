import { memo } from 'react'
import { motion } from 'framer-motion'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import AttractionCard from 'components/Card/Attraction'

const AttractionCardMemo = memo(AttractionCard)

const getItemStyle = (_, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  borderRadius: '10px',
  paddingBottom: '1rem',

  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  padding: '5px',
  borderRadius: '12px',
  minHeight: 'calc(100vh - 57px - 40px)',
  height: '100%',
  border: isDraggingOver && '2px dashed var(--gray-5)',
  background: isDraggingOver ? "var(--gray-3)" : "transparent",
});

const DraggableContainer = ({ data, droppableId, setInfoWindow }) => {

  const onMouseEnter = (data) => {
    if(droppableId === "SELECTED_PLACE") {
      setInfoWindow({ isHover: true, place: data })
    } else return
  }

  const onMouseLeave = () => {
    if(droppableId === "SELECTED_PLACE") {
      setInfoWindow({ isHover: false, place: null })
    } else return
  }

  return (
    <>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >

            {data && data.length > 0 ? (
              <>
                {data.map((item, index) => (
                  <Draggable index={index} key={item.name} draggableId={item.name}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <AttractionCardMemo isDragging={snapshot.isDragging} data={item} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </>
            ) : (
              <div 
                className="d-flex align-items-center justify-content-center flex-column text-center user-select-none"
                style={{minHeight: 'calc((100vh - 57px) - 50px)'}}
              >
                {droppableId === "PLACE" ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p>
                      <i className="fal fa-globe-stand fa-3x text-gray-8"></i>
                    </p>
                    <p className="text-center text-gray-8 fs-15 mb-1">
                      There is no other place to visit in this area.
                      {/* Sepertinya tidak ada tempat yang bisa dikunjungi lagi di daerah ini. */}
                    </p>
                    <p className="text-center text-gray-6 fs-12">
                      Please drag the map to get data on places you can visit.
                      {/* Silahkan geser atau gerakkan peta untuk mendapatkan data tempat yang bisa kamu kunjungi. */}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p>
                      <i className="fal fa-map-marker-alt-slash fa-3x text-gray-8"></i>
                    </p>
                    <p className="text-center text-gray-8 fs-15 mb-1">
                      You don't have any place that you want to visit.
                      {/* Wah kamu belum ada tempat wisata nih yang ingin kamu kunjungi. */}
                    </p>
                    <p className="text-center text-gray-6 fs-12">
                      Please drag the card on the left here to insert the place.
                      {/* Silahkan tarik kartu disebelah kiri ke sini untuk memasukkan tempat yang ingin kamu kunjungi. */}
                    </p>
                  </motion.div>
                )}
              </div>
            )}


            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  )
}

export default DraggableContainer
