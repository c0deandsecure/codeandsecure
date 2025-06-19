const products = [
  {
    id: 1,
    name: 'E-Commerce Applications - Complete Set',
    href: '#',
    price: 'Code and Secure provides complete e-commerce solutions, including design, integration, and consultation.',
    imageSrc: '../src/assets/service-1.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Applications - Maintenance & Enhancement',
    href: '#',
    price: 'Code and Secure enhances applications with offshore teams for bug fixes, security, scaling, and new features.',
    imageSrc: '../src/assets/service-3.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 3,  
    name: 'Custom Integration',
    href: '#',
    price: 'This service automates data exchange and integrates remote applications seamlessly.',
    imageSrc: '../src/assets/service-2.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 4,
    

   name: 'Software Development',
    href: '#',
    price: 'Supporting clients through the full software development lifecycle: ideation, architecture, testing, support.',
    imageSrc: '../src/assets/service-1.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 5,
    name: 'Software Professional Services',
    href: '#',
    price: 'Migrating apps to the cloud? We ensure a smooth, successful transition.',
    imageSrc: '../src/assets/service-2.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
   name: 'Software SAAS Solutions',
    href: '#',
    price: 'Versatile SaaS and hybrid models tailored for efficient, secure IT solutions.',
    imageSrc: '../src/assets/service-2.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 7,
    name: 'Software Support and Maintenance Services',
    href: '#',
    price: 'We enhance your product\'s success with support, upgrades, and customer care.',
    imageSrc: '../src/assets/service-3.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 8,
    name: 'Product Porting and Migration',
    href: '#',
    price: 'Experts in migration, porting, localization, and varied business domain analysis.',
    imageSrc: '../src/assets/service-2.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 9,
    name: 'Application Development',
    href: '#',
    price: 'Comprehensive application development: custom apps, mobile apps, CMS, web portals.',
    imageSrc: '../src/assets/service-1.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  
]

export default function ServiceList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

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
