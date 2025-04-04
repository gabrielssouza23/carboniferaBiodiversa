import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ currentPage }) {
  const navigation = [
    { name: 'Home', href: '/', current: currentPage == 'home' ? true : false },
    { name: 'Catálogo', href: '/catalogo', current: currentPage == 'catalog' ? true : false },
    { name: 'Participe', href: '/participe', current: currentPage == 'participe' ? true : false },
    { name: 'Artigos', href: '/artigos', current: currentPage == 'articles' ? true : false },
  ]
  return (
    // <div className='w-full fixed top-0 left-0'>
        <Disclosure as="nav" className="bg-zinc-50 w-full fixed top-0 inset-x-0 z-50">
      <div className="bg-zinc-50 w-full px-2 sm:px-6 lg:px-8 flex h-16 items-center justify-center">
        <div className="relative flex h-16 items-center justify-center">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-custom-green hover:bg-custom-green hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="/logo.svg"
                className="h-9 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-custom-green text-white' : 'text-custom-green hover:bg-custom-green hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
         
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-custom-green hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    // </div>
  )
}
