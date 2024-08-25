import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import SingleInventory from "./SingleInventory";

const AdditionalInformation = ({ data }) => {
  const [expand, setExpand] = React.useState(false);
  const [invId, setInvId] = React.useState(null);
  const [inventoryItemDetails, setInventoryItemDetails] = React.useState(null);

  const handleInventoryExpand = (inventoryId) => {
    console.log(data.items.inventory, ">>>10", inventoryId);
    const updated = data.items.inventory.filter(each => each.id == inventoryId);

    console.log(">>>updated", updated)

    setInventoryItemDetails(updated[0].category);

    setInvId(inventoryId);
    setExpand(!expand);
  };
  return (
    <>
      <div className="mymovesheader-2">
        <div>
          <h4>Additional Information</h4>
        </div>
        <div>
          <button className="edit-addinfo">Edit AdditionalInfo</button>
        </div>
      </div>
      <h4>Test Data</h4>

      <div className="mymovesheader-2">
        <div>
          <h4>House Details</h4>
        </div>
        <div>
          <button className="edit-addinfo">Edit House Details</button>
        </div>
      </div>

      <h4 className="house-header">Existing House Details</h4>

      <div className="mymovesheader-2">
        <div>
          <h5>
            <strong>Floor No:</strong>
          </h5>
          <p>{data.old_floor_no}</p>
        </div>
        <div>
          <h5>
            <strong>Elevator Available:</strong>
          </h5>
          <p>{data.old_elevator_availability}</p>
        </div>
        <div>
          <h5>
            <strong>Distance from Elevator / Staircase to truck</strong>
          </h5>
          <p>{data.old_parking_distance}</p>
        </div>
      </div>

      <h4 className="house-header">New House Details</h4>

      <div className="mymovesheader-2">
        <div>
          <h5>
            <strong>Floor No:</strong>
          </h5>
          <p>{data.new_floor_no}</p>
        </div>
        <div>
          <h5>
            <strong>Elevator Available:</strong>
          </h5>
          <p>{data.new_elevator_availability}</p>
        </div>
        <div>
          <h5>
            <strong>Distance from Elevator / Staircase to truck</strong>
          </h5>
          <p>{data.new_parking_distance}</p>
        </div>
      </div>

      <div className="mymovesheader-2">
        <div>
          <h4>Inventory Details</h4>
        </div>
        <div>
          <button className="edit-addinfo">Edit Inventory</button>
        </div>
      </div>

      {data.items.inventory.map((inventory) => (
        <div className="mymovesheader-2 inventory-box" key={inventory.id}>
          <div style={{ color: "#c7291e" }}>
            <h4>
              {inventory.displayName}{" "}
              <button style={{ color: "#c7291e" }}>
                {inventory.category.length}
              </button>
            </h4>
          </div>
          <div>
            {(invId !==
                inventory.id  || !expand)&& (
              <FaAngleDown
                onClick={() => handleInventoryExpand(inventory.id)}
              />
            )}
            {
              expand &&
              invId ==
                inventory.id &&(
                  <FaAngleUp
                    onClick={() => handleInventoryExpand(inventory.id)}
                  />
                )
            }
          </div>
        </div>
      ))}
      {inventoryItemDetails && 

      <SingleInventory inventoryItemDetails={inventoryItemDetails} />}
    </>
  );
};

export default AdditionalInformation;
