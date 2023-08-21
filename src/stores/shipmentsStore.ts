import { makeObservable, observable, action, flow } from "mobx"
import shipmentType from "../types/shipmentType"
import jsonType from "../types/jsonType"

class ShimpmentsStore {
    list: shipmentType[] | null
    current: shipmentType | null

    constructor() {
        makeObservable(this, {
            list: observable,
            current: observable,
            setCurrent: action,
            fetch: flow
        })
        this.list = null
        this.current = null
        this.fetch()
    }

    setCurrent(shipment: shipmentType) {
        this.current = shipment
    }

    *fetch(): Generator<Promise<Response>, void, any> {
        const response: Response = yield fetch("shipments.json"); 
        const shipments: jsonType = yield response.json();
        this.list = shipments.list;
        this.current = this.list[0]
    }
}

const shimpmentsStore = new ShimpmentsStore()
export default shimpmentsStore