// UberDeliveriesSdk.ts

import type { DeliveryRequest, DeliveryResponse, ApiError } from './types';

class UberDeliveriesSdk {
    private apiUrl: string = 'https://api.uber.com/v1/deliveries'; // Example base URL, replace if different

    constructor(private apiKey: string) {}

    // Create a new delivery
    async createDelivery(request: DeliveryRequest): Promise<DeliveryResponse> {
        const response = await fetch<DeliveryResponse>(`${this.apiUrl}/create`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            await this.handleError(response);
        }

        return response.json();
    }

    // Get delivery status
    async getDeliveryStatus(deliveryId: string): Promise<DeliveryResponse> {
        const response = await fetch<DeliveryResponse>(`${this.apiUrl}/status/${deliveryId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            await this.handleError(response);
        }

        return response.json();
    }

    // Handle errors
    private async handleError(response: Response): Promise<void> {
        const errorData: ApiError = await response.json();
        console.error(`API Error: ${errorData.code} - ${errorData.message}`);
        throw new Error(`API Error: ${errorData.code} - ${errorData.message}`);
    }
}

export default UberDeliveriesSdk;
