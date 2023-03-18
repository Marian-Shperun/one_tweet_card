import CardUser from './CardUser';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        flexWrap: 'wrap',
        padding: '50px 10px',
      }}
    >
      <CardUser />
    </div>
  );
};
