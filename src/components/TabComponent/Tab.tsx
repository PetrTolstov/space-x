import { useState } from "react"
import shipmentType from "../../types/shipmentType"
import calcBays from "../../services/calcBays"
import shimpmentsStore from "../../stores/shipmentsStore"
import { observer } from "mobx-react"

const TabComponent = () => {
    return (
        <div>
            {shimpmentsStore.list ? <>
                <div>
                    {shimpmentsStore.list.map((el) => (
                        <button onClick={() => shimpmentsStore.setCurrent(el)} key={el.id}>{el.name}</button>
                    ))
                    }
                </div>
                <div>
                    <h2>{shimpmentsStore.current?.name}</h2>
                    <p>{shimpmentsStore.current?.email}</p>
                    <p>{shimpmentsStore.current?.boxes}</p>
                    <p>{calcBays(shimpmentsStore.current!.boxes).length}</p>
                </div></> : <p> Loading...</p >}

        </div>)
}

export default observer(TabComponent)