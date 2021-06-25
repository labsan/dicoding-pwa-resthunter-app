const Beranda = {
    async render() {
      return `
        <h2>Halaman Beranda</h2>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default Beranda;