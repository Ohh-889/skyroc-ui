import NavigationMenuChildLink from './NavigationMenuChildLink';
import NavigationMenuChildList from './NavigationMenuChildList';
import NavigationMenuChildListItem from './NavigationMenuChildListItem';
import NavigationMenuContent from './NavigationMenuContent';
import NavigationMenuItem from './NavigationMenuItem';
import NavigationMenuLink from './NavigationMenuLink';
import NavigationMenuList from './NavigationMenuList';
import NavigationMenuRoot from './NavigationMenuRoot';
import NavigationMenuTrigger from './NavigationMenuTrigger';
import NavigationMenuViewport from './NavigationMenuViewport';
import type { NavigationMenuItemOption, NavigationMenuLinkBaseOption, NavigationMenuProps } from './types';

function isLink(item: NavigationMenuItemOption): item is NavigationMenuLinkBaseOption {
  return item.type === 'link';
}

const NavigationMenuUI = (props: NavigationMenuProps) => {
  const { classNames, items, showArrow, size, viewport = true, ...rest } = props;

  return (
    <NavigationMenuRoot
      data-viewport={viewport}
      {...rest}
    >
      <NavigationMenuList
        className={classNames?.list}
        size={size}
      >
        {items.map((item, index) => {
          const itemKey = String(index);

          return (
            <NavigationMenuItem
              className={classNames?.item}
              key={itemKey}
              value={item.value}
            >
              {isLink(item)
                ? (
                  <NavigationMenuLink
                    classNames={classNames}
                    size={size}
                    {...item}
                  >
                    {item.label}
                  </NavigationMenuLink>
                )
                : (
                  <>
                    <NavigationMenuTrigger
                      classNames={classNames}
                      size={size}
                    >
                      {item.label}
                    </NavigationMenuTrigger>

                    <NavigationMenuContent className={classNames?.content}>
                      <NavigationMenuChildList
                        className={classNames?.childList}
                        size={size}
                      >
                        {item.children && item.children.length > 0
                          ? item.children.map((child, childIndex) => {
                            // Child items should be link type
                            const childItem = child as NavigationMenuLinkBaseOption;

                            return (
                              <NavigationMenuChildListItem
                                className={classNames?.childListItem}
                                key={String(childIndex)}
                              >
                                <NavigationMenuChildLink
                                  classNames={classNames}
                                  description={childItem.description}
                                  href={childItem.href}
                                  leading={childItem.leading}
                                  size={size}
                                  trailing={childItem.trailing}
                                >
                                  {childItem.label}
                                </NavigationMenuChildLink>
                              </NavigationMenuChildListItem>
                            );
                          })
                          : null}
                      </NavigationMenuChildList>
                    </NavigationMenuContent>
                  </>
                )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>

      {viewport
        ? (
          <NavigationMenuViewport
            classNames={classNames}
            size={size}
          />
        )
        : null}
    </NavigationMenuRoot>
  );
};

NavigationMenuUI.displayName = 'NavigationMenuUI';

export default NavigationMenuUI;
