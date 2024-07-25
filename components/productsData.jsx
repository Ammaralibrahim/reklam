const products = [
  {
    category: "Mıknatıslı Kutu",
    title: "3 Parça Lüks Kutu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/lamba-kutu-verakutu-1-1152x1536.png",
  },
  {
    category: "Çikolata Kutuları",
    title: "Ahşap Kartelası",
    image: "https://verakutu.com/wp-content/uploads/2024/03/kartela-parla-3.png",
  },
  {
    category: "Kozmetik Kutuları",
    title: "Çekmeceli Çanta Kutu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cekmecelli-canta-kutu-3-1152x1536.png",
  },
  {
    category: "Saat Kutuları",
    title: "Çekmeceli Kozmetik Kutusu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cilt-bakim-kutusu-kozmetik-kutu-2-1152x1536.png",
  },
  {
    category: "Özel Tasarım Kutular",
    title: "Çekmeceli Lüks Kutu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cekmeceli-kutu-vera-kutu-2-1152x1536.png",
  },
  {
    category: "Kartela Çeşitleri",
    title: "Çekmeceli Parfüm Kutusu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cekmeceli-parfum-kutusu-verakutu2-1152x1536.png",
  },
  {
    category: "Katlanır Demonte Kutular",
    title: "Çikolata Kutusu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cikolata-kutusu-seperatorlu-kare-kutu-gidaya-uygun-kutu-vera-6-1152x1536.png",
  },
  {
    category: "Mum Kutuları",
    title: "Collagen Mıknatıslı Kutu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/collagen-kutusu-verakutu-1-1152x1536.png",
  },
  {
    category: "Çekmeceli Bölmeli Kutular",
    title: "Çorap Kutusu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/corap-kutusu-ic-camasir-kutusu-2-1152x1536.png",
  },
  {
    category: "Kraft Kutular",
    title: "Cüzdan Kutusu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/lansman-kutusu-cilt-bezi-kutu-3-1152x1536.png",
  },
  {
    category: "Bristol Kutular",
    title: "Doğa Dostu Kraft Mukavva Kutu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/kraft-kutu-vera-kutu-3-1152x1536.png",
  },
  {
    category: "Lansman Kutuları",
    title: "Hediye Kutu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/kirmizi-kutu-hediye-kutulari-1-1152x1536.png",
  },
  {
    category: "Kargo Kutuları",
    title: "Lüks Çikolata Kutusu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cikolata-kutusu-gida-kutusu-luks-kutu-vera-2-1152x1536.png",
  },
  {
    category: "Karton Çanta",
    title: "Lüks Kare Fincan Kutusu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/fincan-kutusu-4-1152x1536.png",
  },
  {
    category: "Hediye Kutuları",
    title: "Lüks Lansman Kutusu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/lansman-kutusu-2-1152x1536.png",
  },
  {
    category: "Hediye Kutuları",
    title: "Mıknatıslı Kutu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/collagen-kutusu-saglik-kutusu-takviye-kutusu-miknatisli-kutu-vera-kutu-5-1152x1536.png",
  },
  {
    category: "Hediye Kutuları",
    title: "Mıknatıslı Lansman Kutusu",
    image: "https://verakutu.com/wp-content/uploads/2024/03/miknatisli-seperatorlu-lansman-kutusu-4-1152x1536.png",
  },
  {
    category: "Hediye Kutuları",
    title: "Mukavva Kutu Kapak Model",
    image: "https://verakutu.com/wp-content/uploads/2024/03/cikolata-kutusu-gomlek-kutusu-kutu-modelleri-vera-kutu-2-1-1152x1536.png",
  },
 
  {
    category: "Hediye Kutuları",
    title: "Nish Parfüm Kutu",
    image: "https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/kozmetik-kutusu-parfum-kutusu-2-1152x1536.png",
  },
  {
    category: "Hediye Kutuları",
    title: "Özel Tasarım Vera Mum Kutusu",
    image: "https://verakutu.com/wp-content/uploads/2024/03/mum-kutusu-verakutu-2-1152x1536.webp",
  },
  {
    category: "Hediye Kutuları",
    title: "Parfüm Kutusu",
    image: "https://verakutu.com/wp-content/uploads/2024/03/cekmeceli-kutus-parfum-kutusu-vera-kutu-luks-kutu-1-1152x1536.png",
  },
  {
    category: "Hediye Kutuları",
    title: "Saat Kutusu",
    image: "https://verakutu.com/wp-content/uploads/2024/03/akilli-saat-kutusu-vera-kutu-5-1152x1536.png",
  },
  {
    category: "Hediye Kutuları",
    title: "Seperatörlü Lüks Çikolata Kutusu",
    image: "https://verakutu.com/wp-content/uploads/2024/03/cikolata-kutusu-1-1152x1536.png",
  },
 

];

export default products;
