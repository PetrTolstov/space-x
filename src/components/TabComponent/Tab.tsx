import { useState } from "react"
import shipmentType from "../../types/shipmentType"
import calcBays from "../../services/calcBays"

const TabComponent = ({ shipments }: { shipments: shipmentType[] }) => {
    const [activeTab, setActiveTab] = useState(0)
    console.log(shipments)
    return (
        <div>
            <div>
                {shipments.map((el, i) => (
                <button onClick={() => setActiveTab(i)} key={el.id}>{el.name}</button>
            ))
                }
            </div>
            <div>
                <h2>{shipments[activeTab].name}</h2>
                <p>{shipments[activeTab].email}</p>
                <p>{shipments[activeTab].boxes}</p>
                <p>{calcBays(shipments[activeTab].boxes).length}</p>
            </div>
        </div>)
}

export default TabComponent