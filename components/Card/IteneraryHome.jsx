import { motion } from 'framer-motion'
import { Card as AntCard, Divider, Rate } from 'antd'

import Media from 'react-bootstrap/Media'

const IteneraryHome = () => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1 }}
        className="hover-pointer"
      >
        <AntCard
          className="bor-rad-10px shadow-sm card-body-20px mt-2 mb-3 card-other-itenerary"
          cover={<img alt="itenerary-image" src="https://bit.ly/3zh5qwv" className="img-itenerary-home bor-rad-top-10px" />}
        >
          <div className="text-truncate">
            <b className="text-truncate text-green-0 fs-18">Korea yuk guys</b>

            <Media className="text-green-0-50">
              <div className="content-card-itenerary">
                <i className="fad fa-feather-alt text-green-1"></i>
              </div>
              <Media.Body className="text-truncate">Alex Totenham</Media.Body>
            </Media>

            <Media className="text-green-0-50">
              <div className="content-card-itenerary">
                <i className="fad fa-calendar-day text-green-1"></i>
              </div>
              <Media.Body className="text-truncate">18-20 Jun</Media.Body>
            </Media>

            <Media className="text-green-0-50">
              <div className="content-card-itenerary">
                <i className="fad fa-map-marker-alt text-green-1"></i>
              </div>
              <Media.Body className="text-truncate">Bali</Media.Body>
            </Media>

            <Divider className="my-2" />

            <div className="d-flex justify-content-between">
              <div>
                <Rate className="fs-14 m-r-3" count={1} value={1} disabled />
                <span className="fs-12 text-green-0-50">(4.5)</span>
              </div>
              <div>
                <i className="fad fa-comment-alt fs-12 m-r-3"></i>
                <span className="fs-12 text-green-0-50" style={{verticalAlign: 'text-bottom'}}>(5)</span>
              </div>
            </div>
            
          </div>
        </AntCard>
      </motion.div>

      <style jsx>{`
        .content-card-itenerary {
          width: 18px;
          height: 20px;
          margin-right: 3px;
          margin-left: 3px;
        }
      `}</style>
    </>
  )
}

export default IteneraryHome
