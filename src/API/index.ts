import axios from "axios"
import { Shipment } from "types/shipment"

export const getShipmentDetails = async ({ trackingNumber }: { trackingNumber: number }): Promise<{ Shipment: Shipment }> => {
    const { data } = await axios.get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
    return { Shipment: data }
}
