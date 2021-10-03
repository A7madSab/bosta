interface Status {
    state: string
    timestamp: string
}

export interface Shipment {
    CurrentStatus: Status
    TrackingNumber: string
    TrackingURL: string
    SupportPhoneNumbers: string[]
    TransitEvents: Status[]
}
