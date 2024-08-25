import React, { useState } from "react";
import {
  FaCalendar,
  FaArrowUp,
  FaArrowAltCircleRight,
  FaPencilAlt,
  FaLocationArrow,
  FaTaxi,
} from "react-icons/fa";
import { formatDate } from "../utils/formatData";
import AdditionalInformation from "./AdditionalInformation";

const MyMoves = ({ data }) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = React.useState(false);
  const [userId, setUserId] = useState(null);
  const handleShowMoreDetails = (userid) => {
    const temp = showAdditionalInfo;
    setShowAdditionalInfo(!temp);
    setUserId(userid);
  };

  console.log(
    data?.Customer_Estimate_Flow,
    showAdditionalInfo,
    typeof showAdditionalInfo
  );
  return (
    <div className="MyMoves col-sm-9">
      <h4>My Moves</h4>
      {data?.Customer_Estimate_Flow.map((each) => (
        <>
          <div className="mymovesheader-1" key={each.estimate_id}>
            <div>
              <h5>From</h5>
              <p className="move-from">{each.moving_from}</p>
            </div>
            <div style={{ alignItems: "center" }}>
              <FaArrowAltCircleRight className="menu-icon" />
            </div>
            <div>
              <h5>To</h5>
              <p>{each.moving_to}</p>
            </div>
            <div>
              <h5 style={{ fontWeight: "bold" }}>Request</h5>
              <p>{each.estimate_id}</p>
            </div>
          </div>

          <div className="mymovesheader-2">
            <div className="row-a2">
              <FaArrowUp className="menu-icon" />
              <h5>{each.property_size}</h5>
            </div>

            <div className="row-a2">
              <FaTaxi className="menu-icon" />
              <h5>{each.total_items}</h5>
            </div>
            <div className="row-a2">
              <FaLocationArrow className="menu-icon" />
              <h5>{each.distance}</h5>
            </div>
            <div className="row-a2">
              <FaCalendar className="menu-icon" />
              <h5>{formatDate(each.moving_on)}</h5>
              <FaPencilAlt style={{ paddingLeft: "10px" }} />
            </div>
            <div className="row-a2">
              <button
                type="button"
                onClick={() => handleShowMoreDetails(each.estimate_id)}
                className="move-details"
              >
                View Move details
              </button>
            </div>
            <div className="row-a2">
              <button type="button" className="quotesawaiting">
                Quotes awaiting
              </button>
            </div>
          </div>

          {showAdditionalInfo == true && userId == each.estimate_id && (
            <div className="">
              <AdditionalInformation data={each}/>
            </div>
          )}

          <div className="disclaimer">
            <h5>
              <strong>Disclaimer:</strong> Please update your move date before
              two days of shifting
            </h5>
          </div>
        </>
      ))}
    </div>
  );
};

export default MyMoves;
