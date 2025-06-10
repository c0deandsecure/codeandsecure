const products = [
  {
    id: 1,
    

    name: 'TrainHQ',
    href: '#',
    price: 'Our Gym Admin Panel simplifies your daily operations — from member tracking to income reports. Built for modern gyms who want to manage everything digitally.',
    imageSrc: '../src/assets/service-1.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    

    name: 'LearnHQ',
    href: '#',
    price: 'Our Institute Admin Panel simplifies your daily operations — from student tracking to fee reports. Built for modern institutes who want to manage everything digitally.',
    imageSrc: '../src/assets/service-3.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  
  
]

export default function ProductsList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
         <h2 className="flex justify-center  text-5xl pb-20  font-bold text-gray-900">Our Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-11/8"
              />
              <h3 className="mt-1 text-xl font-medium text-gray-900">{product.name}</h3>
              <p className="mt-4 text-lg text-gray-700">{product.price}</p>
              <p className="mt-4 text-lg text-gray-700">
                  Read More <span aria-hidden="true">&rarr;</span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
