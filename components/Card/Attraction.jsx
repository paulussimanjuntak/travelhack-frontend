import { Row, Col } from 'antd'
import { motion } from 'framer-motion'

import Image from 'next/image'
import Rating from 'react-rating'
import Card from 'react-bootstrap/Card'

const AttractionCard = ({ data, isDragging, onMouseEnter, onMouseLeave }) => {
  return (
    <>
      <Card 
        onMouseLeave={onMouseLeave}
        onMouseEnter={() => onMouseEnter(data)}
        className="bor-rad-10px border-0 card-place"
      >
        {isDragging && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }} className="overlay-bg" />
        )}
        <Row gutter={[0,0]}>
          <Col span={8}>
            <Image
              sizes="20vw"
              quality={50}
              layout="fill"
              priority={true}
              src={data.icon}
              alt={data.name}
              placeholder="blur"
              className="bor-rad-left-10px img-fit"
            />
          </Col>

          <Col span={16}>
            <Card.Body className="p-2">
              <p className="fs-16 mb-0">{data.name}</p>
              <p className="fs-12 text-muted">{data.address}</p>
              <div>
                <small className="fs-12 mr-1 text-muted">{data.rating}</small>
                <Rating
                  emptySymbol="fas fa-star text-gray-4 fs-12"
                  fullSymbol="fas fa-star text-yellow-1 fs-12"
                  initialRating={data.rating}
                  fractions={1}
                  readonly
                />
                <small className="fs-12 ml-1 text-muted">({data.user_rating})</small>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <style jsx>{`
      :global(.card-place) {
        box-shadow: 0 1px 2px 0 rgb(60 64 67 / 0%), 0 1px 3px 1px rgb(60 64 67 / 15%);
      }
      :global(.overlay-bg) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #a5a5a5;
        z-index: 1;
        border-radius: 10px;
      }
      `}</style>
    </>
  )
}

export default AttractionCard
