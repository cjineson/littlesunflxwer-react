const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_Cx8DmspqU6McP8f5sOTOVH6S00IMVF7GEj';
 
export default STRIPE_PUBLISHABLE;