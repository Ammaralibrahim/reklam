import React from 'react';

const products = [
  {
    id: 1,
    name: '3 Parça Lüks Kutu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/lamba-kutu-verakutu-1-1152x1536.png',
    description: 'Bu lüks kutu, özel günler için mükemmel bir hediye seçeneğidir.',
    inStock: true
  },
  {
    id: 2,
    name: 'Ahşap Kartelası',
    price: '100₺',
    image: 'https://verakutu.com/wp-content/uploads/2024/03/kartela-parla-3.png',
    description: 'Ahşap malzemeden yapılmış, şık ve dayanıklı kartela.',
    inStock: false
  },
  {
    id: 3,
    name: 'Çekmeceli Çanta Kutu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cekmecelli-canta-kutu-3-1152x1536.png',
    description: 'Kullanışlı çekmecesi ile her türlü eşyayı saklamak için ideal.',
    inStock: true
  },
  {
    id: 4,
    name: 'Çekmeceli Kozmetik Kutusu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cilt-bakim-kutusu-kozmetik-kutu-2-1152x1536.png',
    description: 'Kozmetik ürünlerinizi düzenli bir şekilde saklayabileceğiniz şık kutu.',
    inStock: false
  },
  {
    id: 5,
    name: 'Çekmeceli Lüks Kutu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cekmeceli-kutu-vera-kutu-2-1152x1536.png',
    description: 'Lüks ve kaliteli malzemelerle üretilmiş çekmeceli kutu.',
    inStock: true
  },
  {
    id: 6,
    name: 'Çekmeceli Parfüm Kutusu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cekmeceli-parfum-kutusu-verakutu2-1152x1536.png',
    description: 'Parfümleriniz için özel olarak tasarlanmış çekmeceli kutu.',
    inStock: false
  },
  {
    id: 7,
    name: 'Çikolata Kutusu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cikolata-kutusu-seperatorlu-kare-kutu-gidaya-uygun-kutu-vera-6-1152x1536.png',
    description: 'Lezzetli çikolatalarınızı saklamak için ideal kutu.',
    inStock: true
  },
  {
    id: 8,
    name: 'Collagen Mıknatıslı Kutu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/collagen-kutusu-verakutu-1-1152x1536.png',
    description: 'Mıknatıs kapaklı, şık ve pratik kutu.',
    inStock: true
  },
  {
    id: 9,
    name: 'Çorap Kutusu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/corap-kutusu-ic-camasir-kutusu-2-1152x1536.png',
    description: 'Çorap ve iç çamaşırlarınızı düzenli bir şekilde saklayabileceğiniz kutu.',
    inStock: false
  },
  {
    id: 10,
    name: 'Cüzdan Kutusu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/lansman-kutusu-cilt-bezi-kutu-3-1152x1536.png',
    description: 'Cüzdanlarınız için özel olarak tasarlanmış dayanıklı kutu.',
    inStock: true
  },
  {
    id: 11,
    name: 'Doğa Dostu Kraft Mukavva Kutu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/kraft-kutu-vera-kutu-3-1152x1536.png',
    description: 'Çevre dostu malzemelerden üretilmiş kraft kutu.',
    inStock: false
  },
  {
    id: 12,
    name: 'Hediye Kutu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/kirmizi-kutu-hediye-kutulari-1-1152x1536.png',
    description: 'Özel günler için mükemmel bir hediye kutusu.',
    inStock: true
  },
  {
    id: 13,
    name: 'Lüks Çikolata Kutusu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/cikolata-kutusu-gida-kutusu-luks-kutu-vera-2-1152x1536.png',
    description: 'Lezzetli çikolatalarınızı saklamak için lüks kutu.',
    inStock: false
  },
  {
    id: 14,
    name: 'Lüks Kare Fincan Kutusu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/fincan-kutusu-4-1152x1536.png',
    description: 'Fincanlarınız için özel olarak tasarlanmış lüks kutu.',
    inStock: true
  },
  {
    id: 15,
    name: 'Lüks Lansman Kutusu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/lansman-kutusu-2-1152x1536.png',
    description: 'Lansmanlar için özel olarak tasarlanmış lüks kutu.',
    inStock: false
  },
  {
    id: 16,
    name: 'Mıknatıslı Kutu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/collagen-kutusu-saglik-kutusu-takviye-kutusu-miknatisli-kutu-vera-kutu-5-1152x1536.png',
    description: 'Mıknatıs kapaklı, şık ve kullanışlı kutu.',
    inStock: true
  },
  {
    id: 17,
    name: 'Mıknatıslı Lansman Kutusu',
    price: '100₺',
    image: 'https://verakutu.com/wp-content/uploads/2024/03/miknatisli-seperatorlu-lansman-kutusu-4-1152x1536.png',
    description: 'Parfümleriniz için özel olarak tasarlanmış kutu.',
    inStock: false
  },
  {
    id: 18,
    name: 'Mukavva Kutu Kapak Model',
    price: '100₺',
    image: 'https://verakutu.com/wp-content/uploads/2024/03/cikolata-kutusu-gomlek-kutusu-kutu-modelleri-vera-kutu-2-1-1152x1536.png',
    description: 'Telefonlarınız için özel olarak tasarlanmış dayanıklı kutu.',
    inStock: true
  },
  {
    id: 19,
    name: 'Nish Parfüm Kutu',
    price: '100₺',
    image: 'https://cdn-ikpnhgj.nitrocdn.com/FNaMtPrDlfcYsQiAtzEwuRFMSUYzNJIT/assets/images/optimized/rev-c9d78b1/verakutu.com/wp-content/uploads/2024/03/kozmetik-kutusu-parfum-kutusu-2-1152x1536.png',
    description: 'Nish Parfüm Kutu',
    inStock: false
  }
];


export default function Cards() {
  return (
    <section className="bg-white py-8">
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <nav id="store" className="w-full z-30 top-0 px-6 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
          <a
            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
            href="#"
          >
            Store
          </a>
        </div>
      </nav>
      {products.map((product) => (
        <div key={product.id} className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              className="hover:grow hover:shadow-lg"
              src={product.image}
              alt={product.name}
            />
            <div className="pt-3 flex items-center justify-between">
              <p className="">{product.name}</p>
              <svg
                className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
              </svg>
            </div>
            <p className="pt-1 text-xs text-gray-600">{product.description}</p>

            <div className="pt-1 flex items-center justify-between">
              <p className="text-green-600 bold">{product.price}</p>
              <p className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'Stokta Var' : 'Stokta Yok'}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  </section>
  
  );
}
