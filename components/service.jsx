import React from 'react';

export default function Services() {
  return (
    <section>
      <div className="px-2 py-24 mx-auto md:px-2 lg:px-5 max-w-full flex flex-col justify-center">
        <div className="flex flex-col">
          <div className="text-left text-xl text-gray-900 font-bold">
            <div>
              <h1>Hizmetlerimiz</h1>
            </div>
          </div>
          <div className="mt-6 border-t pt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
              <div>
                <span className="text-gray-600 uppercase text-xs font-medium">
                  Yüksek Kalite Baskı
                </span>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                  Her Türlü Baskı İşlerinizde Yanınızdayız
                </p>
                <p className="text-sm mt-4 text-gray-700 text-balance">
                  Kartvizit, broşür, afiş, katalog ve daha fazlası için profesyonel baskı çözümleri sunuyoruz.
                </p>
              </div>
              <div className="h-full md:order-first">
                <img
                  src="https://img.freepik.com/free-photo/man-working-printing-house-with-paper-paints_1303-26577.jpg?t=st=1721897545~exp=1721901145~hmac=85a71a4b259acc52b0c62660f6acc0e1daf27dd4ae572c756e3aa6c0f286263b&w=996"
                  alt="Baskı Hizmetleri"
                  className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-left"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
              <div>
                <span className="text-gray-600 uppercase text-xs font-medium">
                  Kreatif Tasarım
                </span>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                  Özgün ve Yaratıcı Tasarımlar
                </p>
                <p className="text-sm mt-4 text-gray-700 text-balance">
                  Profesyonel grafik tasarım hizmetlerimizle markanızı öne çıkarın.
                </p>
              </div>
              <div className="h-full">
                <img
                  src="https://img.freepik.com/free-photo/managing-smart-speakers-concept_23-2150170079.jpg?t=st=1721897789~exp=1721901389~hmac=36536414f5512ff57efce3190fbcc3bfb9f5389387dccb39e5211444321fd49b&w=996"
                  alt="Tasarım Hizmetleri"
                  className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
              <div>
                <span className="text-gray-600 uppercase text-xs font-medium">
                  Dijital Baskı
                </span>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                  Hızlı ve Ekonomik Çözümler
                </p>
                <p className="text-sm mt-4 text-gray-700 text-balance">
                  İhtiyacınıza uygun dijital baskı çözümlerimizle zamandan ve maliyetten tasarruf edin.
                </p>
              </div>
              <div className="h-full md:order-first">
                <img
                  src="https://img.freepik.com/free-photo/man-drawing-bulb-gears_1134-465.jpg?t=st=1721897467~exp=1721901067~hmac=f5b0910513f2e91fbeba10f38a97c6b8f14d7935205775544710c0f433815d93&w=996"
                  alt="Dijital Baskı Hizmetleri"
                  className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center md:flex-row-reverse">
              <div>
                <span className="text-gray-600 uppercase text-xs font-medium">
                  Kurumsal Kimlik
                </span>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">
                  Markanızı Güçlendirin
                </p>
                <p className="text-sm mt-4 text-gray-700 text-balance">
                  Profesyonel kurumsal kimlik çalışmaları ile markanızın değerini artırın.
                </p>
              </div>
              <div className="h-full">
                <img
                  src="https://img.freepik.com/free-vector/business-success-growth-chart-arrow-concept_1017-20062.jpg?t=st=1721899735~exp=1721903335~hmac=48ffb4e6f9ca5947516fc9b26420bf9e2cfa8a648c0c30d80dabaab5ac501299&w=740"
                  alt="Kurumsal Kimlik Hizmetleri"
                  className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
