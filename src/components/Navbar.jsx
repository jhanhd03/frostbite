export const Navbar = ({ cartCount, onOpenCart }) => {
  return (
    <nav style={{ padding: '15px 30px', backgroundColor: '#0f172a', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>❄️ FrostBite - Hielo Gourmet</h2>
      <button 
        onClick={onOpenCart}
        style={{ padding: '8px 16px', backgroundColor: '#06b6d4', color: '#000', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        🛒 Pedido ({cartCount})
      </button>
    </nav>
  );
};