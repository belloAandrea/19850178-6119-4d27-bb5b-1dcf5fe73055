import dynamic from 'next/dynamic';

const LazyLoadedComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});

export default LazyLoadedComponent;