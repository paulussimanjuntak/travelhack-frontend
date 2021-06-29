import { motion } from 'framer-motion'

import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'

const ItineraryCardOther = () => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1 }}
        className="hover-pointer"
      >
        <div className="popular-itinerary mt-3 mb-3">
          <Card className="bor-rad-20px border-0">
            <img 
              className="card-img img-fit bor-rad-20px"
              src="https://api.balihotproperty.com/static/regions/cecb308bddca4cb1a6e89b0ae5520f63.jpeg" width="300" height="400" 
            />
            <div className="card-img-overlay bor-rad-20px">
              <Card.Body className="text-truncate">
                <h4 className="text-capitalize text-white fs-18 text-truncate">Yuk ke Bali guys</h4>
                <Media>
                  <img
                    width={32}
                    height={32}
                    className="m-r-10 rounded-circle"
                    src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/profilePicture/5aK5ZGwKFUffe1XA"
                  />
                  <Media.Body className="text-truncate">
                    <h6 className="text-gray-5 fs-14 mb-n1 text-truncate">Okky Sukadandan</h6>
                    <span className="text-gray-5 fs-10">2618 views • 23 likes</span>
                  </Media.Body>
                </Media>
              </Card.Body>
            </div>
          </Card>
        </div>
      </motion.div>

      <style jsx>{`
        .card-img-overlay {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          padding: 1rem;
          border-radius: 20px;
        }
        :global(.popular-itinerary .card .card-body) {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          z-index: 1;
          padding: 0px 20px 18px;
        }
        :global(.popular-itinerary .card .card-body::before) {
          content: "";
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(rgba(255, 255, 255, 0.02), rgb(44, 44, 47));
          z-index: -1;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      `}</style>
    </>
  )
}

export default ItineraryCardOther
