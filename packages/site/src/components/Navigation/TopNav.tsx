import { NavLink } from '@remix-run/react';
import { Fragment } from 'react';
import classNames from 'classnames';
import { Menu, Transition } from '@headlessui/react';
import {
  EllipsisVerticalIcon,
  ChevronDownIcon,
  Bars3Icon as MenuIcon,
} from '@heroicons/react/24/solid';
import type { SiteManifest, SiteNavItem } from 'myst-config';
import { ThemeButton } from './ThemeButton.js';
import {
  useBaseurl,
  useLinkProvider,
  useNavOpen,
  useSiteManifest,
  withBaseurl,
} from '@myst-theme/providers';
import { LoadingBar } from './Loading.js';

export const DEFAULT_NAV_HEIGHT = 60;

function ExternalOrInternalLink({
  to,
  className,
  children,
  nav,
  prefetch = 'intent',
}: {
  to: string;
  className?: string | ((props: { isActive: boolean }) => string);
  children: React.ReactNode;
  nav?: boolean;
  prefetch?: 'intent' | 'render' | 'none';
}) {
  const Link = useLinkProvider();
  const staticClass = typeof className === 'function' ? className({ isActive: false }) : className;
  if (to.startsWith('http') || to.startsWith('mailto:')) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={staticClass}>
        {children}
      </a>
    );
  }
  if (nav) {
    return (
      <NavLink prefetch={prefetch} to={to} className={className}>
        {children}
      </NavLink>
    );
  }
  return (
    <Link prefetch={prefetch} to={to} className={staticClass}>
      {children}
    </Link>
  );
}

function NavItem({ item }: { item: SiteNavItem }) {
  if (!('children' in item)) {
    return (
      <div className="relative inline-block mx-2 grow-0">
        <ExternalOrInternalLink
          nav
          to={item.url ?? ''}
          className={({ isActive }) =>
            classNames(
              'inline-flex items-center justify-center w-full mx-2 py-1 text-md font-medium dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
              {
                'border-b border-stone-200': isActive,
              },
            )
          }
        >
          {item.title}
        </ExternalOrInternalLink>
      </div>
    );
  }
  return (
    <Menu as="div" className="relative inline-block mx-2 grow-0">
      <div className="inline-block">
        <Menu.Button className="inline-flex items-center justify-center w-full py-1 mx-2 font-medium rounded-md text-md text-stone-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <span>{item.title}</span>
          <ChevronDownIcon
            width="1.25rem"
            height="1.25rem"
            className="ml-2 -mr-1 text-violet-200 hover:text-violet-100"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-48 py-1 mt-2 origin-top-left bg-white rounded-sm shadow-lg left-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
          {item.children?.map((action) => (
            <Menu.Item key={action.url}>
              {/* This is really ugly, BUT, the action needs to be defined HERE or the click away doesn't work for some reason */}
              {action.url?.startsWith('http') ? (
                <a
                  href={action.url || ''}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {action.title}
                </a>
              ) : (
                <NavLink
                  to={action.url || ''}
                  className={({ isActive }) =>
                    classNames(
                      ' block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black ',
                      {
                        'text-black font-bold': isActive,
                      },
                    )
                  }
                >
                  {action.title}
                </NavLink>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function NavItems({ nav }: { nav?: SiteManifest['nav'] }) {
  if (!nav) return null;
  return (
    <div className="flex-grow hidden text-md lg:block">
      {nav.map((item) => {
        return <NavItem key={'url' in item ? item.url : item.title} item={item} />;
      })}
    </div>
  );
}

function ActionMenu({ actions }: { actions?: SiteManifest['actions'] }) {
  if (!actions || actions.length === 0) return null;
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="flex text-sm bg-transparent rounded-full focus:outline-none">
          <span className="sr-only">Open Menu</span>
          <div className="flex items-center text-stone-200 hover:text-white">
            <EllipsisVerticalIcon width="2rem" height="2rem" className="p-1" />
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {actions?.map((action) => (
            <Menu.Item key={action.url}>
              {({ active }) => (
                <a
                  href={action.url}
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700',
                  )}
                >
                  {action.title}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function HomeLink({
  logo,
  logoDark,
  logoText,
  name,
}: {
  logo?: string;
  logoDark?: string;
  logoText?: string;
  name?: string;
}) {
  const Link = useLinkProvider();
  const baseurl = useBaseurl();
  const nothingSet = !logo && !logoText;
  return (
    <Link
      className="flex items-center ml-3 dark:text-white w-fit md:ml-5 xl:ml-7"
      to={withBaseurl('/', baseurl)}
      prefetch="intent"
    >
      {logo && (
        <div
          className={classNames('p-1 mr-3', {
            'dark:bg-white dark:rounded': !logoDark,
          })}
        >
          <img
            src={logo}
            className={classNames('h-9', { 'dark:hidden': !!logoDark })}
            alt={logoText || name}
            height="2.25rem"
          ></img>
          {logoDark && (
            <img
              src={logoDark}
              className="hidden h-9 dark:block"
              alt={logoText || name}
              height="2.25rem"
            ></img>
          )}
        </div>
      )}
      <span
        className={classNames('text-md sm:text-xl tracking-tight sm:mr-5', {
          'sr-only': !(logoText || nothingSet),
        })}
      >
        {logoText || 'Made with MyST'}
      </span>
    </Link>
  );
}

export function TopNav() {
  const [open, setOpen] = useNavOpen();
  const config = useSiteManifest();
  const { logo, logo_dark, logo_text, logoText, actions, title, nav } =
    config ?? ({} as SiteManifest);
  return (
    <div className="bg-white/80 backdrop-blur dark:bg-stone-900/80 shadow dark:shadow-stone-700 p-3 md:px-8 fixed w-screen top-0 z-30 h-[60px]">
      <nav className="flex items-center justify-between flex-wrap max-w-[1440px] mx-auto">
        <div className="flex flex-row xl:min-w-[19.5rem] mr-2 sm:mr-7 justify-start items-center">
          <div className="block xl:hidden">
            <button
              className="flex items-center border-stone-400 text-stone-800 hover:text-stone-900 dark:text-stone-200 hover:dark:text-stone-100"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <MenuIcon width="2rem" height="2rem" className="m-1" />
              <span className="sr-only">Open Menu</span>
            </button>
          </div>
          <HomeLink
            name={title}
            logo={logo}
            logoDark={logo_dark}
            logoText={logo_text || logoText}
          />
        </div>
        <div className="flex items-center flex-grow w-auto">
          <NavItems nav={nav} />
          <div className="flex-grow block"></div>
          <ThemeButton />
          <div className="block sm:hidden">
            <ActionMenu actions={actions} />
          </div>
          <div className="hidden sm:block">
            {actions?.map((action, index) => (
              <ExternalOrInternalLink
                key={action.url || index}
                className="inline-block px-4 py-2 mx-1 mt-0 leading-none border rounded text-md border-stone-700 dark:border-white text-stone-700 dark:text-white hover:text-stone-500 dark:hover:text-neutral-800 hover:bg-neutral-100"
                to={action.url}
              >
                {action.title}
              </ExternalOrInternalLink>
            ))}
          </div>
        </div>
      </nav>
      <LoadingBar />
    </div>
  );
}
