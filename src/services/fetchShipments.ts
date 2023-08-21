import shipmentType from "../types/shipmentType";

async function fetchShipments(): Promise<shipmentType[] | null> {
    try{
        const response = await fetch("shipments.json")
        if (!response.ok) {
            throw new Error('Problems with fetching shipments')
        }
        const shipments = await response.json() 
        return shipments.list as shipmentType[]
    }catch(error){
        console.error('There was a problem:', error);
        return null
    }
}

export default fetchShipments