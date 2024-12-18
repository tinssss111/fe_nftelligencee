export interface NFT {
    unit: string;
    quantity: string;
    assetDe: {
        asset: string;
        policy_id: string;
        asset_name: string;
        fingerprint: string;
        quantity: string;
        initial_mint_tx_hash: string;
        mint_or_burn_count: number;
        onchain_metadata: {
            name: string;
            description: string;
            image: string;
            mediaType: string;
        };
    };
    onchain_metadata_standard: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onchain_metadata_extra: null | any; // Điều này cần sửa đổi để cụ thể hơn
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    metadata: null | any; // Điều này cần sửa đổi để cụ thể hơn
}
