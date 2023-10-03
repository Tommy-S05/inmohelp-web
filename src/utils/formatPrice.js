export default function formatPrice() {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}